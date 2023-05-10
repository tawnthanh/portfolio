import Navbar from '../Navbar';
import './Content.css';

const Content = () => {
    return (
        < div className='main-content'>
            <Navbar />
            <div className="content">
                This is the content block.
            </div>
        </ div>
    )
};

export default Content;