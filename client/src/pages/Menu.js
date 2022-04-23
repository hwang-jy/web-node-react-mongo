import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/profiles/velopert">Velopert 프로필</Link></li>
      <li><Link to="/profiles/gildong">gildong 프로필</Link></li>
      <li><Link to="/profiles/void">존재하지 않는 프로필</Link></li>
      <li><Link to="/articles">게시글 목록</Link></li>
    </ul>
  );
}

export default Menu;