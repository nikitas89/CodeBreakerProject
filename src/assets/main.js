let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    answer||attempt?"":setHiddenFields()
}

//implement new functions here
function setHiddenFields(){
  attempt = 0
  answer.value = Math.floor(Math.random()*10000)
  // console.log('answer ',answer);
var answerStr = answer.value.toString()
// console.log('len ', answerStr.length);
while (answerStr.length<4) {
  answerStr = "0"+answerStr
  attempt.value="0"
}
  console.log('answerStr ',answerStr);
//non working switch code
  // switch(answerStr.length){
  //   case answerStr.length<2:
  //     answerStr = "000" + answerStr
  //     console.log('answerStr ',answerStr);
  //     break
  //   case answerStr.length<3:
  //     answerStr = "00"+answerStr
  //     console.log('answerStr ',answerStr);
  //     break
  //   case answerStr.length<4:
  //     answerStr = "0"+answerStr
  //     console.log('answerStr ',answerStr);
  //     break
  //   default:
  //   console.log("default",answerStr);
  // }

}

function setMessage(text){
  var message = document.getElementById('message')
  message.innerHTML(text)

}

function validateInput(input){
  var message = "Guesses must be exactly 4 characters long."
  if (input.length===4)
  return true
  else{
  setMessage(message)
    return false
  }
}

setHiddenFields()
