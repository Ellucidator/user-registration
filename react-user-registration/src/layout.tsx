import { Outlet } from 'react-router-dom'

export function Layout() {
    return (
        <>
            <header>
                
            </header>
            <div>
                <Outlet />
            </div>
            <footer>

            </footer>

        </>
    )
}