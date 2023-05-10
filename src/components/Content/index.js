import { Routes, Route } from 'react-router-dom';
import About from '../About';
import Navbar from '../Navbar';
import './Content.css';

const Content = () => {
    return (
        < div className='content'>
            <Navbar />
            <Routes>
                <Route path='/portfolio' element={<About />}/>
            </Routes>
        </ div>

    )
};

export default Content;