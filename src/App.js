import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions";
import BoardList from "./components/BoardList";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const user = { name: "홍길동" };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);

  return (
    <div className="App">
      {currentUser.loggedIn ? (
        <>
          <h1>환영합니다. {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button
            onClick={() => dispatch(allActions.userActions.setUser(user))}
          >
            Login as 홍길동
          </button>
        </>
      )}
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>
        Increase Counter
      </button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrease Counter
      </button>
      <BoardList />
    </div>
  );
};

export default App;
