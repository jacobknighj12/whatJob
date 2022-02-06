import axios from "axios";
import React, { useEffect, useState } from "react";

export function JobPosts(props) {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [posts, setPosts] = useState([]);
<<<<<<< HEAD

  const handleReportClick = (event) => {
    event.preventDefault();
      var data = values;
  
      var config = {
        method: "post",
        url: "http://localhost:3000/api/contactmessage",
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
  };

=======
  const [category, setCategory] = useState(1);
>>>>>>> 20f41646243a5d4116113012114bcae77f108129
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
  function handleCategory(event) {
    setCategory(event.target.value)
  }

<<<<<<< HEAD
  function displayAllPosts() {
    var config = {
      method: "get",
      url: "http://localhost:3000/api/posts",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setText(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  displayAllPosts();
=======


>>>>>>> 20f41646243a5d4116113012114bcae77f108129
  return (
    <>
      <div>
        <form onChange={handleCategory}>
          <label >Choose a field:</label>
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
                  console.log('post.category_id')
                  console.log(post.category_id)
                  console.log('category')
                  console.log(category)
                  if (post.category_id == category) {
                    return (
                      <div>
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
                        <button><a>Link to Deep Dive</a></button>
                        <div> _</div>
                      </div>)
                  }
                })()}
              </div>

            ))
            }
          </div>
        </div>

<<<<<<< HEAD
        <div> Post from database inserted here</div>
        <a>Link to Deep Dive for post</a>
      </div>
      <p className="text">{text}</p>
=======


      </div>

>>>>>>> 20f41646243a5d4116113012114bcae77f108129
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
