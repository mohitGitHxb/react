import { useEffect, useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UsersPage from "./pages/UsersPage";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsersAsync,
  getUser,
  selectUsersInfo,
} from "./users/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsersAsync());
  }, []);
  const users = useSelector(selectUsersInfo);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        {users && <Route path="/users" element={<UsersPage />}></Route>}
      </Routes>
    </Router>
  );
}

export default App;
