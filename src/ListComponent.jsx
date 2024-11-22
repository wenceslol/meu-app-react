import React, {useState} from 'react'

function ListComponent(){

    const [items, setItems] = useState(["Maçã", "Banana", "Mamão"])

    function handleAddItems(){

        const newItems = document.getElementById("itemsInput").value;
        document.getElementById("itemsInput").value = "";

        setItems(i => [...i, newItems]);
    }

    function handleRemoveItems(index){

        setItems(items.filter((_, i) => i !== index));

    }

    return (<>
            <h2></h2>
            <ul>
                {items.map((items, index) => 
                <li key={index} onClick={() =>handleRemoveItems(index)}>
                    {items}
                </li>)}
            </ul>

            <input type="text" id="itemsInput" placeholder="Insira um item"></input>
            <button onClick={handleAddItems}>Adicionar</button>
            </>)

}
export default ListComponent