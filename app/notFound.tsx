import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <section>
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>
        <Link href={'/auth/login'}>volver</Link>
    </section>
  )
}

export default notFound