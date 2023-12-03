import { useState, useEffect } from "react";
import { getAllAuthors } from "../services";
import { Link } from "react-router-dom";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function getAuthors() {
      // call api
      const data = await getAllAuthors();
      setAuthors(data);
    }
    getAuthors();
  }, []);
  return (
    <div className="container row">
      {authors.map((author, index) => (
        <Link
          to={`/authors/${author}`}
          key={index}
          className="col-md-4 col-sm-6 col-xs-12 "
          style={{ cursor: "pointer" }}
        >
          <div className="card my-2 p-1">
            <div className="text-center p-3">
              <img
                style={{ borderRadius: "10px", backgroundColor: "lightblue" }}
                src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${author}`}
                alt=""
              />
            </div>
            <div className="text-center display-6"> {author}</div>
          </div>
        </Link>
      ))}
      {}
    </div>
  );
};
export default Authors;
