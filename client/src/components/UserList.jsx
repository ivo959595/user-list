import React, { useEffect } from "react";

import Search from "./Search";
import Pagination from "./Pagination";
import UserListItem from "./UserListItem";

import userService from "../services/userService";

export default function UserList() {

  useEffect(() => {
    userService.getAll()
      .then(result => {
        console.log(result)
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
              <UserListItem />
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
