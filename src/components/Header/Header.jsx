
import {Link} from 'react-router-dom'
import './Header.css'
const Header=()=>{
 return (
<div id="header-container">
<h1>OUR-NEWS </h1>
<nav>
    <Link to='/'>Home / </Link>
    <Link to='/articles'>All Articles /</Link>
    <Link to='/articles/topics'>Topics</Link>

</nav>




</div>
   

 )




}

export default Header