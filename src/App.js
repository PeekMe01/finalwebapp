import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[title,setTitle] = useState();
  const[description,setDescription] = useState();
  const[imageURL, setImageURL] = useState();
  const[cookingTime, setCookingTime] = useState();
  const[recipes,setRecipes] = useState([]);


  function addRecipe(){
    if(!title) return alert("PLEASE ENTER A TITLE")
    if(!description) return alert("PLEASE ENTER A DESCRIPTION")
    if(!imageURL) return alert("PLEASE ENTER AN IMAGE")
    if(!cookingTime) return alert("PLEASE ENTER COOKING TIME")

    if(title&&description&&imageURL&&cookingTime){
      const newRecipe = {title: title, description: description, imageURL: imageURL, cookingTime: cookingTime}
      const newRecipes = [...recipes, newRecipe];
      setRecipes(newRecipes);
      alert('NEW RECIPE ADDED SUCCESFULLY!')
      setTitle('');
      setDescription('');
      setImageURL('');
      setCookingTime('');
    }
  }

  return (
    <div style={{  padding: 10 }}>
    <div style={{display:'flex',justifyContent:'center', alignItems: 'flex-start'}}>
      {/* (title, description, image, and cooking time) */}
        <form style={{ display: 'flex', justifyContent: 'center', width: 400 ,flexDirection: 'column', gap: 10, padding: 10 }}>
          <div style={{ display: 'flex',justifyContent: 'space-between' }}>
            <label htmlFor='Title'>Title: </label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Recipe Title...' style={{ borderRadius: 10, padding: 10, borderCollapse: 'collapse', borderStyle: 'solid'}} id='Title'/>
          </div>
          <div style={{ display: 'flex',justifyContent: 'space-between' }}>
            <label htmlForfor='Description'>Description: </label>
            <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Recipe Description...' style={{ borderRadius: 10, padding: 10, borderCollapse: 'collapse', borderStyle: 'solid'}} id='Description'/>
          </div>
          <div style={{ display: 'flex',justifyContent: 'space-between' }}>
            <label htmlForfor='Image'>Image URL: </label>
            <input value={imageURL} onChange={(e)=>setImageURL(e.target.value)} placeholder='Recipe Image...' style={{ borderRadius: 10, padding: 10, borderCollapse: 'collapse', borderStyle: 'solid'}} id='Image'/>
          </div>
          <div style={{ display: 'flex',justifyContent: 'space-between' }}>
            <label htmlForfor='CookingTime'>Cooking Time ( in minutes ): </label>
            <input value={cookingTime} onChange={(e)=>setCookingTime(e.target.value)} placeholder='Recipe Cooking Time...' style={{ borderRadius: 10, padding: 10, borderCollapse: 'collapse', borderStyle: 'solid'}} id='CookingTime'/>
          </div>
          <div>
            <button className="Buttonadd" onClick={(e)=>{e.preventDefault();addRecipe()}}>Add Recipe</button>
          </div>
        </form>
    </div>
    <div>
      <h1>Recipes ({recipes.length})</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',  gap: 10, justifyContent: 'center'}}>
      {recipes&&recipes.map((item,index)=>{
        return(
          <div style={{ width: '30%', height: '30%', alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', padding: 10,borderRadius: 30 }}>
            <h1 style={{ textAlign: 'center' }}>{item.title}</h1>
            <img alt='There was supposed to be an image here :/' style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 30 }} width='100%' height={400} src={`${item.imageURL}`}/>
            <h3 style={{ textAlign: 'center' }}>Description</h3>
            <small style={{ textAlign: 'left' }}>{item.description}</small>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <button onClick={()=>{alert(`Succesfully Delete Recipe With Name: ${item.title}`); setRecipes(recipes.filter((item,i)=>{return(index!=i)}))}} style={{ width: '90%', backgroundColor: 'red', borderStyle: 'none', padding: 10, margin: 10, borderRadius: 30, fontSize: 20, color: 'white' }}>Delete</button>
            </div>
          </div>
        )
      })}
      {recipes.length===0&&<h3>PLEASE ADD RECIPES TO DISPLAY!!!!!!!!!!!!!!</h3>}
      </div>
    </div>
    </div>
  );
}

export default App;
