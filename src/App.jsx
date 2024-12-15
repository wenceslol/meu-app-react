import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Feed from './Feed.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import CarComponent from './CarComponent.jsx'
import ListComponent from './ListComponent.jsx'
import ToDoList from './ToDoList.jsx'

function App() {

    const fruits = [{id: 1, name:"Maçã", calories: 95},
                    {id: 2, name:"Banana", calories: 105},
                    {id: 3, name:"Mamão", calories: 200}];

    const vegetables = [{id: 4, name:"Batata", calories: 110},
                        {id: 5, name:"Alface", calories: 15},
                        {id: 6, name:"Cenoura", calories: 25}];

    return(
        <>
          <Header></Header>
          <Feed></Feed>
          <ProfilePicture></ProfilePicture>
          <ToDoList></ToDoList>
          <ListComponent></ListComponent>
          <CarComponent></CarComponent>
          <Button></Button>
          <MyComponent></MyComponent>
          <ColorPicker></ColorPicker>
          <Counter></Counter>
          <>
              {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
              {vegetables.length > 0 && <List items={vegetables} category="Vegetables"></List>}
          </>
          <UserGreeting isLoggedIn={true} username="Wenceslau"></UserGreeting>
          <Student name="Wenceslau" age={26} eEstudante={true} ></Student>
          <Student name="Bolinha" age={26} eEstudante={false} ></Student>
          <Card name="Wenceslau" funcao="Eu jogo e programo"></Card>
          <Card name="Bolinha" funcao="Passa video no zap"></Card>
          <Card></Card>
          <Card></Card>
          <Footer></Footer>
        </>
    );
}

export default App
