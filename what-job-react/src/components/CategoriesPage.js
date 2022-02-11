
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
        event.preventDefault();
        let newValue = event.target.value; //why does this work? I DONT UNDERSTAND WHY I DONT WANT TO KNOW WHY BUT IT ONLY WORKS IF NEW VALUE IS PASSED IN NOT EVENT.TARGET.VALUE
        setSelectedCategory(newValue); //not setting to the target value
        console.log(selectedCategory); //incorrect value
        console.log(event.target.value); //correct value
        localStorage.setItem('selectedCategory', newValue);
        console.log(localStorage.getItem('selectedCategory'));
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
                <button><a href='/JobPosts'>Go</a></button>
            </form>
            <div>
                {categories.map((category) => (
                    <div key={category.id}>
                        {category.name}
                    </div>

                ))
                }

            </div>
        </div >
    )
}