import React from "react";

import Card from "../UI/Card";
import classes from "./User.module.css";

const list = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <div>
            {user.name} ({user.age} years old)
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default list;
