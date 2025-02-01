import React from 'react'

const pass = "abc";
export default function Test1(props) {
    let output = "";
    if (props.password == pass) {
        output = "Верно!"
    } else output = "Неверно!";

  return (
    <div style={{background: "wheat"}}>
        <p>{props.nick}</p>
        <p>{output}</p>
    </div>
  )
}
