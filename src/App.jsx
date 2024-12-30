<<<<<<< HEAD
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
=======
import { createContext, useContext, useRef, useState } from "react";
const BulbContext = createContext();
function BulbProvider({ children }) {
  const [bulb, setbulb] = useState(true);
  return <BulbContext.Provider value={{ bulb, setbulb }}>
    {children}
  </BulbContext.Provider>
}
function App() {

  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>

    </div>
  )
}
function Light() {
  return (
    <div>

      <Lightswitch />
      <Button />

    </div>


  )
}
function Lightswitch(props) {
  const { bulb } = useContext(BulbContext);
  return (
    <div>{bulb ? "Bulb On" : "Bulb Off"}</div>
  )
}

function Button(props) {
  const { setbulb } = useContext(BulbContext);

  function change() {
    setbulb(c => !c);
  }
  return <button onClick={change}>Toggle</button>
}

export default App;


































// import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<AllenProgram />} />
//             <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//             <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// function Layout() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <Link to="/">Allen</Link> |
//       <Link to="/neet/online-coaching-class-11">Class 11</Link> |
//       <Link to="/neet/online-coaching-class-12">Class 12</Link>
//       <div style={{ height: "90vh" }}>
//         <Outlet />
//       </div>
//       Footer
//     </div>
//   )
// }
// function AllenProgram() {
//   return (
//     <div>
//       Welcome to Allen!
//     </div>
//   )
// }
// function Class11Program() {
//   return (
//     <div>
//       Hi from Class 11 NEET.
//     </div>
//   )
// }
// function Class12Program() {
//   return (
//     <div>
//       Hi from Class 12 NEET.
//     </div>
//   )
// }
// export default App
>>>>>>> c88b95b (Implemented Context API using providers)
