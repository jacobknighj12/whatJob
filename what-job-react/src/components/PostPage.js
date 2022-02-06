import axios from "axios";
import React, { useEffect, useState } from "react";

export function JobPosts(props) {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    axios.get("api/post.json").then((res) => setPosts(res.data));
    console.log(setPosts);
  }, []);

  const handleIncrementLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };
  const handleIncrementDisLikes = () => {
    setDisLikes((prevDisLikes) => prevDisLikes + 1);
  };

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
  return (
    <>
      <div>
        <h1>Category Name</h1>
        <h2>Role Title</h2>

        <div>
          <div>
            {posts.map((post, index) => (
              <div key={index}>
                {post.title} | {posts.intro}
              </div>
            ))}
          </div>
        </div>

        <div> Post from database inserted here</div>
        <a>Link to Deep Dive for post</a>
      </div>
      <p className="text">{text}</p>
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
