'use client'
import React, { useEffect } from 'react'
import Component from './htable'
import Redirect from '@/hooks/redirect'

const HistoryPage = () => {
  useEffect(() => {
    Redirect();
  }, []);
  

  return (
    <div>
      <Component/>
    </div>
  )
}

export default HistoryPage
