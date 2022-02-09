import axios from "axios";
import React, { useEffect, useState } from "react";

export function DeepDivePage() {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [posts, setPosts] = useState([]);
  const [post_id, setPost_Id] = useState(2);
  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:3000/api/posts/${post_id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setPosts([response.data]);
        console.log([response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const handleReportButton = (event) => {
    var data = post_id;
    var config = {
      method: "post",
      url: "http://localhost:3000/api/reportalert",
      headers: {},
      data: data,
    };
    console.log(data);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleIncrementLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };
  const handleIncrementDisLikes = () => {
    setDisLikes((prevDisLikes) => prevDisLikes + 1);
  };

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          {(() => {
            console.log("post.post_id");
            console.log(post.id);
            console.log("post_id");
            console.log(post_id);
            if (post.id === post_id) {
              return (
                <div>
                  <div>
                    <h2>Deep dive on: {post.title}</h2>
                  </div>
                  <div>By : 'user'{post.user_id}</div>
                  <div>Job difficulty: {post.difficulty}/10</div>
                  <div>
                    Expected salary range from {post.expected_salary_range_from}{" "}
                    to {post.expected_salary_range_to}
                  </div>
                  <div>Deep Dive: {post.role_details}</div>
                  <hr></hr>
                  <div>{post.job_description}</div>
                  <div>good post: {post.upvotes}</div>
                  <div>bad post: {post.downvotes}</div>
                  <button>
                    <a>Link to Original post</a>
                  </button>
                  <div> _</div>
                </div>
              );
            }
          })()}
        </div>
      ))}

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
        <button onClick={handleReportButton}>Report</button>
      </div>
    </>
  );
}
