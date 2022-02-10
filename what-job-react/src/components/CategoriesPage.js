
import React, { useState, useEffect } from 'react'
var axios = require('axios');
export function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(1);

    useEffect(() => {
        axios.get("http://localhost:3000/api/categories").then((res) => setCategories(res.data));
        console.log(localStorage.getItem('selectedCategory'));
        setSelectedCategory(localStorage.getItem('selectedCategory'));
        console.log(selectedCategory)
    }, []);
    function handleChange(event) {
        setSelectedCategory(event.target.value);
        localStorage.setItem('selectedCategory', selectedCategory);
    }
    return (
        < div >
            <form>
                <label >Choose a field:</label>
                <select onChange={handleChange} value={selectedCategory} id="Jobs" name="Jobs" size="1">
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                    }
                </select>
            </form>
            <div>
                {categories.map((category) => (
                    <div key={category.id}>
                        <a href='/JobPosts' >{category.name}</a>
                    </div>

                ))
                }

            </div>
        </div >
    )
}