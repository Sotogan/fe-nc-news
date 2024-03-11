
import {Link} from 'react-router-dom'
import './Home.css'
const Home=()=>{

    return (
        <div className="home-page">
          <h2>Welcome to NC NEWS !!!</h2>
          <p>Find intresting articles from around the world</p>
          <Link to="/articles" className="btn">
            View All Articles!
          </Link>
        </div>
      );
}


export default Home