import React from 'react'

const loading = () => {
  return (
    <div className=' flex w-full justify-center items-center' style={{height: "calc(100vh - 60px)"}}>
      <span className="loader"></span>
    </div>
  )
}

export default loading