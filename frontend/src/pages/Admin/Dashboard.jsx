import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          navigate("/admin/create/book");
        }}
      >
        {" "}
        Add product
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          navigate("/admin/books");
        }}
      >
        Get All Products
      </button>
    </>
  );
};
export default Dashboard;
