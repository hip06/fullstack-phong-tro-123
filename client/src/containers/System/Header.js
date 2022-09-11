import React from 'react'
import { Navigation } from '../Public'

const Header = () => {
    return (
        <div className='w-full flex flex-none h-[40px]'>
            <div className='flex justify-center items-center font-bold bg-secondary1 text-white w-[256px] flex-none'>
                Phongtro123.com
            </div>
            <div className='flex-auto'>
                <Navigation isAdmin={true} />
            </div>
        </div>
    )
}

export default Header