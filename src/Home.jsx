// Props: 상위 컴포넌트에서 하위 컴포넌트로 피라미터를 전달하는 것.
// Home -> Prop name, age

import { Link } from "react-router-dom";
import Prop from "./pages/Prop";
import { nation, nations } from "./data/data";

function Home() {
  return (
    <div className="home">
      <h2>Home.jsx</h2>
      {/* <Prop n="name1" age="11" nation="대한민국" /> */}
      {/* /board/110, /board?page=10, /board?q=a */}
      <Link
        to={{
          pathname: "/param/10",
        }}
      >
        param전송(path variable)
      </Link>
      <div>
        <Link to="/param?q=aa">param전송</Link>
        <Link
          to={{
            pathname: "/param",
            search: "?q=aa&page=10",
          }}
        >
          param전송(query string)
        </Link>
      </div>
      <div>
        {nations.map((n) => (
          <Link
            to={{
              pathname: `/param/${n.name}`,
            }}
          >
            {n.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
