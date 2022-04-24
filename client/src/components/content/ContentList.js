import { Link } from "react-router-dom";

const ContentRow = (data, i) => {
  return (
    <li key={data.seq}>
      <Link 
        to={`/contents/${data.seq}`}
        >
          {data.title}
      </Link>
    </li>
  );
}

const ContentList = (props) => {

  const mapToComponent = (data) => {
    data.sort()
    return data.map((item, i) => {
      return ContentRow(item, i);
    });
  }

  return (
    <ul>
      {mapToComponent(props.contents)}
    </ul>
  );
}

export default ContentList;