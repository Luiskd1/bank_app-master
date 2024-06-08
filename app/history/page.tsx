'use client'
import React from 'react'
import Component from './htable'
import Redirect from '@/hooks/redirect'

const HistoryPage = () => {
  Redirect()

  return (
    <div>
      <Component/>
    </div>
  )
}

export default HistoryPage
