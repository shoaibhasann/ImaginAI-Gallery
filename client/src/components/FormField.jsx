import React from 'react'

function FormField({ labelName, type, placeholder, name, value, handleChange, isSurpriseMe, handleSurpriseMe}) {
  return (
    <div>
        <div className='flex items-center gap-2 mb-2'>
            <label className='block text-sm font-medium text-gray-900' htmlFor={name}>
                {labelName}
            </label>
            {
                isSurpriseMe && (
                    <button
                    type='button'
                    onClick={handleSurpriseMe}
                    className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'
                    >
                        Surprise me
                    </button>
                )}
        </div>
        <input className='bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' type={type} name={name} placeholder={placeholder} id={name} value={value} onChange={handleChange} required />
    </div>
  )
}

export default FormField