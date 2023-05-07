import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const BooksSection = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();

  return (
    
    <div className="d-flex bg-success justify-content-around align-items-center flex-wrap my-3">
      {data &&
        data.map((item, index) => (
          <div
            className="m-3"
            style={{
              width: "15rem",
              height: "30rem",
              backgroundColor: "#68705c",
              borderRadius: "1rem",
            }}
          >
            <div>
              <img
                style={{
                  width: "15rem",
                  height: "20rem",
                  borderRadius: "1.5rem 1.5rem 0 0",
                }}
                className="img-fluid"
                src={item.image}
                alt="/"
              />
            </div>
            <h5 style={{ fontSize: "1.2rem" }} className="px-2 my-1">
              {item.bookname.slice(0, 50)}
            </h5>
            <b
              style={{ fontSize: "1.3rem", color: "white" }}
              className="mb-2 px-2"
            >
              Rs. {item.price}
            </b>
            <div className="d-flex justify-content-around align-items-center my-2">
              <Link to={`/books/${item._id}`} className="btn btn-primary">
                Update
              </Link>
              <button
                onClick={async () => {
                  await axios
                    .delete(
                      `http://localhost:1000/api/v1/deleteBook/${item._id}`
                    )
                    .then((res) => res.data)
                    .then(() => navigate("/"))
                    .then(() => navigate("/books"));
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
