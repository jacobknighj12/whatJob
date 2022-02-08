import axios from "axios";
import React, { useEffect, useState } from "react";

export function JobPosts(props) {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts")
      .then((res) => setPosts(res.data));
  }, []);

  const onClick = (event) => {
    event.preventDefault();
    var data = posts.id;

    var config = {
      method: "post",
      url: "http://localhost:3000/api/reportalert",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log();
  const handleIncrementLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };
  const handleIncrementDisLikes = () => {
    setDisLikes((prevDisLikes) => prevDisLikes + 1);
  };
  function handleCategory(event) {
    setCategory(event.target.value);
  }

  return (
    <>
      <div>
        <form onChange={handleCategory}>
          <label>Choose a field:</label>
          <select id="Jobs" name="Jobs" size="1">
            <option value={1}>gamer</option>
            <option value={2}>youtube gamer</option>
            <option value={3}>youtube flamer</option>
          </select>
        </form>
        <h1>Category Name</h1>
        <h2>Role Title</h2>

        <div>
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                {(() => {
                  // console.log("post.id");
                  // console.log(post.id);
                  // console.log("category");
                  // console.log(category);
                  if (post.category_id == category) {
                    return (
                      <>
                        <div>
                          <div key={post.id}>User: {post.user_id}</div>
                          <div>Page ID: {post.id}</div>
                          <div>Title: {post.title}</div>
                          <div>Introduction: {post.intro}</div>
                          <div>Day to day: {post.day_to_day}</div>
                          <div>Job difficulty: {post.difficulty}/10</div>
                          <div>
                            Expected salary range from{" "}
                            {post.expected_salary_range_from} to{" "}
                            {post.expected_salary_range_to}
                          </div>
                          <div>Industry growth {post.industry_growth}</div>
                          <div>Work life balance {post.work_life_balance}</div>
                          <div>good post: {post.upvotes}</div>
                          <div>bad post: {post.downvotes}</div>
                          <button>
                            <a>Link to Deep Dive</a>
                          </button>
                          <div> _</div>

                          <form onClick={onClick}>
                            <button value={posts.id}>Report</button>
                          </form>
                        </div>
                      </>
                    );
                  }
                })()}
              </div>
            ))}
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
  );
}
