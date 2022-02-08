import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import axios from "axios";
export function NewPostPage() {
    const [intro, setIntro] = useState("Short introduction for yourself, how long you have worked in this position and an example of a great day and a bad day at your job.");
    const [day_to_day, setDay_to_day] = useState("Go over the boring/exciting stuff that you often overlook but most of your days consist of");
    const [career_path, setCareer_path] = useState("How did you get to this position, study, luck, hardship, Nepotism. As well as ways that you know that enable a person to enter this field today.");

    function handleSubmit(event) {
        event.preventDefault();
        var FormData = require('form-data');
        var data = new FormData();
        data.append('category_id', `${event.target.category_id.value}`);
        data.append('title', `${event.target.title.value}`);
        data.append('intro', `${intro}`);
        data.append('day_to_day', `${day_to_day}`);
        data.append('career_path', `${career_path}`);
        data.append('expected_salary_range_from', `${event.target.expected_salary_range_from}`);
        data.append('expected_salary_range_to', `${event.target.expected_salary_range_to}`);

        var config = {
            method: 'post',
            url: 'http://localhost:3000/api/posts',
            headers: {
                // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQzODY2NTQ5LCJleHAiOjE2NDM4NzAxNDksImp0aSI6IjVlYjJiMDliLTBjZmMtNGE1NS1iNGY3LWVmOWY4Njc2MDYyOSJ9.lzJpRo9D6xBUMeK2zCtfLT-3LDDXAO6324_DpvrSaM4',
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
                <select name="category_id">
                    <option value="1">gamer</option>
                    <option value="2">flamer</option>
                    <option value="3">blamer</option>
                </select>

                <label>Role title</label>
                <input></input>

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

                <div className="container"><label>Intro</label>
                    <MDEditor
                        value={day_to_day}
                        onChange={setDay_to_day}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />

                </div>

                <label>Career Path</label>

                <div className="container"><label>Intro</label>
                    <MDEditor
                        value={career_path}
                        onChange={setCareer_path}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />

                </div>
                <label>expected salary</label>
                <input></input>
                <label>difficulty of the position</label>
                <select >
                    <option></option>
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
                <button >publish</button>
            </form>
        </div>
    )
}