import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <ul className='flex justify-center gap-4 bg-pink-600'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact-us">Contact</Link></li>
      </ul>
    </div>
  )
}
