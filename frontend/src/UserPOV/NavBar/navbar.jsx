import './nav.css'
import logo1 from '../NavBar/logo1.png'

const Navbar2 = () => {

    return ( 
        <div className='nav'>
            <div className='logoandname'>
                {/* <div> <img className='logo1' src={logo1} alt = "Repliblogo"/> </div> */}
                <div className='replib'>REPLIB</div>
            </div>
            <div className='links'>
                <ul>
                    <li ><a href='/home'>Home</a></li>
                    <li><a href='/home' >About</a></li>
                    <li><a href='/home' >Connect</a></li>
                    <li><a href='/home' >YAY</a></li>
                    <li><a href='/home' >Reach Out</a></li>
                </ul> 
                
            </div>
           
           
        </div>
           
        
     );
}
 
export default Navbar2;