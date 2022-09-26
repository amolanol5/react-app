import React from 'react';
const variabletest1 = process.env.REACT_APP_PRUEBA || "varvacia"
const variabletest2 = process.env.AWS_APP_ID || "appidvacio"
const variabletest3 = process.env.MESSAGE || "messagevacio"

const HelloWorld = () => {
  
  function sayHello() {
    alert(process.env.REACT_APP_PRUEBA);
  }
  
  return (
    <h1> <button onClick={sayHello}>Click me this is a test app!</button></h1>
  );
};

export default HelloWorld;