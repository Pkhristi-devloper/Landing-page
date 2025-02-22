import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"
import Create from "./components/Create"
import Edit from "./components/Edit"


const App = () => {
  return (
    <div className='main min-h-screen h-fit w-screen flex'>
     

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />}>
        <Route path="/details/:id" element={<Details />} />
       </Route>
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} >
        <Route path="/edit/:id" element={<Edit />} />
       </Route>
     </Routes>
      
    </div>
  )
}

export default App
