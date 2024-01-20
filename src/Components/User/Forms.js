import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal.js";
import classes from "./User.module.css";
import Wrapper from "../Helper/Wrapper.js";

const Forms = (props) => {
  const NameRef = useRef();
  const AgeRef = useRef();
  const CollegeRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const Username = NameRef.current.value;
    const Userage = AgeRef.current.value;
    const UserCollegeName = CollegeRef.current.value;

    if (
      Username.length === 0 ||
      Userage.length === 0 ||
      UserCollegeName.length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age and college name.",
      });
      return;
    }
    if (+AgeRef < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return;
    }
    props.onAddUser(Username, Userage, UserCollegeName);
    NameRef.current.value = "";
    AgeRef.current.value = "";
    CollegeRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={NameRef} />
          <label htmlFor="age">Age </label>
          <input id="age" type="number" ref={AgeRef} />
          <label htmlFor="clgname">College Name</label>
          <input id="clgname" type="text" ref={CollegeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Forms;
