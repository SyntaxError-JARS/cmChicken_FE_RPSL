import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerDelete from "./components/customer/customer-delete";
import CustomerLogin from "./components/customer/customer-login";
import CustomerRegister from "./components/customer/customer-register";
import CustomerUpdate from "./components/customer/customer-update";
import CustomerWelcome from "./components/customer/customer-welcome";
import NavBar from "./components/navbar";

function App() {
  /* React-router-dom provides us the ability to emulate multipage 
      while still only being a single page. */
  return (
    <>
      {/* BrowserRouter is a starting root for every router. 
            Because we have to wrap everything in the BrowserRouter, 
            we need closeing tag

            <Routes>
              <Route>   -- path : loc
      */}
      <BrowserRouter>
        {/*     Because every pages start from customer-welcome...
            using Route exact path (location) & element      
        <CustomerWelcome /> */}
        <NavBar />
      <Routes>
        <Route path="login" element={<CustomerLogin />} />
        <Route path="register" element={<CustomerRegister />} />
        <Route path="update" element={<CustomerUpdate />} />
        <Route path="delete" element={<CustomerDelete />} />
        <Route exact path="" element={<CustomerWelcome />} />
      </Routes>
        
        
      </BrowserRouter>
    </>
  );
}

export default App;
