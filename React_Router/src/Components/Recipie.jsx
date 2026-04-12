import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData } from "./Data";
import "./Recipie.css";

function Recipie() {
  const { id } = useParams();
  const [recipie, setRecipie] = useState(null);

  useEffect(() => {
    async function getRecipie() {
      const result = await getData(id);
      setRecipie(result);
    }
    getRecipie();
  }, [id]);

  if (!recipie) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="recipe-container">
      <div className="recipe-card">
        <img
          src={recipie.image}
          alt={recipie.name}
          className="recipe-image"
        />

        <div className="recipe-content">
          <h1 className="recipe-title">{recipie.name}</h1>

          <div className="recipe-meta">
            <span>🍽 {recipie.cuisine}</span>
            <span>⏱ {recipie.prepTimeMinutes + recipie.cookTimeMinutes} mins</span>
            <span>🔥 {recipie.caloriesPerServing} cal</span>
            <span>⭐ {recipie.rating}</span>
          </div>

          <h2>Ingredients</h2>
          <ul className="ingredients">
            {recipie.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>Instructions</h2>
          <ol className="instructions">
            {recipie.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <div className="tags">
            {recipie.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipie;