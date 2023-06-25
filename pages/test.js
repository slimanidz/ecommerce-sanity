import React from "react";

const people = [
  { id: 1, name: "vitry sur siene", url: "#" },
  { id: 2, name: "ville juif", url: "#" },
  { id: 3, name: "valonton", url: "#" },
  { id: 4, name: "choisy le roi", url: "#" },
  { id: 5, name: "paris", url: "#" },
  { id: 6, name: "paris", url: "#" },
  { id: 7, name: "paris", url: "#" },
  { id: 8, name: "paris", url: "#" },
  { id: 9, name: "paris", url: "#" },
  { id: 10, name: "paris", url: "#" },
];

const test = () => {
  return (
    <div className="flex">
      {people.map((item) => (
        <div className="" key={item.id}>
          <div className="w-screen flex flex-col items-center justify-center ">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt="image"
              className={` w-64  border-2 border-red-700 `}
            />
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default test;
