import { useEffect, useState } from "react";
import {
  deleteBook,
  getAllBooks,
  getAllBooksByAuthor,
  updateStock,
} from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart, removeFromCart } from "../../store/UserActions";
export const BookItem = ({
  _id,
  title,
  price,
  IBAN,
  fetchBooks,
  available,
}) => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="card my-2">
      <div
        className="text-center p-3"
        onClick={() => {
          if (user && user.type == "Admin") navigate(`/admin/book/edit/${_id}`);

          // navigate(`/admin/book/${_id}`);
        }}
      >
        <img
          style={{ borderRadius: "10px" }}
          src={`https://api.dicebear.com/6.x/shapes/svg?seed=${IBAN}`}
          alt=""
        />
      </div>

      <div className="info container ">
        <div className="display-6 text-center" style={{ fontSize: "25px" }}>
          {title}
        </div>

        <div className="display-6 text-center" style={{ fontSize: "25px" }}>
          {price} $
        </div>
        <div className="display-6 text-center" style={{ fontSize: "25px" }}>
          In Stock : {available}
        </div>
      </div>
      {user?.type == "Admin" ? (
        <div className="d-flex flex-wrap my-2 justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => {
              if (user && user.type == "Admin")
                navigate(`/admin/book/edit/${_id}`);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              Swal.fire({
                title: "New Amount of Stock",
                input: "number",
                inputAttributes: {
                  autocapitalize: "off",
                },
                showCancelButton: true,
                confirmButtonText: "Update Stock",
                showLoaderOnConfirm: true,

                allowOutsideClick: () => !Swal.isLoading(),
              }).then(async (result) => {
                if (result.isConfirmed) {
                  await updateStock(_id, result.value);

                  Swal.fire({
                    title: `Stock Updated `,
                  });
                  fetchBooks();
                }
              });
            }}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={async () => {
              await deleteBook(_id);
              fetchBooks();
            }}
          >
            Delete
          </button>
        </div>
      ) : user?.type == "User" ? (
        <>
          <div className="display-6 text-center" style={{ fontSize: "25px" }}>
            In Cart : {cart[_id] || 0}
          </div>
          <div className="d-flex flex-wrap my-2 justify-content-around">
            <button className="btn btn-info" onClick={() => {}}>
              Details
            </button>

            <button
              className="btn btn-success"
              onClick={() => {
                Swal.fire({
                  title: "add to cart",
                  input: "number",
                  inputAttributes: {
                    autocapitalize: "off",
                  },
                  showCancelButton: true,
                  confirmButtonText: "Add",
                  showLoaderOnConfirm: true,

                  allowOutsideClick: () => !Swal.isLoading(),
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    // await updateStock(_id, result.value);
                    if (result.value > 0 && result.value <= available)
                      Swal.fire({
                        title: `${result.value} books added to cart `,
                      });
                    else
                      Swal.fire({
                        title: `You entered wrong amount `,
                      });

                    // fetchBooks();
                  }
                });
              }}
            >
              Buy
            </button>
          </div>
          <div className="d-flex flex-wrap my-2 justify-content-around">
            <button
              style={{}}
              className="btn btn-warning "
              onClick={() => {
                dispatch(removeFromCart(_id));
              }}
            >
              -
            </button>

            <button
              style={{}}
              className="btn btn-warning "
              onClick={() => {
                if (cart[_id] == null || cart[_id] < available)
                  dispatch(addToCart(_id));
              }}
            >
              +
            </button>
          </div>
        </>
      ) : (
        <div className="d-flex flex-wrap my-2 justify-content-around">
          <button className="btn btn-info" onClick={() => {}}>
            Details
          </button>
        </div>
      )}
    </div>
  );
};
const GetBooksByAuthor = () => {
  const { name } = useParams();
  const [books, setBooks] = useState([]);
  async function fetchBooks() {
    const data = await getAllBooksByAuthor(name);
    setBooks(data || []);
  }
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <div className="container row">
        <div className="display-6 text-center">Author : {name}</div>
        {books.map((book, index) => (
          <div key={index} className=" col-lg-3 col-md-4 col-sm-6  col-xs-12">
            <BookItem
              fetchBooks={fetchBooks}
              _id={book._id}
              title={book.title}
              price={book.price}
              key={index}
              IBAN={book.IBAN}
              available={book.available}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default GetBooksByAuthor;
