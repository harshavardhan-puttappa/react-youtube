import React, { useState } from "react";

const InputForm = ({ handleForm }) => {
  const [data, setData] = useState("");

  const handleChange = e => {
    //this.setState({ data: e.target.value });
    setData(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleForm(data);
    setData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input type="text" className="form-control" name="search" id="search" value={data} onChange={handleChange}  placeholder="Search videos.." />
        <button type="submit" className="btn btn-secondary"><i className="fas fa-search"/></button>
      </div>
     
    </form>
  );
};

export default InputForm;
