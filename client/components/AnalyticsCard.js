import React from 'react'

function AnalyticsCard({ title, description }) {
  return (
    <div className='flex flex-col p-5 gap-3'>
        <div className='bg-slate-600 p-5 rounded-lg'>
            <h2 className='text-cyan-50'>{title}</h2>
            <p className='text-cyan-50'>{description}</p>
        </div>
    </div>
  )
}

export default AnalyticsCard