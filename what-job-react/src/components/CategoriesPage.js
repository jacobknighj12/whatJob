
import React, { useState, useEffect } from 'react'
var axios = require('axios');

export function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:3000/api/categories',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setCategories(JSON.stringify(response.data));

            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);
    return (
        < div >

            <form>

                <label >Choose a field:</label>

                <select id="Jobs" name="Jobs" size="1">
                    <option value="gamer">gamer</option>
                    <option value="youtube gamer">youtube gamer</option>
                </select>
            </form>



            <div>
                {console.log(categories)}
                {categories.map((category) =>
                    <div key={category.id}>
                        <p>{category.title}</p>
                    </div>

                )
                }

            </div>
        </div >
    )
}