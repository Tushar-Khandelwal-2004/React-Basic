// import { useState , useEffect } from "react";
import { useState } from "react";
import { PostComponent } from "./post";
function App() {
  const [posts, setposts] = useState([]);
  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)
  function addPost() {
    setposts([...posts, {
      name: "Tushar",
      subtitle: "2636 Followers",
      time: "1h ago",
      image: "https://wallpapers.com/images/high/robert-pattinson-as-the-batman-at23zambqyb1i5nj.webp",
      description: "Use GoTo.now as your preferred URL shortener for better tracking and easy sharing! This asset is available in the following sizes:",
    }])
  }
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post!</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App;
