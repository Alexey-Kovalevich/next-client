'use client'

import { useSession } from "next-auth/react"

const Dashboard = () => {
  const session = useSession()
  
  return (
    <div>
      <h1>Dashboard</h1>
      {session.status === 'authenticated' ? <p>hello, {session?.data?.user?.name}</p> : <p>hello</p>}
    </div>
  )
}

export default Dashboard