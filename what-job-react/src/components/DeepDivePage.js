import axios from "axios";
import React, { useEffect, useState } from "react";

export function DeepDivePage() {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [posts, setPosts] = useState([]);
  const [post_id, setPost_Id] = useState(2);

  const [pageURL, setPageURL] = useState(0);
  useEffect(() => {
    setPageURL(window.location.href);
  });

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
    var data = { posturl: `http://localhost:3000/api/posts/${post_id}` };
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

  const handleIncrementLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };
  const handleIncrementDisLikes = () => {
    setDisLikes((prevDisLikes) => prevDisLikes + 1);
  };

  return (
    <>
      {posts.map((post) => (
        <div class key={post.id}>
          {(() => {
            // console.log("post.post_id");
            // console.log(post.id);
            // console.log("post_id");
            // console.log(post_id);
            if (post.id === post_id) {
              return (
                <div className='deep-dive'>
                  
                    <p/><heading>Deep Dive</heading>
                    <h2>Deep dive on: {post.title}</h2>
                  
                  <p/><label>By:</label> 'user'{post.user_id}
                  <p/><label>Job difficulty:</label> {post.difficulty}/10
                  <p />
                  <label>Expected salary range from</label> {post.expected_salary_range_from}{" "}
                  <label>to</label> {post.expected_salary_range_to}
                  
                  <p/><label>Deep Dive:</label> {post.role_details}
                  <hr></hr>
                  <p/><label>Job Description:</label>{post.job_description}
                  <p/><label>good post:</label> {post.upvotes}
                  <p/><label>bad post:</label> {post.downvotes}
                  <button>
                    <a>Link to Original post</a>
                  </button>
                  <p/> _
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
        <button onClick={handleReportButton}>{pageURL}</button>
      </div>
    </>
  );
}
