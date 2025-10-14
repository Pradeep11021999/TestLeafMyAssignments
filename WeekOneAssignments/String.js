//for word madam
let orginalWord = "madam"
let characters = orginalWord.split("")
let reversedWords = ""

for(let i=characters.length-1;i>=0;i--){
    reversedWords+=characters[i]
}
if(orginalWord===reversedWords){
    console.log(reversedWords + " It’s a palindrome!")
} else {
    console.log(reversedWords + " Not a palindrome!")
}
// for word level
let orginalWord1 = "level"
let characters1 = orginalWord1.split("")
let reversedWords1 = ""

for(i=characters1.length-1;i>=0;i--){
    reversedWords1+=characters1[i]
}
if(orginalWord1===reversedWords1){
    console.log(reversedWords1 + " It’s a palindrome!")
} else {
    console.log(reversedWords1 + " Not a palindrome!")
}

// for word hello
let orginalWord2 = "hello"
let characters2 = orginalWord2.split("")
let reversedWords2 = ""

for(i=characters2.length-1;i>=0;i--){
    reversedWords2+=characters2[i]
}
if(orginalWord2===reversedWords2){
    console.log(reversedWords2 + " It’s a palindrome!")
} else {
    console.log(reversedWords2 + " Not a palindrome!")
}
