import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBookById } from "../services";
export const BookDetailItem = ({
  _id,
  title,
  price,
  IBAN,
  desc = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ipsum fugiat dicta natus unde omnis. Aspernatur adipisci optio quia similique. Eum ipsam voluptatum voluptas, consequatur debitis et nihil? Ab, nam.`,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card my-2">
      <div className="text-center p-3">
        <img
          style={{ borderRadius: "10px", height: "200px" }}
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
        <div className="p-5 my-3">{desc}</div>
      </div>
      <div className="d-flex flex-wrap my-2 justify-content-around">
        <button className="btn btn-warning" onClick={() => {}}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={async () => {
            await deleteBook(_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const BookDetail = () => {
  const [book, setBook] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function getBook() {
      const res = await getBookById(id);
      setBook(res.result);
    }
    getBook();
  }, []);
  return (
    <div>
      {JSON.stringify(book)}
      <BookDetailItem {...book} />
    </div>
  );
};

export default BookDetail;
