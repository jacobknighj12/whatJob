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



    // setSelectedCategory(localStorage.getItem('selectedCategory'));
    // selectedCategory.addEventListener('change', function(){
    //   footer.style.setProperty('--category-image', setCategories)
    // })
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
      <heading>Job Posts</heading>
      
      <div>
        <form ><div class="category-select">
          <label >Choose a field:</label>

          <select onChange={handleCategory} value={selectedCategory} id="Jobs" name="Jobs" size="1">
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
            }
          </select></div>
        </form>
        
        
        
        <div className="jobs-by-category"><h1>Category Name</h1>
        <h2>Role Title</h2>
        <div>
          
            {
              posts.map((post) => (
                <div key={post.id}>
                  {(() => {
                    if (post.category_id == selectedCategory) {
                      return (
                        <border className='jobs-by-category-border'>
                        <post className='jobs-by-category'>
                          <p><label>User:</label> {post.user_id}</p>
                          <p><label>Title:</label> {post.title}</p>
                          <p><label>Introduction:</label> {post.intro}</p>
                          <p><label>Day to day:</label> {post.day_to_day}</p>
                          <p><label>Job difficulty: {post.difficulty}/10</label></p>
                          <p><label>
                            Expected salary range</label> from: {post.expected_salary_range_from} to: {post.expected_salary_range_to}</p>
                            <p><label>Industry growth:</label> {post.industry_growth}</p>
                            <p><label>
                            Work life balance:</label> {post.work_life_balance}</p>
                            <p><label>Career Path:</label> {post.career_path}</p>
                            <p><label>
                            good post:</label> {post.upvotes}</p>
                            
                            <p><label>
                            bad post:</label> {post.downvotes}</p>
                          
                            <button><a href="/">Link to Deep Dive</a></button>
                          <div> _</div>
                        </post></border>)
                    }
                  })()}
                </div>

              ))
            }
          
        </div>
      
      <div className="jobs-by-category">
        <button onClick={handleIncrementLikes}>(Bootstrap thumbs up)</button>
        <h5>Count is {likes}</h5>
        <button onClick={handleIncrementDisLikes}>(Bootstrap thumbs up)</button>
        <h5>Count is {disLikes}</h5>
      </div>
      <button onClick={() => setLikes(0)}></button>
      <div></div>
      <button onClick={() => setDisLikes(0)}></button>
      </div>
      </div>
    </>
  );
}
