

export default function CreateOrder(){

    const menu_itemInput = useRef();
    const m_commentInput = useRef();
    const is_favoriteInput = useRef();
    const order_dateInput = useRef();
    const customer_usernameInput = useRef();
   

    const url = " "

    async function addOrder(){

        const order = {
            //id: defaultValue,
            menuItem: menu_itemInput.current.value,
            comment: m_commentInput.current.value,
            isFavorite: is_favoriteInput.current.value,
            orderDate: order_dateInput.current.value,
            username: customer_usernameInput.current.value
        }


        try{
            const response = await axios.post(`${url}/order/createorder` , order )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }


    return (
        <>
        <h3>Welcome, Please Enter Your Order Below</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter Menu Item" ref={menu_itemInput}></input>
        <br></br>
        <input placeholder="Enter A Comment" ref={m_commentInput}></input>
        <br></br>
        <input  placeholder="Favorite Item" ref={is_favoriteInput}></input>
        <br></br>
        <input  placeholder="Date" ref={order_dateInput}></input>
        <br></br>
        <input  placeholder="Username" ref={customer_usernameInput}></input>
        <br></br>
        <button onClick={addOrder}>Create Order</button>
        </>
    )
}