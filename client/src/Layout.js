import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  const goArticles = () => {
    //replace: history에 남기지 않고 이동함
    navigate('/articles', {replace: true});
  }

  return (
    <div>
      <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;