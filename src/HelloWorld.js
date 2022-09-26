import React from 'react';

const HelloWorld = () => {
  
  function sayHello() {
    const variabletest1 = process.env.PRUEBA || "varvacia"
    const variabletest2 = process.env.AWS_APP_ID || "appidvacio"
    const variabletest3 = process.env.MESSAGE || "messagevacio"

    alert(variabletest1,variabletest2,variabletest3);
  }
  
  return (
    <h1> <button onClick={sayHello}>Click me this is a test app!</button></h1>
  );
};

export default HelloWorld;