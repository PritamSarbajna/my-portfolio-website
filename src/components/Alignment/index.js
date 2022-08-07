import Navbar from '../Navbar';
import './index.scss';
import { Outlet } from 'react-router-dom';

const Alignment = () => {
    return (
        <div className='App'>
            <Navbar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}

export default Alignment