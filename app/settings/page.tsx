'use client'
import React from 'react'
import PersonalInfo from "./PersonalInfo";
import Redirect from '@/hooks/redirect';

const Settings = () => {
  Redirect()
  return (
    <div>
          <PersonalInfo/>
    </div>
  )
}

export default Settings
