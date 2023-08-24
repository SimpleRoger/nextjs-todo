// // import { onSnapshot, collection } from "firebase/firestore";
// import { useEffect, useState } from "react";
// // import { db } from "../firebase";

// export default function TodoList() {
//   const [todos, setTodos] = useState();
// //   useEffect(() => {
// //     const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
// //       console.log(snapshot);
// //       setTodos(
// //         snapshot.docs.map((doc) => {
// //           return {
// //             title: doc.data().title,
// //             detail: doc.data().detail,
// //           };
// //         })
// //       );
// //     });
// //   }, []);
//   return (
//     <>
//       <div>
//         <h1>Todos</h1>
//         <ul className="todoList">
          
//           <li className="list_item">Todo 1</li>
//           <li className="list_item">Todo 2</li>
//           <li className="list_item">Todo 3</li>
//         </ul>
//       </div>
//     </>
//   );
// }
