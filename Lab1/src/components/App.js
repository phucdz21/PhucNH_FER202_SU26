import React , {Component} from "react";
import "../styles/App.css";
import HelloWorld from "./HelloWorld.js";

class App extends Component{
    render(){
        return (
            <div>
                <h1>
                    My React App!
                </h1>
                <HelloWorld /> 
            </div>
            )
    }
}

export default App;

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayhello(){
        console.log(`Hello my name is ${this.name} ,and I am ${this.age} years old.`);
    };

}

 const person = new Person('John', 25);
 person.sayhello();