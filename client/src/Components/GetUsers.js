import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
// {"id":1,"firstName":"Phineas","lastName":"Franciottoi","email":"pfranciottoi0@hostgator.com","password":"y0pWrGzmDz"}
  return (
    <div>
      {/* {" "}
      {users.map((val) => {
        return <h1> {val.firstName}</h1>;
      })} */}
       <table>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        {users.map((val) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.email}</td>
              <td>{val.password}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default GetUsers;
