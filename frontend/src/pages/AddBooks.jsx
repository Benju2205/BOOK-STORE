import React, { useState } from "react";
import axios from "axios";
const AddBooks = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/add", Data)
      .then((res) => alert(res.data.message));
      setData({
        bookname: "",
        author: "",
        description: "",
        image: "",
        price: "",
      })
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container rounded bg-secondary p-4">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter book name"
            // style={{width:"50%"}}
            name="bookname"
            value={Data.bookname}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Author:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the name of the author"
            name="author"
            onChange={change}
            value={Data.author}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter description of the book"
            name="description"
            onChange={change}
            value={Data.description}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the URL of the image"
            name="image"
            onChange={change}
            value={Data.image}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the price of the book"
            name="price"
            onChange={change}
            value={Data.price}
          />
        </div>
        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
