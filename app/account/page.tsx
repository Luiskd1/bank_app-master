'use client'
import React, { useEffect } from 'react'
import Component from './component'
import Redirect from '@/hooks/redirect'

const AccountPage = () => {
  useEffect(() => {
    Redirect();
  }, []);
  return (
    <div>
      <Component/>
    </div>
  )
}

export default AccountPage
