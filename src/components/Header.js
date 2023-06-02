import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='flex my-1 w-1/2 mx-auto'>
            <Link className=' bg-gray-600 mx-auto px-3 py-1 text-white rounded-3' to='/' >Form page</Link>
            <Link className=' bg-gray-600 mx-auto px-3 py-1 text-white rounded-3' to='/tabl' >Table page</Link>
        </div>
    )
}
