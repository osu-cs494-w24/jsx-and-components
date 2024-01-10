import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css"

const name = "Leia Organa"
const user = {
    firstName: "Leia",
    lastName: "Organa",
    email: "leia@gmail.com"
}
// const user = null

function formatUserName(user) {
    // return user.lastName + ", " + user.firstName
    return `${user.lastName}, ${user.firstName}`
}

function generateUserEmailLink(user) {
    return (
        <a href={`mailto:${user.email}`}>
            {formatUserName(user)}
        </a>
    )
}

function getGreeting(user) {
    // if (user) {
    //     return <h1>Hello {generateUserEmailLink(user)}!!!!!!!!!!</h1>
    // } else {
    //     return <h1>Hello, stranger!</h1>
    // }
    return <h1>Hello, {user ? generateUserEmailLink(user) : "stranger"}</h1>
}

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>
}

function App() {
    return (
        <div>
            <Card>
                <Greeting name="Luke Skywalker" />
                <GreetingClass name="Leia Organa" />
            </Card>
            <Card>
                <Greeting name="C-3PO" />
            </Card>
            <Card>
                This is just a string
            </Card>
            <Card />
        </div>
    )
}

function Card(props) {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

class GreetingClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} (class)!</h1>
    }
}

const elem = (
    <div className="my-div">
        <Greeting name="Luke Skywalker" />
        <Greeting name="Leia Organa" />
        <Greeting name="C-3PO" />
        <img src="http://placekitten.com/480/480" alt="Kitty" />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)
