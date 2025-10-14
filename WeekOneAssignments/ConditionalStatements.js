//Conditional Statements - If else
let browserName = "Safari"

if(browserName==="Safari"){
    console.log("Launching Safari browser")
} else{
    console.log("Launching default browser")
}

//switch case
let testType = "sanity"
switch(testType){
    case "smoke": console.log("Running Smoke Tests...")
    break
    case "sanity": console.log("Running Sanity Tests...")
    break
    case "regression": console.log("Running Regression Tests...")
    break
    default: console.log("Running Default Smoke Tests...")
    break
}

//