import React from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "../ValidateInfo";

function Form() {
  const { handleChange, inputs, handleSubmit, errors } = useForm(validate);


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form__row">
          <input
            type="text"
            name="firstname"
            placeholder="First Name *"
            value={inputs.firstname}
            onChange={handleChange}
            className={`${errors.firstname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name *"
            value={inputs.lastname}
            onChange={handleChange}
            className={`${errors.lastname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

        
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={inputs.email}
            onChange={handleChange}
            className={`${errors.email} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
         
          <input
            type="number"
            name="phone"
            placeholder="966 57452455"
            value={inputs.phone}
            onChange={handleChange}
            className={`${errors.phone} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

        
          <input
            type="password"
            name="password"
            placeholder="Password *"
            value={inputs.password}
            onChange={handleChange}
            className={`${errors.password} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password *"
            value={inputs.password2}
            onChange={handleChange}
            className={`${errors.password2} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
<input type="file" id="fileUpload" style={{width: "52%"}} />
<input id="upload" type="button" value="Upload" style={{width: "8%",background:"black",color:"white"}}/>

                         <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
