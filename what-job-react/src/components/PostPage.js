
import axios from "axios";
import React, { useEffect, useState } from "react";

export function JobPosts(props) {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts").then((res) => setPosts(res.data));
    console.log(posts);
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
        <h1>Category Name</h1>
        <h2>Role Title</h2>

        <div>
          <div>
            {posts.map((post, index) => (
              <div key={index}>
                <div>
                  User: {post.user_id}
                </div><div>
                  Title: {post.title}
                </div><div>
                  Introduction: {post.intro}
                </div><div>
                  Day to day: {post.day_to_day}
                </div><div>
                  Job difficulty: {post.difficulty}/10
                </div><div>
                  Expected salary range from {post.expected_salary_range_from} to {post.expected_salary_range_to}
                </div><div>
                  Industry growth {post.industry_growth}
                </div><div>
                  Work life balance {post.work_life_balance}
                </div><div>
                  good post: {post.upvotes}
                </div><div>
                  bad post: {post.downvotes}
                </div>
                <div> _</div>
              </div>
            ))}
          </div>
        </div>

        <div> Post from database inserted here</div>
        <a>Link to Deep Dive for post</a>

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
  );
}
