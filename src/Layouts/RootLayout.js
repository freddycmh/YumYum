import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className='root-layout'>

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