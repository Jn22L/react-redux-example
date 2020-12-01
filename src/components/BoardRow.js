import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";

export default function BoardRow() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(allActions.userActions.setUser({ name: "유저변경" }));
  };

  return (
    <div>
      BoardRow 컴포넌트 : {counter}
      <input type="button" value="사용자변경" onClick={handleClick} />
    </div>
  );
}
