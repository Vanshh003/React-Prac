import { useEffect, useState } from 'react';
import './App.css'

function DataFetching() {
  let [userData, setUserData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//       return response.json();
//     }).then((data) => {
//       console.log(data);
//       setUserData(data);
//     })
//   },[])


  // or
 
  useEffect(() => {
    async function getUserData() {
      let users = await fetch("https://jsonplaceholder.typicode.com/users")
      let userjson = await users.json();
    
      setUserData(userjson);
    }

    getUserData();

  },[])
 
  return (
    <>
      <h1>userData</h1>
 
      {userData.map((user) => {
        return <p key={user.id}>{user.name}</p>
      })}
 
    </>
  )
}

export default DataFetching