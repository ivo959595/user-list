import React, { useEffect, useState } from "react";

import Search from "./Search";
import Pagination from "./Pagination";
import UserListItem from "./UserListItem";

import userService from "../services/userService";
import UserCreate from "./UserCreate";

export default function UserList() {
  const [users, setUsers] = useState([])
  const [showCreate, setShowCreate] = useState(false)


  useEffect(() => {
    userService.getAll()
      .then(result => {
        setUsers(result)
      })
  }, []);

  const createUserClickHandler = () => {
    setShowCreate(true);
    console.log("Show Create:", showCreate); // Debugging
  };
  

  const closeCreateUserClickHandler = () => {
    setShowCreate(false)
  }



  return (
    <>
      <section className="card users-container">
    
        <Search />

      {showCreate && <UserCreate onClose={closeCreateUserClickHandler}/>}


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
        <button 
        className="btn-add btn"
        onClick={createUserClickHandler}>
          Add new user
        </button>

        <Pagination />
      </section>
    </>
  );
}
