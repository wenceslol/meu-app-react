import react, {useState} from 'react'

function CarComponent(){

    const [car, setCar] = useState({year:2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c =>({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c =>({...c, model: event.target.value}));
    }

    return(
    <>
        <p>Seu carro favorito é: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}></input>
        <input type="text" value={car.make} onChange={handleMakeChange}></input>
        <input type="text" value={car.model} onChange={handleModelChange}></input>
    </>);
}

export default CarComponent