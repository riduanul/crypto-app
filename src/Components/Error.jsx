import React from "react";

function Error({ message }) {
  return (
    <div
      class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p class="font-bold">Error!</p>
      <h3>{message}</h3>
    </div>
  );
}

export default Error;
