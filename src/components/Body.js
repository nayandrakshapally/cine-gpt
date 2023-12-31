/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  // const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       dispatch(addUser({ uid: uid, email: email, name: displayName }));
  //     } else {
  //       //user signed out
  //       dispatch(removeUser());
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
