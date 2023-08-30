import Link from 'next/link'
import React from 'react'

const Permission = () => {
  return (
    <div>
      <p>Oops, you don't have rights to visit requested page</p>
      <p>Go to <Link href="/">Homepage</Link> </p>
    </div>
  )
}

export default Permission