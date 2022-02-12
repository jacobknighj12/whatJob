import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import axios from "axios";
export function NewPostPage() {
    const [intro, setIntro] = useState("Short introduction of yourself, how long you have worked in this role and an example of a great day and a bad day at your job.");
    const [day_to_day, setDay_to_day] = useState("Explain both the boring and exciting parts of your job, detailing your typical day.");
    const [career_path, setCareer_path] = useState("How did you get into your role; eg. study, luck, hardship, connections. As well as ways that you know that enable a person to enter this field today.");
    const [industry_growth, setIndustry_growth] = useState("Whether your industry growing or shrinking, how hard it is to break into the industry, and whether there's anything happening in the industry that would impact on people trying to build a career within this industry.");
    const [work_life_balance, setWork_life_balance] = useState("How much time do you have to yourself after work? Does your work require regular overtime or work outside of ordinary hours? Can you get time off easily? How long is an average day from when you wake to when you return home (including travel).");
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/categories").then((res) => setCategories(res.data));
        setSelectedCategory(localStorage.getItem('selectedCategory'));
    }, []);
    function handleCategory(event) {
        let newValue = event.target.value; //why does this work? I DONT UNDERSTAND WHY I DONT WANT TO KNOW WHY BUT IT ONLY WORKS IF NEW VALUE IS PASSED IN NOT EVENT.TARGET.VALUE
        setSelectedCategory(newValue); //not setting to the target value
        console.log(selectedCategory); //incorrect value
        console.log(event.target.value); //correct value
        localStorage.setItem('selectedCategory', newValue);
        console.log(localStorage.getItem('selectedCategory'));
    }

    function handleSubmit(event) {
        event.preventDefault();
        var FormData = require('form-data');
        var data = new FormData();
        data.append('category_id', `${event.target.category_id.value}`);
        data.append('title', `${event.target.title.value}`);
        data.append('intro', `${intro}`);
        data.append('day_to_day', `${day_to_day}`);
        data.append('career_path', `${career_path}`);
        data.append('industry_growth', `${industry_growth}`);
        data.append('work_life_balance', `${work_life_balance}`);
        data.append('expected_salary_range_from', `${event.target.expected_salary_range_from.value}`);
        data.append('expected_salary_range_to', `${event.target.expected_salary_range_to.value}`);
        data.append('difficulty', `${event.target.difficulty.value}`);
        // console.log(event.target.difficulty.value)
        // console.log(event.target.expected_salary_range_from.value)
        var config = {
            method: 'post',
            url: 'http://localhost:3000/api/posts',
            headers: {
                'Authorization': localStorage.getItem('user')
                // ...data.getHeaders
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="new-post">

            <h2>New post</h2>


            <form onSubmit={handleSubmit}>



                
                
                
                <div className="category-select"><label>Category</label><select class="category-select"  onChange={handleCategory} value={selectedCategory} id="Jobs" name="Jobs" size="1">
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                    }
                </select></div>






                <p className="new-post-base"><label>Role title</label>
                        
                <input type='text' name='title'></input></p>
                
                <div><div className="container"><label>Intro</label>
                    <MDEditor
                        value={intro}
                        onChange={setIntro}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />

                </div></div>

                <label>Day to day</label>

                <div className="container">
                    <MDEditor
                        value={day_to_day}
                        onChange={setDay_to_day}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />

                </div>

                <label>Career Path</label>

                <div className="container">
                    <MDEditor
                        value={career_path}
                        onChange={setCareer_path}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />

                </div>

                <label>Industry growth</label>

                <div className="container">
                    <MDEditor
                        value={industry_growth}
                        onChange={setIndustry_growth}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />

                </div>

                <label>Work Life Balance</label>

                <div className="container">
                    <MDEditor
                        value={work_life_balance}
                        onChange={setWork_life_balance}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />

                </div>
                <div className="new-post-base">
                <label>expected salary from</label>
                <input type='number' name='expected_salary_range_from'></input>
                <label>to</label>
                <input type='number' name='expected_salary_range_to'></input>
                

                <label>difficulty of the position</label>
                
                
                
                <select type='number' name='new-post-base'>

                    <option value={1}>1/10</option>
                    <option value={2}>2/10</option>
                    <option value={3} >3/10</option>
                    <option value={4} >4/10</option>
                    <option value={5} >5/10</option>
                    <option value={6} >6/10</option>
                    <option value={7} >7/10</option>
                    <option value={8} >8/10</option>
                    <option value={9} >9/10</option>
                    <option value={10} >10/10</option>
                </select>
                <button>publish</button></div>
            </form>
        </div>
    )
}