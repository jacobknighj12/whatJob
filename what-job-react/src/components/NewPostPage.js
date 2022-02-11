import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import axios from "axios";
export function NewPostPage() {
    const [intro, setIntro] = useState("Short introduction for yourself, how long you have worked in this position and an example of a great day and a bad day at your job.");
    const [day_to_day, setDay_to_day] = useState("Go over the boring/exciting stuff that you often overlook but most of your days consist of");
    const [career_path, setCareer_path] = useState("How did you get to this position, study, luck, hardship, Nepotism. As well as ways that you know that enable a person to enter this field today.");
    const [industry_growth, setIndustry_growth] = useState("How fast is this industry growing, or is it shrinking? do they have good or bad entry into the industry due to new things happening?.");
    const [work_life_balance, setWork_life_balance] = useState("how much time do you have to yourself after work? do you do extra hours constantly? do you have lots of overtime? can you get time off easily? how many hours from getting up till you get home is your average day? including travel.");
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
        <div>
            <h2>New post</h2>
            <form onSubmit={handleSubmit}>
                <label>Category</label>
                <select onChange={handleCategory} value={selectedCategory} id="Jobs" name="Jobs" size="1">
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                    }
                </select>

                <label>Role title</label>
                <input type='text' name='title'></input>

                <div className="container"><label>Intro</label>
                    <MDEditor
                        value={intro}
                        onChange={setIntro}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />

                </div>

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

                <label>expected salary from $</label>
                <input type='number' name='expected_salary_range_from'></input>
                <label>to</label>
                <input type='number' name='expected_salary_range_to'></input>
                <br />
                <label>difficulty of the position</label><br />
                <select type='number' name='difficulty'>

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
                </select><br />
                <button >publish</button>
            </form>
        </div>
    )
}
