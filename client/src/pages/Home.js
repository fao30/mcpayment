import Search from "../components/Search";
import Listtodo from "../components/Listtodo";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <center>
            <h3>Money flows app</h3>
          </center>
          <Search />
          <Listtodo />
        </div>
      </div>
    </div>
  );
}
