import React, { useEffect, useState } from 'react'
import Router from './Router';

import  axios from 'axios';
import "./Styles.css"
function App() {
const [data, setData] = useState("");

const getData = async() => {
  const response = await axios.post("http://localhost:5000/blog/api/posts");
  setData(response.data)
}

useEffect(()=> {
  getData()
},[]);

  return (
    <div className="App">
       <Router/>

    </div>
  );
}

export default App;
