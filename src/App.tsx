import React from 'react';
import './App.css';

interface Person {
  name: string,
  age: number
}

// ця функція повертає перевірку Type Guard (true/false)
//у випадку, коли ця функція повертає true до obj додається тип інтерфейсу Person
function isPerson(obj: any): obj is Person {
  return typeof obj === "object" && "name" in obj && "age" in obj
}

function greet(person: any) {
  //Type Guard варто використовувати в if-блоках. Лише в цьому блоці буде додаватися iнтерфейс Person
  if (isPerson(person)) {
    //person тепер має інтерфейс Person
    alert(`Hello, ${person.name}`)
  } else {
    alert('Invalid person object')
  }
}

greet({name: "John", age: 30})
//=============

interface Car {
  type: string,
  model: string,
  year: number
}

function isCar(obj: any): obj is Car {
  if (typeof obj !== "object") return false;
  if ("type" in obj === false || obj.type === "custom") return false;
  if ("model" in obj === false || obj.model === "BMW") return false;
  if ("year" in obj === false || obj.year < 2000) return false;
  return true
}

function getCar(obj: any) {
  if (isCar(obj)) {
    alert(obj.type)
  } else {
    alert("not car")
  }
}

getCar({type: "car", model: "BMW", year: 1999}) // "not car"
getCar({type: "car", model: "Audi", year: 2003}) // Audi

//++++++++++++++++++++++++++
//interface описує тільки об'єкти!
//type можно використати для опису масиву
type User = {
  id: 100,
  balance?: number,
  name: string
}
const user: User = {id: 100, balance: 200, name: "Joe"}
const user1: User = {id: 100, balance: 505, name: "Jane"}
const user2: User = {id: 100, name: "Irakly"}
//=
//type + кортеж
type UserList = User[];//??????? not work

const list: UserList = [user1, user2]
//====
//Intersection
type Human = {
  age: number,
  name: string
}
type Employee = {
  salary: number,
}

type Intersection = Human & Employee

const together: Intersection = {age: 20, name: "Yana", salary: 5000}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello world</div>
        <div>
        User id: {user.id},  user`s name: {user.name}
        </div>
        {/* <div>Users list: {list}</div> */}
        <div>{together.name}{together.salary}</div>
      </header>

    </div>
  );
}

export default App;
