import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllBooks, purchaseBook } from "../../services";
import { useEffect, useState } from "react";
import { clearCart } from "../../store/UserActions";
import Swal from "sweetalert2";

const ChechkOut = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getBooks() {
      const { result } = await getAllBooks();
      const cartArray = [];
      for (const key in cart) {
        console.log(key, cart[key]);
        const foundItem = result.find((item) => item._id === key);
        if (foundItem) {
          cartArray.push({ ...foundItem, qty: cart[key] });
        }
      }

      setBooks(cartArray);
    }

    getBooks();
  }, []);
  return (
    <>
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          navigate("/books");
        }}
      >
        Add More Books to Cart
      </button>

      <button
        className="btn btn-primary mx-1"
        onClick={async () => {
          await books.map(async (book) =>
            purchaseBook(user.id, book._id, book.qty)
          );
          Swal.fire("Books purchased");

          setBooks([]);
          dispatch(clearCart());
        }}
      >
        Pay
      </button>
      <label>Books in Cart</label>

      <div>
        <table className="table container my-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Author</th>
              <th>Price</th>

              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.qty}</td>
                <td>{book.qty * book.price}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={"5"}>Total Bill </td>
              <td>
                {books.reduce((total, book) => {
                  total += book.price * book.qty;
                  return total;
                }, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ChechkOut;
