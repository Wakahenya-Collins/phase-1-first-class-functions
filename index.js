const receivesAFunction = (callback) => {
    callback(); 
  };
  
  const returnsANamedFunction = () => {
    return function namedFunction() {
     
      console.log("Inside named function");
    };
  };
  
  const returnsAnAnonymousFunction = () => {
    return function () {
     
      console.log("Inside anonymous function");
    };
  };
  
  