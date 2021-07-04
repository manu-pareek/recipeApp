import './App.css';
import Recipes from './components/Recipes';
import Header from './components/Header';
import { useState ,useEffect} from 'react';
import Axios from 'axios';
function App() {
  const [search,setSearch]=useState("");
  const [recipes,setRecipes]=useState([]);
  const APP_ID='e742e539';
  const APP_KEY='fb5e81bf00bd497cccb6e74b28ebc69a';
  const onChange=(e)=>{    setSearch(e.target.value);  }
 
  useEffect( ()=>{
     getRecipes()
  
  },[])
  const getRecipes =async ()=>{
    const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits)
  }
  return (
    <div className="App">
    <Header search={search}  onChange={onChange} onClick={getRecipes }/>
    <div className="container"> 

    <Recipes recipes={recipes}/>
    </div>
    <h2>Made with <i class="far fa-heart"></i> By: Manu Pareek</h2>
    </div>
  );
}

export default App;
