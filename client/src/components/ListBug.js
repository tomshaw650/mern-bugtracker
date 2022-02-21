import React from "react";

const ListBug = ({ bugs, deleteBug }) => {
  return (
    <ul>
      {bugs && bugs.length > 0 ? (
        bugs.map((bug) => {
          return (
            <li key={bug._id} onClick={() => deleteBug(bug._id)}>
              {bug.action}
            </li>
          );
        })
      ) : (
        <li>No Bug(s) left</li>
      )}
    </ul>
  );
};

export default ListBug;
