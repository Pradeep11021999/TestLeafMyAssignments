let browser = "chrome"
function checkBrowserVersion(callback){
    console.log("checking browser version")
    setTimeout(()=>{
        callback(browser);
    },2000)
}

function browserVersion(version){
    console.log(`Browser version using callback: ${version} is 141.80`)
}

checkBrowserVersion(browserVersion)