import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', placeholder: 'Login' },
        password: { label: 'Password', placeholder: 'Password' },
      },
      async authorize(credentials) {
        const user = await fetch('http://localhost:3000/api/sign-in', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        }).then((r) => r.json());

        if (user.error) {
          throw new Error(user.error);
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      return {
        ...session,
        user: token,
      };
    },
  },
};

const handler = NextAuth(authOptions)

export default handler
