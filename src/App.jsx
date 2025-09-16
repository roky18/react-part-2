import { useState } from "react";
import Counter from "./counter";
import Batsman from "./Batsman";
import Users from "./user";
import "./App.css";
import { Suspense } from "react";
import Friends from "./friends";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsWait = fetchFriends();

  function handleClickd() {
    alert("i am clicked BOSS.");
  }

  const handleClickd3 = () => {
    alert("clicked 3");
  };

  const handleAdd6 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h2>Waiting...</h2>}>
        <Friends friendsWait={friendsWait}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClickd}>click me</button>
      <button onClick={handleClickd3}>click me3</button>
      <button onClick={() => alert("Jump 4")}>click me4</button>
      <button onClick={() => handleAdd6(6)}>click me5</button>
    </>
  );
}

export default App;
