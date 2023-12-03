import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { purchasedBook } from "../services";

const MyBooks = () => {
  const user = useSelector((state) => state.user);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getMyBooks() {
      // call api
      const data = await purchasedBook(user?.id);
      setBooks(data?.result || []);
    }
    getMyBooks();
  }, []);
  return (
    <div className="container">
      <div className="display-3 text-center">My Owned Books</div>
      <div className="row">
        {books.map((book, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-12">
            <div className="text-center p-3">
              <img
                style={{ borderRadius: "10px" }}
                src={`https://api.dicebear.com/6.x/shapes/svg?seed=${book.IBAN}`}
                alt=""
              />
            </div>
            <div className="info container ">
              <div
                className="display-6 text-center"
                style={{ fontSize: "25px" }}
              >
                {book.title}
              </div>

              <div
                className="display-6 text-center"
                style={{ fontSize: "25px" }}
              >
                {book.price} $
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyBooks;
