import styles from './Button.module.css'

function Button(){

    const styles = {
        backgroundColor: "hsl(0, 0%, 75%)",
        color: "blue",
        padding: "10px 20px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",

    }

    let count = 0;
    const msg1 = "Clique aqui!";
    const msg2 = "OUCH!";
    
    //const handleClick = (e) => console.log(e);

    //const handleClick = (e) => e.target.textContent = "OUCH!";
    const handleClick = (e) => {

        if(e.target.textContent == msg1){
            console.log(`testou1 ${e.target.textContent}`);
            e.target.textContent = msg2;
        }else{
            console.log(`testou2 ${e.target.textContent}`);
            e.target.textContent = msg1;
        }

    }
    /*
    const handleClick = (name) => {
        if(count<3){
            count++;
            console.log(`${name} voce clicou ${count} vezes`)
        }
        else{
            console.log(`${name} pare de clicar em mim`)
        }
        console.log("Ouch!")
    };
    */

    const handleClick2 = (name) => console.log(`${name} pare de clicar`);

    return(<button onClick={(e) => handleClick(e)} style={styles}>Clique aqui!</button>);
}

export default Button