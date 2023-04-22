import { NavLink, Outlet } from 'react-router-dom'



export default function AboutLayout() {
    return (
        <div className='root-layout'>
            <blockquote class="text-2xl font-semibold italic text-center text-slate-900">

                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span class="relative text-white">YumYum</span>

                </span>

                <br />

            </blockquote>
            <header>
                <nav>
                    < NavLink to='/' >
                        < button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >
                            Home
                        </button >
                    </NavLink >


                </nav>
            </header>

            <main>

                <Outlet />
            </main>
        </div>
    )
}