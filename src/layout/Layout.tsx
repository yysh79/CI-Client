import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Layout() {
    return (
        <div className='h-screen flex '>
            <Sidebar/>
            <div className=' flex flex-col w-screen h-screen '>
            <Header />
                <div className='flex-grow'>
                <Outlet/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
