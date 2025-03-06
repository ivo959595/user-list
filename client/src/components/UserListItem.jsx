import React from 'react'

export default function 
() {
  return (
    <tr>
    <td>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        alt="Peter's profile"
        className="image"
      />
    </td>
    <td>Peter</td>
    <td>Johnson</td>
    <td>peter@abv.bg</td>
    <td>0812345678</td>
    <td>June 28, 2022</td>
    <td className="actions">
      <button className="btn edit-btn" title="Edit">
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button className="btn delete-btn" title="Delete">
        <i className="fa-solid fa-trash"></i>
      </button>
      <button className="btn info-btn" title="Info">
        <i className="fa-solid fa-info"></i>
      </button>
    </td>
  </tr>
  )
}
