//Readline to initiate user interaction
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInfo = {
    username: "",
    password: "",
  };

// Create outer function with username and password object parameters
function createLoginTracker(userInfo) {
  let attemptCount = 0;
    return (passwordAttempt) => { //Arrow function for handling each login attempt count
      attemptCount++; 

      //Login Attempt Variable to 
      if (attemptCount > 3) {
        return ("Account locked due to too many failed login attempts!");
      }

      if (passwordAttempt === userInfo.password) {
        return "Login Successful!";
      } else {
        return "Login attempt ${attemptCount}: Login failed";
      }
  
  

  const login = createLoginTracker(userInfo);
  console.log("Welcome! You have 3 login attempt.");

  //Function to ask for password
  const askForPassword = () =>
    rl.question("Enter password:" (passwordAttempt)) => {
      const result = login(passwordAttempt);
      console.log(result);

      
    }
      
    }

}
  