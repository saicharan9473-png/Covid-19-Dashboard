import React,{useEffect,useState} from "react";
function App(){
  const[data,setData]=useState({});
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(res=>res.json())
    .then(result=>setData(result))
    .catch(err=>console.log(err));
  })
  return(
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1>Covid-19 Dashboard</h1>
      <h3>Total Cases:{data.cases}</h3>
      <h3>Active:{data.active}</h3>
      <h3>Recovered Cases:{data.recovered}</h3>
      <h3>Deaths:{data.deaths}</h3>
    </div>

  )
}
export default App;