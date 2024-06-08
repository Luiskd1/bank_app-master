'use client'
import React from 'react'
import GoTo from '@/hooks/redirect';
import ComponentDash from './component';


const page = () => {
  GoTo()
  return (
    <div>
      <ComponentDash/>
    </div>
  )
}

export default page
