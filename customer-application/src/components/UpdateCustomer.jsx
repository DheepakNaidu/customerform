import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateCustomer = () => {
  

    const navigate = useNavigate();

    const {
        first_name,
        last_name,
        street_address,
        street_address_line,
        city,
        state,
        zip_code,
        number,
        email,
        aadhaar,
     } = useParams();



       


       const [customer,setCustomer] = useState({
        "first_name" : first_name || '',
        "last_name" : last_name || '',
        "street_address" : street_address || '',
        "street_address_line" : street_address_line || '',
        "city" : city || '',
        "state" : state || '',
        "zip_code" : zip_code || '',
        "number" : parseInt(number) || '',
        "email" : email || '',
        "aadhaar" : aadhaar || ''
       })




     const submit_data =async (event)=>{
        event.preventDefault();
     
        const {data} = await axios.put("http://localhost:8080/update",customer);
        const {msg} = data;
        if(msg == "updated success!")
        {
            navigate("/view");
        }
        else{
            navigate("/update");
        }

     }




     const func_one = (event)=>{
        setCustomer({...customer,[event.target.name]: event.target.value});        
     }
    
      


  return(
    <>
          <form onSubmit={submit_data}>
          <h1>Update Details</h1>
          <hr></hr>
          <br></br><br></br>  
          <label>first_name:   </label>  
          <input type="text" name="first_name" value={customer.first_name} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>last_name:   </label>  
          <input type="text" name="last_name" value={customer.last_name} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>street_address:   </label>  
          <input type="text" name="street_address" value={customer.street_address} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>street_address_line:   </label>
          <input type="text" name="street_address_line" value={customer.street_address_line} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>city:   </label>  
          <input type="text" name="city" value={customer.city} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>state:   </label>
          <input type="text" name="state" value={customer.state} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>zip_code:   </label>
          <input type="text" name="zip_code" value={customer.zip_code} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>number:   </label>
          <input type="number" name="number" value={customer.number} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>email:   </label>  
          <input type="email" name="email" value={customer.email} onChange={func_one}></input>
          <br></br>
          <br></br>
          <label>aadhaar:   </label>  
          <input type="text" name="aadhaar" value={customer.aadhaar} onChange={func_one}></input>
          <br></br>
          <br></br> 
          <input type="submit" value={"Update"}></input>

          
          </form>
    </>
  )
};
export default UpdateCustomer;
