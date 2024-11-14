import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Visitante");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Bob Esponja");
    }

    const incrementAge = () => {
        setAge(age+1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>

        <p>Nome: {name}</p>
        <button onClick ={updateName}>Set Name</button>

        <p>Idade: {age}</p>
        <button onClick ={incrementAge}>Aumentar Idade</button>

        <p>Empregado: {isEmployed ? "Empregado" : "Desempregado"}</p>
        <button onClick ={toggleEmployedStatus}>Alterar Status</button>
    </div>)

}
export default MyComponent