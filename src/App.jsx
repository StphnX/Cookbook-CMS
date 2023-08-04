import { useState, useEffect } from 'react';
import Contentful from './Contentful';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState([]);
  const { getCookbook } = Contentful();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCookbook()
      .then((res) => {
        if (res) {
          setRecipe(res);
        }
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Handle the error and set loading to false
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : recipe.length > 0 ? (
        <>
          <h1>{recipe[0].name}</h1>
          <img className="pic" src={recipe[0].img} alt={recipe[0].name} />
          <p>{recipe[0].description}</p>
          {recipe[0].ingredients.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </>
      ) : (
        <p>No recipe found.</p>
      )}
    </>
  );
}

export default App;
