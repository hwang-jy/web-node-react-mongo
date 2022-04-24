import GoogleLoginBtn from '../components/google/GoogleLogin';
import GoogleLogoutBtn from '../components/google/GoogleLogout';
import ContentList from '../components/content/ContentList';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [contents, setContents] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const result = await axios.get('/api/contents');
          setContents(result.data);
      }

      fetchData();
  }, []);

  const content = contents === null ? (
    <div>
        게시글을 불러올 수 없습니다.
    </div>
  ) : (
    <ContentList contents={contents} />
  )

  return (
    <div>
        <h1>Home</h1>
        <p>Hello, this page is Homepage!</p>
        <p><GoogleLoginBtn /></p>
        <div>
            {content}
        </div>
    </div>
);
}

export default Home;