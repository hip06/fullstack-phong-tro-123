import React from 'react'
import { Overview, Address } from '../../components'

const CreatePost = () => {
    return (
        <div className='px-6'>
            <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
            <div className='flex gap-4'>
                <div className='py-4 flex flex-col gap-4 flex-auto'>
                    <Address />
                    <Overview />
                </div>
                <div className='w-[30%] flex-none'>
                    maps
                </div>
            </div>
        </div>
    )
}

export default CreatePost