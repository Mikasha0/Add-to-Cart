import React from "react";
import {useState} from 'react';
import { useSelector,useDispatch } from "react-redux";
import {login, logout} from '../Store/userSlice';

export default function Login() {

    const [newUserName, setNewUserName] = useState("");
    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.value.username);

  return (
    <>
      <div className="page my-3 mx-3">
        <h6>This is the Login page of {username}.</h6>
      </div>
      <div className="Login my-3 w-50 mx-3 input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => {setNewUserName(e.target.value)}}
        />
        <button className="btn btn-primary mx-2" type="submit" onClick={() =>dispatch(login({username: newUserName}))}>
          Login
        </button>
        <button className="btn btn-dark" type="submit" onClick={() =>dispatch(logout())}>
          LogOut
        </button>
      </div>
    </>
  );
}
