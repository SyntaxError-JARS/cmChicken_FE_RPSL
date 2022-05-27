import axios from "axios"
import { useRef } from "react";

export default function CustomerRegister(){

    const url = "https://cmchicken.azurewebsites.net"
    // const customerA = {
    //     username : "user1",
    //     fname: "Tester",
    //     lname: "McTesterson",
    //     password: "password",
    //     balance: 300000,
    //     is_admin: true
    // }
    const usernameInput = useRef();
    const fnameInput = useRef();
    const lnameInput = useRef();
    const passwordInput = useRef();
    const balanaceInput = useRef();
    const is_adminInput = useRef();

    /*   async-await
    */
    async function register() {

        /* cross orgin resource sharing */
        // const response = await fetch(
        //     "http://localhost:8080/cmchicken/customer",
        //     {method:"POST", body:JSON.stringify},
        //     true
        // )
        // const test = await response.json()
        // console.log(test)

        /* using axios
            whenever you get a response from the axios 
            all information is under reponse.data
        */
        try {
            const reponse = await axios
                // .post("http://localhost:8080/cmchicken/customer", 
                .post(`${url}/customer`, 
                    customerA)
            console.log(reponse.data)
        } catch (error) {
            console.error(error.reponse.data)
            alert(error.reponse.data)
        }
    }


    return (
        <>
            <h4>Hello, new customer, please register below.</h4>
            <input placeholder="Enter username" ref={usernameInput}></input>
            <input placeholder="Enter your first name" ref={fnameInput}></input>
            <input placeholder="Enter your last name" ref={lnameInput}></input>
            <input placeholder="Enter your password" ref={passwordInput}></input>
            <input placeholder="Enter your balance" ref={balanaceInput}></input>
            <input placeholder="Enter " ref={usernameInput}></input>
            
            <button onClick={register}>Register</button>
        </>
    )

}