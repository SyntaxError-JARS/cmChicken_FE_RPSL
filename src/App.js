import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDAshBoard from "./components/Admin/AdminDashboard.jsx";
import AddCreditCard from "./components/creditcard/AddCreditCard";
import DeleteCreditCard from "./components/creditcard/DeleteCreditCard";
import UpdateCreditCard from "./components/creditcard/UpdateCreditCard.jsx";
import CustomerLogIn from "./components/customer/CustomerLogin";
import CreateMenuItem from "./components/menu/CreateMenuItem";
import DeleteMenuItem from "./components/menu/DeleteMenu";
import MenuItem from "./components/menu/MenuItem";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
         <Routes>
           <Route exact path=""element={<Welcome/>}/>
            <Route path="view-menu"element={<MenuItem/>}/>
            <Route path="create-menu"element={<CreateMenuItem/>}/>
            <Route path="add-card" element={<AddCreditCard />} />
            <Route path="delete-card" element={<DeleteCreditCard />} />
            <Route path="login" element={<CustomerLogIn />} />
            <Route path="delete-menu" element={<DeleteMenuItem />} />
            <Route path="admin" element={<AdminDAshBoard />} />
            <Route path="update-card"element={<UpdateCreditCard />} />

         </Routes>
        
        
    </BrowserRouter>    
    </>
  );
}

export default App;
