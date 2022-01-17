import {
    HomeIcon,
    SearchIcon,
    PlusCircleIcon,
    LibraryIcon,
    HeartIcon,
    RssIcon
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'



function SideBar() {
    const { data: session, status } = useSession()

    return (
        <div className='text-gray-500 p-5 text-sm border-gray-900'>
            <div className='space-y-4'>
            <button className='flex items-center space-x-2 
                hover:text-white'
                onClick={() => signOut()}>
                    <p>Log Out</p>
                </button>
                <button className='flex items-center space-x-2 
                hover:text-white'>
                    <HomeIcon className="w-5 h-5"/>
                    <p>Home</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <SearchIcon className="w-5 h-5"/>
                     <p>Search</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <LibraryIcon className="w-5 h-5"/>
                    <p>Your Library</p>
                </button>
                <hr className='border-t-[0,1px] border-gray-900'/>




                <button className='flex items-center space-x-2 
                hover:text-white'>
                    <PlusCircleIcon className="w-5 h-5"/>
                    <p>Create Playlist</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HeartIcon className="w-5 h-5"/>
                     <p>Liked Songs</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <RssIcon className="w-5 h-5"/>
                    <p>Your Library</p>
                </button>
                <hr className='border-t-[0,1px] border-gray-900'/>

                {/* PlayLists */}
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
                <p className='cursor-pointer hover:text-white'>PlayList name...</p>
            </div>
        </div>
    )
}

export default SideBar
