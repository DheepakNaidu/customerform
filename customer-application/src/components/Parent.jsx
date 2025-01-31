import ViewCustomers from "./ViewCustomers";
import AddCustomer from "./AddCustomer";
import UpdateCustomer from "./UpdateCustomer";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";

const Parent = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<ViewCustomers></ViewCustomers>}></Route>
                    <Route path="/add" element={<AddCustomer></AddCustomer>}></Route>
                    <Route path="/view" element={<ViewCustomers></ViewCustomers>}></Route>
                    <Route path="/update/:first_name/:last_name/:street_address/:street_address_line/:city/:state/:zip_code/:number/:email/:aadhaar" element={<UpdateCustomer></UpdateCustomer>}></Route>
                </Routes>
                
            </BrowserRouter><object data="" type=""></object>
        </>
    )
}
export default Parent;