import { useState,useEffect } from 'react';
import './App.scss';
import Parent from './components/Parent';
import axios from "axios"


function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
     let url = "https://jsonplaceholder.typicode.com/posts"
    axios.get(url).then((res)=>{
      setdata(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  

  return (
    <div className="App">
    <h1 className='text-primary'>this is bootstrap</h1>

    <Parent data ={data} />
    </div>
  );
}

export default App;
