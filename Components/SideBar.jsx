import {
    HomeIcon,
    SearchIcon,
    PlusCircleIcon,
    LibraryIcon
} from '@heroicons/react/outline'



function SideBar() {
    return (
        <div className='text-gray-500 p-5 text-sm border-gray-900'>
            <div>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HomeIcon className="w-5 h-5"/>
                    Home
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <SearchIcon className="w-5 h-5"/>
                    Search
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <LibraryIcon className="w-5 h-5"/>
                    Your Library
                </button>
                <hr className='border-t-[0,1px] border-gray-900'/>
            </div>
        </div>
    )
}

export default SideBar
