import React, { useEffect, useState } from "react";

import Search from "./Search";
import Pagination from "./Pagination";
import UserListItem from "./UserListItem";

import userService from "../services/userService";

export default function UserList() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    userService.getAll()
      .then(result => {
        setUsers(result)
      })
  }, []);


  return (
    <>
      <section className="card users-container">
        {/* Search bar component */}

        <Search />

        {/* Table component */}
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* Table row component */}

              {users.map(user =>  <UserListItem 
                  key={user._id} 
                  {...user}
                  />)}

             
            </tbody>
          </table>
        </div>

        {/* New user button */}
        <button className="btn-add btn">Add new user</button>

        <Pagination />
      </section>
    </>
  );
}
