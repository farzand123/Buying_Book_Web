import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateNewBook = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const genres = ["action", "romance", "sci-fi", "comedy", "anime"];
  const [data, setData] = useState({
    title: "",
    price: "",
    author: "",
    publicationYear: "",
    genres: "",
    IBAN: "",
  });

  return (
    <>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#8fc4b7" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  className="w-100"
                  style={{ borderRadius: "0.3rem" }}
                  alt="Sample photo"
                />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Create Book
                  </h3>

                  <form
                    className="px-md-2"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setLoading(true);
                      const result = await axios.post(
                        "http://localhost:3000/createBook",
                        {
                          title: data.title,
                          price: data.price,
                          author: data.author,
                          publicationYear: data.publicationYear,
                          genres: data.genres,
                          IBAN: data.IBAN,
                        }
                      );
                      if (result.data) {
                        const response = result.data.result;
                        if (response) {
                          Swal.fire(" created a new book");

                          // Swal.fire(JSON.stringify(result.data));
                          setLoading(false);
                          navigate("/admin/books");
                        } else {
                          Swal.fire("Error in creating a new book");
                        }
                      }
                      setLoading(false);
                    }}
                  >
                    <div className="form-outline mb-4">
                      <input
                        required
                        value={data.title}
                        onChange={(e) => {
                          setData({ ...data, title: e.target.value });
                        }}
                        type="text"
                        id="book-title"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1q">
                        Title
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        required
                        value={data.author}
                        onChange={(e) => {
                          setData({ ...data, author: e.target.value });
                        }}
                        type="text"
                        id="author"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1q">
                        Author Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        required
                        value={data.price}
                        onChange={(e) => {
                          setData({ ...data, price: e.target.value });
                        }}
                        type="number"
                        id="price"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1q">
                        Price
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        required
                        value={data.IBAN}
                        onChange={(e) => {
                          setData({ ...data, IBAN: e.target.value });
                        }}
                        type="number"
                        id="iban"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1q">
                        IBAN
                      </label>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker">
                          <input
                            required
                            value={data.publicationYear}
                            onChange={(e) => {
                              setData({
                                ...data,
                                publicationYear: e.target.value,
                              });
                            }}
                            type="number"
                            className="form-control"
                            id="year"
                          />
                          <label
                            htmlFor="exampleDatepicker1"
                            className="form-label"
                          >
                            Published Year
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <select className="select form-control" required>
                          {genres.map((genre, index) => (
                            <option key={index} value={genre}>
                              {genre}
                            </option>
                          ))}
                        </select>
                        <label className="form-label" htmlFor="form3Example1q">
                          Genre
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success btn-lg mb-1"
                    >
                      Create
                    </button>
                    <div className="text-center">
                      {loading && (
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateNewBook;
