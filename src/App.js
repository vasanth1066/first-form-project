import React, { useState } from "react";

import Forms from "./Components/User/Forms";
import Formlist from "./Components/User/Formlist";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (Name, Age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: Name, age: Age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <Forms onAddUser={addUserHandler} />

      <Formlist users={usersList} />
    </React.Fragment>
  );
}

export default App;
