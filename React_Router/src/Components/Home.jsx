import './Home.css';
import { Data } from './Data';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";


function Home() {
    const [recipies, setRecipies] = useState([]);
    const navigate = useNavigate();

    const handleclick = (id) => {
        navigate(`/recipie/${id}`)
    }

    useEffect(() => {
        async function fetchData() {
            const data = await Data();
            setRecipies(data?.recipes || []);
        }
        fetchData();
    }, []);
    return (
        <div className='home'>
            {recipies.length > 0 ? (
                recipies.map((recipe, index) => (
                    <div className="card" key={index} onClick={() => handleclick(recipe?.id)}>
                        <div className='img-container'>
                            <img src={recipe.image} alt={recipe.name} />
                        </div>

                        <div className='name'>
                            <span>{recipe.name}</span>
                        </div>

                        <div className='rating'>
                            <span>⭐ {recipe.rating}</span>
                        </div>

                        <div className='tags'>
                            {recipe.tags.map((tag, idx) => (
                                <div className='tags-item' key={idx}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading recipes...</p>
            )}
        </div>
    );
}

export default Home;