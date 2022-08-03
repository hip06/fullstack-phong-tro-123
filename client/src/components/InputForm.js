import React, { memo } from 'react'

const InputForm = ({ label }) => {
    return (
        <div>
            <label htmlFor="phone" className='text-xs' >{label}</label>
            <input
                type="text"
                id="phone"
                className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full'
            />
        </div>
    )
}

export default memo(InputForm)