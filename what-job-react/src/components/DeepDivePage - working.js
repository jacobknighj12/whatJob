import axios from "axios";
import React, { useEffect, useState } from "react";

export function DeepDivePage() {
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState(1);
    useEffect(() => {
        var config = {
            method: 'get',
            url: `localhost:3000/api/posts/${category}`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const handleIncrementLikes = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };
    const handleIncrementDisLikes = () => {
        setDisLikes((prevDisLikes) => prevDisLikes + 1);
    };

    return (
        <>
            <div>



                <div>
                    <div>
                        {posts.map((post) => (
                            <div key={post.id}>
                                {(() => {
                                    console.log('post.category_id')
                                    console.log(post.category_id)
                                    console.log('category')
                                    console.log(category)
                                    if (post.category_id == category) {
                                        return (
                                            <div><div>
                                                <h2>Deep dive on: {post.title}</h2>
                                            </div>
                                                <div>
                                                    By : 'user'{post.user_id}
                                                </div><div>
                                                    Job difficulty: {post.difficulty}/10
                                                </div><div>
                                                    Expected salary range from {post.expected_salary_range_from} to {post.expected_salary_range_to}
                                                </div><div>
                                                    Deep Dive: {post.role_details}
                                                </div>
                                                <hr></hr>
                                                <div>
                                                    {post.job_description}
                                                </div><div>
                                                    good post: {post.upvotes}
                                                </div><div>
                                                    bad post: {post.downvotes}
                                                </div>
                                                <button><a>Link to Original post</a></button>
                                                <div> _</div>
                                            </div>)
                                    }
                                })()}
                            </div>

                        ))
                        }
                    </div>
                </div>



            </div>

            <div>
                <button onClick={handleIncrementLikes}>(Bootstrap thumbs up)</button>
                <h5>Count is {likes}</h5>
                <button onClick={handleIncrementDisLikes}>(Bootstrap thumbs up)</button>
                <h5>Count is {disLikes}</h5>
            </div>
            <button onClick={() => setLikes(0)}></button>
            <div></div>
            <button onClick={() => setDisLikes(0)}></button>
            <div>
                <button>Report</button>
            </div>
        </>
    )
}