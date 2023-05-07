import React from "react";
import axios from "axios";

const BooksSection = ({ data }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/api/v1/deleteBook/${id}`);
      alert("Book deleted successfully!");
      // perform any additional actions after deleting the book
    } catch (error) {
      console.error(error);
      // handle any errors that occur during the deletion process
    }
  };

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
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
              <button className="btn btn-primary">Update</button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
