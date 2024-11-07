import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Single from "./pages/single/single";
import New from "./pages/new/new";
import { productInputs, userInputs } from "./formSource";


function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="users">
                <Route index element={<List/>}/>
                <Route path=":userId" element={<Single/>}/>
                <Route 
                  path="new" 
                  element={<New inputs={userInputs} 
                  title="Add New User"/>}
                />
              </Route>
              <Route path="products">
                <Route index element={<List/>}/>
                <Route path=":productId" element={<Single/>}/>
                <Route 
                  path="new" 
                  element={<New inputs={productInputs} 
                  title="Add New Product"/>}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
