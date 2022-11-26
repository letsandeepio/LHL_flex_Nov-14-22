// Global scope

const greeting = "hello";

const printGreeting = () => {
  //local scope
  const goodByeGreeting = "Tata";


  const sendGreeting = () => {
    const anotherGreeting = "Bonjour";
    console.log("sending greeting", goodByeGreeting);
    function recieveGreeting(){
      console.log("recieve greeting", anotherGreeting)
    }
  }

    sendGreeting();
}

// console.log(goodByeGreeting);

printGreeting();