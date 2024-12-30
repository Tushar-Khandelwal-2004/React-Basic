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
