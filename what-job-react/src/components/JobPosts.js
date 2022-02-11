import axios from "axios";
import React, { useEffect, useState } from "react";

export function JobPosts() {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  useEffect(() => {
    axios.get("http://localhost:3000/api/posts").then((res) => setPosts(res.data));
    axios.get("http://localhost:3000/api/categories").then((res) => setCategories(res.data));
    setSelectedCategory(localStorage.getItem('selectedCategory'));
  }, []);

  const handleIncrementLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };
  const handleIncrementDisLikes = () => {
    setDisLikes((prevDisLikes) => prevDisLikes + 1);
  };
  function handleCategory(event) {
    let newValue = event.target.value; //why does this work? I DONT UNDERSTAND WHY I DONT WANT TO KNOW WHY BUT IT ONLY WORKS IF NEW VALUE IS PASSED IN NOT EVENT.TARGET.VALUE
    setSelectedCategory(newValue); //not setting to the target value
    console.log(selectedCategory); //incorrect value
    console.log(event.target.value); //correct value
    localStorage.setItem('selectedCategory', newValue);
    console.log(localStorage.getItem('selectedCategory'));
  }

  return (
    <>
      <div>
        <form >
          <label >Choose a field:</label>
          <select onChange={handleCategory} value={selectedCategory} id="Jobs" name="Jobs" size="1">
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
            }
          </select>
        </form>
        <h1>Category Name</h1>
        <h2>Role Title</h2>
        <div>
          <div>
            {
              posts.map((post) => (
                <div key={post.id}>
                  {(() => {
                    if (post.category_id == selectedCategory) {
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
                            Expected salary range from: {post.expected_salary_range_from} to: {post.expected_salary_range_to}
                          </div><div>
                            Industry growth: {post.industry_growth}
                          </div><div>
                            Work life balance: {post.work_life_balance}
                          </div><div>
                          </div><div>
                            Career Path: {post.career_path}
                          </div><div>
                            good post: {post.upvotes}
                          </div><div>
                            bad post: {post.downvotes}
                          </div>
                          <button><a href="/">Link to Deep Dive</a></button>
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
    </>
  );
}
