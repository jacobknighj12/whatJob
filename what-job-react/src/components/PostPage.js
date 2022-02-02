// import { SettingsCellOutlined } from "@mui/icons-material";
import React, { useState } from "react";

export function JobPosts(props) {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);

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
        <div> Post from database inserted here</div>
        <linl>Link to Deep Dive for post</linl>
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
