import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import foodImg from '../assets/foodRecipe.png';
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export default function RecipeItems() {
    const recipes = useLoaderData();
    const [allRecipes, setAllRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    let path = window.location.pathname === "/myRecipe";
    let favItems = JSON.parse(localStorage.getItem("fav")) ?? [];
    const [isFavRecipe, setIsFavRecipe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setAllRecipes(recipes);
    }, [recipes]);

    const onDelete = async (id) => {
        try {
            console.log("Deleting recipe with ID:", id);
            await axios.delete(`http://localhost:5000/recipe/${id}`);
            setAllRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== id));
            let filterItem = favItems.filter((recipe) => recipe._id !== id);
            localStorage.setItem("fav", JSON.stringify(filterItem));
            alert("Recipe deleted successfully!");
        } catch (error) {
            console.error('Error deleting the recipe:', error);
            alert('Failed to delete the recipe. Please try again.');
        }
    };

    const favRecipe = (item) => {
        let filterItem = favItems.filter((recipe) => recipe._id !== item._id);
        favItems = favItems.filter((recipe) => recipe._id === item._id).length === 0 ? [...favItems, item] : filterItem;
        localStorage.setItem("fav", JSON.stringify(favItems));
        setIsFavRecipe((pre) => !pre);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredRecipes = allRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className='search-bar display-flex justify-content-center'>    
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className='card-container'>
                {
                    filteredRecipes.map((item, index) => {
                        return (
                            <div key={index} className='card'>
                                <img src={`http://localhost:5000/images/${item.coverImage}`} width="120px" height="100px" alt="recipe" />
                                <div className='card-body'>
                                    <div className='title'><h3>{item.title}</h3></div>
                                    <div className='ins'><p>{item.instructions}...</p></div>
                                    <div className='icons'>
                                        <div className='timer'><BsStopwatchFill />{item.time}</div>
                                        {(!path) ? (
                                            <FaHeart
                                                onClick={() => favRecipe(item)}
                                                style={{ color: favItems.some((res) => res._id === item._id) ? "red" : "" }}
                                            />
                                        ) : (
                                            <div className='action'>
                                                <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
                                                <MdDelete onClick={() => onDelete(item._id)} className='deleteIcon' />
                                            </div>
                                        )}
                                    </div>
                                    {/* Add View Button */}
                                    <button
                                        className="view-button"
                                        onClick={() => navigate(`/recipe/${item._id}`)}
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
