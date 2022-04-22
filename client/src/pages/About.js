import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 router page</p>
            <Link to="/">Go Home</Link>
            <Link to="/About">Go About</Link>
        </div>
    );
}

export default About;