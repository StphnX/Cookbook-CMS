import { useState, useEffect } from 'react';
import Contentful from './Contentful';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState([]);
  const { getCookbook } = Contentful();
  useEffect(() => {
    getCookbook()
      .then((res) => {
        setRecipe(res);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(recipe[0].name);
  return (
    <>
      <h1>{recipe[0].name}</h1>
      <img className="pic" src={recipe[0].img} />
      <p>{recipe[0].description} /</p>
      {recipe[0].ingredients.map((item) => {
        return <p>{item}</p>;
      })}
    </>
  );
}

export default App;
