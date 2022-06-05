import axios from "axios";
import { useRef } from "react"


export default function DeleteMenuItem(){

    

    const menuItemInput = useRef();


    const url = "http://localhost:8080/cmChicken/menu"



    async function deleteMenuItem(){


        try{
            const response = await axios.delete(`${url}/menu/id?id=${menuItemInput.current.value}` )

            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }

    return(
    <>
    <h3>Please enter the Menu Item You Would Like To Delete</h3>
        <br></br>
        <input placeholder="Menu Item" ref={menuItemInput}></input>
        <button onClick={deleteMenuItem}>Delete Menu Item</button>

    </>
    )
}