
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
        
            <>
            <heading>Select a Category</heading>
            
            <form>
            <div class="category-select">

                <label>Choose a field:</label>



                <select class="category-select" onChange={handleChange} value={selectedCategory} id="Jobs" name="Jobs" size="1">
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}</select>
                <button><a href='/JobPosts'>Go</a></button>
            </div>
        </form><div>
                {categories.map((category) => (
                    <div key={category.id}>
                        {category.name}
                    </div>

                ))}

            </div></>
       
    )
}
// import React, { useState, useEffect } from 'react'
// // var axios = require('axios');
// export function CategoriesPage() {
// //     const [categories, setCategories] = useState([]);
// //     const [selectedCategory, setSelectedCategory] = useState(1);

//     // useEffect(() => {
//     //     axios.get("http://localhost:3000/api/categories").then((res) => setCategories(res.data));
//     //     console.log(localStorage.getItem('selectedCategory'));
//     //     setSelectedCategory(localStorage.getItem('selectedCategory'));
//     //     console.log(selectedCategory)
//     // }, []);
//     // function handleChange(event) {
//     //     event.preventDefault();
//     //     let newValue = event.target.value; //why does this work? I DONT UNDERSTAND WHY I DONT WANT TO KNOW WHY BUT IT ONLY WORKS IF NEW VALUE IS PASSED IN NOT EVENT.TARGET.VALUE
//     //     setSelectedCategory(newValue); //not setting to the target value
//     //     console.log(selectedCategory); //incorrect value
//     //     console.log(event.target.value); //correct value
//     //     localStorage.setItem('selectedCategory', newValue);
//     //     console.log(localStorage.getItem('selectedCategory'));
//     // }
    
//     const navLinks = [
//         {
//           id: 0,
//           title: `HOME`,
//           path: `/`,
//           bgI: ` ${homePaintBackground}`
//         },
//         {
//           id: 1,
//           title: "EVENTS",
//           path: "/events",
//           bgI: `${eventsPaintBackground}`
//         },
//         {
//           id: 2,
//           title: `ARTISTS`,
//           path: `/artists`,
//           bgI: `${artistPaintBackground}`
//         },
//         {
//           id: 3,
//           title: "CONTACT US",
//           path: `/contactUs`,
//           bgI: `${contactUsPaintBackground}`
//         }
//       ];
//       useEffect(() => {
//         // Get value from localStorage, transform to number
//         const lS = Number(localStorage.getItem(set.tar));
//         // Check! If localStorage have number 2 / more
//         // Set number 0
//         if (lS >= 4) {
//           localStorage.setItem("image", 0);
//           return;


//     return (
//         <>

//             <form>
//                 <label>Choose a field:</label>
//                 <select id="colors" onChange={null}>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                 </select></form>
//                 </>
        
//                 )}