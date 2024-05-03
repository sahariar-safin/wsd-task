import React from 'react'

function TextForm({ setText }) {
  return (
    <div className='flex flex-col p-5 gap-3'>
        <textarea id="text" rows="4" cols="50" className='border p-2' placeholder="Enter text here"></textarea>
        <button className='p-2 bg-slate-600 text-cyan-50 border' id="submit">Submit</button>
    </div>
  )
}

export default TextForm