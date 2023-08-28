import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' }
      },
      async authorize(credentials) {
        const user = await fetch('http://localhost:3000/api/sign-in', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: credentials?.email, password: credentials?.password}),
        }).then((r) => r.json())
        
        if (user.error) {
          throw new Error(user.error) 
        }
        console.log('user: ', user);
        

        return user;
      }
    })
  ]
}

export default NextAuth(authOptions)