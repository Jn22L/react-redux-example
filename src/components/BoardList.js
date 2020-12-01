import React, { useState, useEffect } from "react";
import BoardRow from "./BoardRow";
import { useSelector, useDispatch } from "react-redux";

export default function BoardList() {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <div>
      BoardList 컴포넌트: {currentUser.loggedIn && currentUser.user.name}
      <BoardRow />
    </div>
  );
}
