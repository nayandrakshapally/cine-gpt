import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt?.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        //user signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const toggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full  flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className="flex p-2">
          {showGptSearch && <select
            className="bg-gray-300 my-2 py-2 px-4 mx-4 rounded-lg"
            onChange={(e) => dispatch(changeLanguage(e.target.value))}
          >
            <option value="en">English</option>
            <option value="sp">Spanish</option>
          </select>}
          <button
            className="bg-blue-800 text-white my-2 py-2 px-4 mx-4 rounded-lg"
            onClick={toggleGptSearch}
          >
            {showGptSearch ? 'Home': 'GPT Search'}
          </button>
          <span className="text-yellow-200 my-4">{user?.email}</span>
          <span
            className="text-yellow-50 font-semibold cursor-pointer my-4"
            onClick={onSignOut}
          >
            &nbsp;&nbsp;Sign Out
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
