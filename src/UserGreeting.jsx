import PropTypes from 'prop-types'

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">
        Bem vindo {props.username}
        </h2>
    const loginPrompt = <h2 className="login-prompt">
        Por favor faça login para continuar
        </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);

    if(props.isLoggedIn){
        return <h2>Bem vindo {props.username}</h2>
    }
    else{
        return <h2>Por favor faça login para continuar</h2>
    }
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Visitante",
}

export default UserGreeting