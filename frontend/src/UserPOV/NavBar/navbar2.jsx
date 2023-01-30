import './nav.css'
import YAY from '../NavBar/YAY.PNG'

const Navbar2 = () => {

    return (
        <div className='wholenav'>
            <div className='nav '>
                {/* <div className='logoandname'></div> */}
                    
                <div className='links '>  
                    <ul>
                        <li ><a href='/home'>Home</a></li>
                        <li><a href='/about' >About</a></li>
                        <li><a href='/home' ><img className='logo1' src={YAY} alt = ""/></a></li>
                        <li><a href='/home' >Connect</a></li>
                        <li><a href='/home' >Reach Out</a></li>
                    </ul>  
                </div>
            
            
            </div>
            
        </div>
           
        
     );
}
 
export default Navbar2;