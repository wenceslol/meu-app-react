import profilePic from './assets/shyvana.jpg'
import PropTypes from 'prop-types'


function Card(props){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.funcao}</p>
        </div>

    );

}
Card.propTypes = {
    name: PropTypes.string,
    funcao: PropTypes.string,
}
Card.defaultProps = {
    name: "Fulano",
    funcao: "Fulano faz fulanices",
}

export default Card