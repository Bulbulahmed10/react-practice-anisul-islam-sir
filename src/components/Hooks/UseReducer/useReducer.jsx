// import React, { useState, useReducer } from "react";
// import { reducer } from "./reducer";

// const booksData = [
//   { id: 1, name: "Pather Pachal" },
//   { id: 2, name: "Padma Nadir Majhi" },
//   { id: 3, name: "Srikanta" },
// ];

// const Modal = ({ modelText }) => {
//   return <p> {modelText} </p>;
// };

// const UseReducer = () => {

//   const reducer = (state, action) => {
//     if (action.type === "ADD") {
//       const allBooks = [...state.books, action.payload];
//       return {
//         ...state,
//         books: allBooks,
//         isModelOpen: true,
//         modelText: "Book is added",
//       };
//     }

//     if (action.type === "REMOVE") {
//       const filteredBooks = [...state.books].filter(
//         (book) => book.id !== action.payload
//       );

//       return {
//         ...state,
//         books: filteredBooks,
//         isModelOpen: true,
//         modelText: "Book is removed",
//       };
//     }
//     return state;
//   };

//   const [bookState, dispatch] = useReducer(reducer, {
//     books: booksData,
//     isModelOpen: false,
//     modelText: "",
//   });

//   const [bookName, setBookName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newBook = { id: new Date().getTime().toString(), name: bookName };
//     dispatch({ type: "ADD", payload: newBook });
//     setBookName("");
//   };

//   const removeBook = (id) => {
//     dispatch({ type: "REMOVE", payload: id });
//   };

//   return (
//     <div>
//       <h3>Books List</h3>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={bookName}
//           onChange={(e) => {
//             setBookName(e.target.value);
//           }}
//           required
//         />
//         <button type="submit"> Add Book</button>
//       </form>

//       {bookState.isModelOpen && <Modal modelText={bookState.modelText} />}

//       {bookState.books.map((book) => {
//         const { id, name } = book;
//         return (
//           <li key={id}>
//             {name}{" "}
//             <button
//               onClick={() => {
//                 removeBook(id);
//               }}
//             >
//               Remove
//             </button>{" "}
//           </li>
//         );
//       })}
//     </div>
//   );
// };

// export default UseReducer;

import React, { useReducer, useState } from "react";

const bookList = [
  { id: 1, name: "Pather Pachal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanta" },
];

const UseReducer = () => {
  const [bookName, setBookName] = useState("");

  const reducer = (state, action) => {
    if (action.type === "ADD") {
      const allBooks = [...state.books, action.payload];
      return {
        ...state,
        books: allBooks,
        isModelOpen: true,
        modelText: "Book is added",
      };
    }
    if (action.type === "REMOVE") {
      const filteredBooks = [...state.books].filter(
        (book) => book.id !== action.payload
      );
      return {
        ...state,
        books: filteredBooks,
        isModelOpen: true,
        modelText: "Book is remove",
      };
    }
    return state;
  };

  const [bookState, dispatch] = useReducer(reducer, {
    books: bookList,
    isModelOpen: false,
    modelText: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newBookName = { id: new Date().getTime().toString(), name: bookName };

    dispatch({ type: "ADD", payload: newBookName });
    setBookName("");
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h1>Book List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setBookName(e.target.value);
          }}
          value={bookName}
          required
        />
        <button type="submit">Add Book</button>
      </form>
      {bookState.isModelOpen && <p> {bookState.modelText} </p>}

      {bookState.books.map((book) => {
       const {name, id} = book
        return (
          <p key={id}>
            {" "}
            {name}{" "}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>{" "}
          </p>
        );
      })}
    </div>
  );
};

export default UseReducer;
