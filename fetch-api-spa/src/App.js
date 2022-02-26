
import './App.css';
import {useState,useEffect} from 'react'

function App() {

  const [displayCategories,setDisplayCategolies] = useState([])
  const[displayJokes,setDisplayJokes] = useState({})
  const[selectCategory,setSelectCategory]=useState('animal')

  const sendHttpReq = async (method, url, data) => {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: data ? { "content-type": "application/json" } : {},
    });
    if (res.status >= 400) {
      return res.json().then((errResData) => {
        const error = new Error("Something went wrong");
        error.data = errResData;
        throw error;
      });
    }
    return await res.json();
  };

  const getDataCategories = () => {
    sendHttpReq("GET", "https://api.chucknorris.io/jokes/categories").then((resData) => {
      setDisplayCategolies(resData);
    });
  };
  const getDataJokes = () => {
    sendHttpReq("GET", `https://api.chucknorris.io/jokes/random?category=${selectCategory}`).then((resData) => {
      console.log({...displayJokes,...resData})
      setDisplayJokes({...displayJokes,...resData});
    });
  };

  let clickCategory =(e)=>{
    e.preventDefault()
    console.log(e.target.innerHTML);
    setSelectCategory(e.target.innerHTML)
    console.log(`https://api.chucknorris.io/jokes/random?category=${selectCategory}`)
  }

  useEffect(() => {
    getDataCategories()
 
getDataJokes()
  },[selectCategory])



  return (
    <div className="App">
      {displayCategories && <div> <h1>Assignment by <span> Mohit Gadhavi </span> </h1>
      <div className='container'>
     {displayCategories.map(category=> {
       
       return <p key={displayCategories.indexOf(category)} href='' onClick={clickCategory
        }>{category}</p>})}
     </div>
     <div key={displayJokes.id} className='container container_jokes '>
      <h1>{displayJokes.categories}</h1>
    <img alt='' src={displayJokes.icon_url}/>
     {displayJokes.value}
     </div>
     </div>
}
     
    </div>
  );
}

export default App;
