import axios from "axios"

export default function CustomerRegister(){

    const customerA = {
        username : "user1",
        fname: "Tester",
        lname: "McTesterson",
        password: "password",
        balance: 300000,
        is_admin: true
    }

    /*
        async-await
    */
    async function register() {

        // /* cross orgin resource sharing */
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
                .post("http://localhost:8080/cmchicken/customer", 
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

            <button onClick={register}>Register</button>
        </>
    )

}