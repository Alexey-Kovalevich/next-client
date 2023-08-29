// 'use client'

import { useEffect } from "react"
// import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { cookies } from 'next/headers'

const Dashboard = () => {
  // const {data} = useSession()
  // const cookieStore = cookies()
  
  // const theme = cookieStore.get('next-auth.session-token')
  // if (!theme?.name) {
  //   redirect('/api/auth/signin')
    
  // }
  // useEffect(() => {
  //   console.log(data);
  //   if (!data?.user) {
    // redirect('/api/auth/signin')
    //   }
    
  // })
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>hello, manager!</p>
      {/* <p>hello, {data?.user?.name}!</p> */}
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  )
}

export default Dashboard