import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    const itemList = props.items;

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = itemList.filter(item => item.calories >= 100);
    //fruits.sort((a, b) => a.name.localeCompare(b.name));
    itemList.sort((a, b) => b.calories - a.calories);

    const listItems = itemList.map(item =>               <li key={item.id}>
                                                        Uma {item.name} tem&nbsp;
                                                        <b>{item.calories} </b>
                                                        calorias</li>);

    return( <><h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],

}
export default List