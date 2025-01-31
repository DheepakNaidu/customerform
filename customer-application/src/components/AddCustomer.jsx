import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AddCustomer = () => {

  const first = useRef(null);
  const last = useRef(null);
  const street = useRef(null);
  const street2 = useRef(null);
  const city = useRef(null);
  const state = useRef(null);
  const zip = useRef(null);
  const num = useRef(null);
  const email = useRef(null);
  const aadhaar = useRef(null);

  

  const [msg,setMsg] = useState({});

  const navigate = useNavigate();

  const func_one = async()=>{
    
    const {data} = await axios.post("http://localhost:8080/insert",{"first_name":first.current.value,"last_name":last.current.value,"street_address":street.current.value,"street_address_line":street2.current.value,"city":city.current.value,"state":state.current.value,"zip_code":zip.current.value,"number":num.current.value,"email":email.current.value,"aadhaar":aadhaar.current.value});
    const {msg} = data;
    

  }

  



  const post_req = ()=>{
      func_one();
      navigate("/view");
  }




  return (
    <>
      <h1>New Customer Registration Form</h1>
      <hr></hr>
      <h3>Customer Details:</h3>
      <form>
        
        <div>
          <h3>Full Name</h3>
          <input type="text" ref={first} placeholder="First Name"  name="firstname" ></input>
          <br></br>
          <br></br>
          <input type="text" ref={last} placeholder="Last Name"  name="lastname"></input>
        </div>
        

        <div>
          <h3>Address</h3>
          <input type="text" ref={street} placeholder="Street Address"  name="streetaddress"></input>
          <br></br><br></br>
          <input type="text" ref={street2} placeholder="Street Address Line 2"  name="Streetaddress"></input>
          <br></br><br></br>
          <input type="text" ref={city} placeholder="City"  name="city"></input>
          <br></br><br></br>
          <input type="text" ref={state} placeholder="State / Province"  name="state"></input>
          <br></br><br></br>
          <input type="text" ref={zip}  placeholder="Postal / Zip Code"></input>
        </div>

        <div>
          <h3>Phone Number</h3>
          <input type="number" ref={num} placeholder="(000) 000-0000"  name="phonenumber"></input>
          <br></br>
          <h3>E-mail</h3>
          <input type="email" ref={email} placeholder="ex: email@yahoo.com"  name="email"></input>
          <br></br>
          <h3>Aadhaar</h3>
          <input type="text" ref={aadhaar} placeholder="Aadhaar Number"  name="aadhaar"></input>
          <br></br><br></br>
        </div>


        <div>
          <button onClick={post_req}>Submit</button>
        </div>
      
        



        </form>
      
       
    </>
  );
};
export default AddCustomer;