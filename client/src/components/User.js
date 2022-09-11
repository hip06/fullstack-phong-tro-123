import React from 'react'
import { useSelector } from 'react-redux'
import anonAvatar from '../assets/anon-avatar.png'

const User = () => {
    const { currentData } = useSelector(state => state.user)

    return (
        <div className='flex items-center gap-2'>
            <img src={currentData?.avatar || anonAvatar} alt="avatar" className='w-10 object-cover rounded-full h-10 border-2 shadow-md border-white' />
            <div className='flex flex-col'>
                <span>Xin chào, <span className='font-semibold'>{currentData?.name}</span></span>
                <span>Mã tài khoản: <span className='font-medium'>{`${currentData?.id?.slice(0, 10)}...`}</span></span>
            </div>
        </div>
    )
}

export default User