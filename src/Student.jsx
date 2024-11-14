
function Student(props){

    return(
        <div className="student">
            <p>Nome: {props.name}</p>
            <p>Idade: {props.age}</p>
            <p>{props.name} estuda? {props.eEstudante ? "Sim" : "Não"} </p>
        </div>

    );
}

export default Student