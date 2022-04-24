import { useParams } from 'react-router-dom';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Loading = () => {
  return (
    <div>
      Loading...
    </div>
  );
}

const Detail = (props) => {
  return (
    <div>
      <h2>Title: {props.content.title}</h2>
      <p>Content: {props.content.content}</p>
    </div>
  );
}

const Content = () => {
  const [content, setContent] = useState(null);
  const params = useParams();
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/contents/${params.id}`);
      setContent(result.data);
    }

    fetchData();
  }, []);

  const view = content === null ? 
    (<Loading />) : (<Detail content={content}/>)

  return (
    <div>
      {view}
    </div>
  );
}

export default Content;