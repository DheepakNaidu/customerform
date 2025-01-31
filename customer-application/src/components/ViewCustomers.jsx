import axios from "axios";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const ViewCustomers = ()=>{

    

    const [msg,setMsg] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8080/customers").then((posRes)=>{
        const {data} = posRes;
        setMsg(data);

            
        },(errRes)=>{
            console.log(errRes);
        })
    },[msg])


    const fun_del = async(fname)=>{
        const res = await axios.delete("http://localhost:8080/delete",{"data":{"first_name":fname}});

    }

    const fun_edit = async (f,l,s,s2,c,s3,z,n,e,a)=>{
        const x = encodeURIComponent(s);
        const y = encodeURIComponent(s2);
        navigate(`/update/${f}/${l}/${x}/${y}/${c}/${s3}/${z}/${n}/${e}/${a}`);
    }


    const add = ()=>{
        navigate("/add");
    }


    return(
        <>
            
            <button onClick={add} style={{marginLeft:1150}}>Add Customer</button>
            <br></br>
            <br></br>
            <table border={2} align="center" cellPadding={10} cellSpacing={10}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Street Address</th>
                        <th>Street Address 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Aadhaar</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                          msg.map((element,index)=>{
                            return(<>
                                <tr key={index}>
                                    <td>{element.first_name}</td>
                                    <td>{element.last_name}</td>
                                    <td>{element.street_address}</td>
                                    <td>{element.street_address_line}</td>
                                    <td>{element.city}</td>
                                    <td>{element.state}</td>
                                    <td>{element.zip_code}</td>
                                    <td>{element.number}</td>
                                    <td>{element.email}</td>
                                    <td>{element.aadhaar}</td>
                                    <td>
                                        <i className="fa fa-edit" onClick={()=>fun_edit(element.first_name,element.last_name,element.street_address,element.street_address_line,element.city,element.state,
                                            element.zip_code,element.number,element.email,element.aadhaar
                                        )}></i>
                                    </td>
                                    <td>
                                        <i className="fa fa-trash" onClick={()=>fun_del(element.first_name)}></i>
                                    </td>
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
            
        </>
    )
}
export default ViewCustomers;