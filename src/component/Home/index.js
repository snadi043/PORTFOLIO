
import {Link} from 'react-router-dom';
import './style.scss';

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

const Home = () => {
    return (
        <div className="Home">
            <div className='text-zone'>
                <div className='title'>
                <h1>
                <span className="a">HI, I'M</span>
                <span>  </span>
                <span className="a" >S</span>
                <span className="a" >A</span>
                <span className="a" >I</span>
                <span>  </span>
                <span className="a">H</span>
                <span className="a" >A</span>
                <span className="a" >R</span>
                <span className="a" >N</span>
                <span className="a">A</span>
                <span className="a" >D</span>
                <span className="a">H</span>
               </h1>
                </div>
                <h2>| Web Developer | Front End Developer |</h2>
                <Link to="/contact" className='flat-button'>
                    <button>Contact Me</button>
                </Link>
            </div>    
        </div>
    );
};

export default Home;
