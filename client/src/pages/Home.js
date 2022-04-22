import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>this page is home</p>
            <Link to="/">Go Home</Link>
            <Link to="/About">Go About</Link>
        </div>
    );
}

export default Home;