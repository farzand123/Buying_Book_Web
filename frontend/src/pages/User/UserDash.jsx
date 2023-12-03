import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserDash = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          navigate("/books");
        }}
      >
        Get All Products
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          navigate("/myBooks");
        }}
      >
        Get All Purchased Books
      </button>
    </div>
  );
};
export default UserDash;
