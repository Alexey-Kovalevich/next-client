'use client'
import {useState} from 'react'
import {signIn} from 'next-auth/react'
import './page.scss'
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSignIn = async (e: any) => {
    e.preventDefault()
    const resp = await signIn('credentials', { email, password, redirect: false })
    
    if (!resp?.error) {
      router.push('/dashboard')
    } else {
      alert(resp.error)
    }
    
  }

  return (
    <>
      <h1 className='heading'>Sign in</h1>
      <form action="" onSubmit={handleSignIn}>
        <div className="form">
          <input
            className="input__value"
            name='email'
            id='email'
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <input
            className="input__value"
            name='Password'
            id='password'
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button type="submit" className='input__button'>Sign In</button>
        </div>
      </form>
    </>
  )
}

export default SignIn