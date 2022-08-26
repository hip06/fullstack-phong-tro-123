import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Navigation, Search } from './index'

const Home = () => {
    return (
        <div className='w-full flex flex-col items-center h-full'>
            <Header />
            <Navigation />
            <Search />
            <div className='w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3'>
                <Outlet />
            </div>

        </div>
    )
}

export default Home