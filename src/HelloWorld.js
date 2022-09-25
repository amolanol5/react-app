import React from 'react';

const HelloWorld = () => {
  
  function sayHello() {
    alert('Hello, World!');
  }
  
  return (
    <h1> <button onClick={sayHello}>Click me this is a test app!</button></h1>
  );
};

export default HelloWorld;