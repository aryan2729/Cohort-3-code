import {Route , Routes , BrowserRouter } from "react-router-dom"

//@ts-ignore
import {Signup}  from "../pages/Signup";
//@ts-ignore
import { Dashboard } from "../pages/Dashboard";
// @ts-ignore
import {SendMoney} from "../pages/SendMoney"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/send" element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
