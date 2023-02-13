import './nav.css'
import YAY from '../NavBar/YAY.PNG'

const Navbar2 = () => {

    return (
        <div className='wholenav'>
            <div className='nav'>
                <div>
                    <li><a href='/home' ><img className='logo1' src={YAY} alt = ""/></a></li>
                </div>

                <div>
                    <ul className='linkspacing'>
                        <li ><a href='/home'>Home</a></li>
                        <li><a href='/about' >About</a></li>
                        <li><a href='/connect' >Connect</a></li>
                        <li><a href='/give' >Give</a></li>
                    </ul>
                </div>
                
            
            
            </div>
            
        </div>
           
        
     );
}
 
export default Navbar2;

{/* <div className='logoandname'></div> */}
                    
                {/* <div className='links '>
                    <div className='row'>
                                <div className='col'>
                                    <li><a href='/home' ><img className='logo1' src={YAY} alt = ""/></a></li>
                                </div>
                                <div className='col'>
                                    <li ><a href='/home'>Home</a></li>
                                    <li><a href='/about' >About</a></li>
                                    <li><a href='/connect' >Connect</a></li>
                                    <li><a href='/connect' >Connect</a></li>
                                </div> 
                    </div>  
                </div> */}