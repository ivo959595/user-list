import React from 'react'

export default function 
() {
  return (
    <form className="search-form">
    <h2>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="user"
        className="svg-inline--fa fa-user SearchBar_icon__cXpTg"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
        ></path>
      </svg>
      <span>Users</span>
    </h2>
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Please, select the search criteria"
        name="search"
      />
      {/* Show the clear button only if input field length !== 0 */}
      <button className="btn close-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>

      <button
        className="btn"
        title="Please, select the search criteria"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>

    <div className="filter">
      <span>Search Criteria:</span>
      <select name="criteria" className="criteria">
        <option value="">Not selected</option>
        <option value="">First Name</option>
        <option value="">Last Name</option>
        <option value="">Email</option>
        <option value="">Phone</option>
      </select>
    </div>
  </form>
  )
}


{/* <div className="table-overlap">
    <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="triangle-exclamation"
        className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path
            fill="currentColor"
            d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
        ></path>
    </svg>
    <h2>Sorry, we couldn't find what you're looking for.</h2>
</div> */}