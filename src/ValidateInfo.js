import React from "react";

export default function ValidateInfo(inputs) {
  let errors = {};

  if (!inputs.firstname.trim()) {
    errors.firstname = "error";
  } else {
    errors.firstname = "success";
  }


  if (!inputs.lastname.trim()) {
    errors.lastname = "error";
  } else {
    errors.lastname = "success";
  }

  


  if (!inputs.email) {
    errors.email = "error";
  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    errors.email = "error";
  } else {
    errors.email = "success";
  }


  if (!inputs.phone) {
    errors.phone = "error";
  } else {
    errors.phone = "success";
  }

 

  //PASSWORD
  if (!inputs.password) {
    errors.password = "error";
  } else if (inputs.password.length < 6) {
    errors.password = "error";
  } else {
    errors.password = "success";
  }

  //CONFIRM PASSWORD
  if (!inputs.password2) {
    errors.password2 = "error";
  } else if (inputs.password2 !== inputs.password) {
    errors.password2 = "error";
  } else {
    errors.password2 = "success";
  }

  return errors;
}
