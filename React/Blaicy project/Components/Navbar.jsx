import '../Styles/Navbar.css'
import { FaBell , FaHeart} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar(){
  return (
    <header >
     <div className='logo'>Hunnie</div>
     <div className='options'>
        <span>Buy</span>
        <span>Sell</span>
        <span>Finance</span>
        <span>Research</span>
     </div>
     <div className='icons'>
        <div >
          <span> <FaBell /></span>
          <span><FaHeart /></span>
          <span className='Pipe'> &#124;</span>
          <span><CgProfile /></span>
        </div>
     </div>
    </header>
  )
}
export default Navbar