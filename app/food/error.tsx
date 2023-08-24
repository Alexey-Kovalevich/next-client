"use client"

import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div>Data was not fetched. Go to the <Link href="/food">Food page</Link></div>
  )
}

export default Error