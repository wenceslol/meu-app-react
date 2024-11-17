import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Visitante");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const updateName = () => {
        setName("Bob Esponja");
    }

    const incrementAge = () => {
        setAge(age+1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
    
    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    

    return(<div>

        <p>Nome: {name}</p>
        <input value={name} onChange={handleNameChange}></input>
        <button onClick ={updateName}>Set Name</button>

        <p>Idade: {age}</p>
        <button onClick ={incrementAge}>Aumentar Idade</button>

        <p>Empregado: {isEmployed ? "Empregado" : "Desempregado"}</p>
        <button onClick ={toggleEmployedStatus}>Alterar Status</button>

        <p>Quantity: {quantity}</p>
        <input value={quantity} onChange={handleQuantityChange} type="number"></input>

        <p></p>
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Selecione uma opção</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Elo">Elo</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShippingChange}/>
            Pick Up
        </label>
        <label>
        <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>)

}
export default MyComponent