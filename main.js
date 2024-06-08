let inputs = document.querySelectorAll("input");
let outputs = document.querySelectorAll(".output");
let buttons = document.querySelectorAll(".btn");

//Q-1
let value = "";
inputs[0].addEventListener("keyup", (event) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (reqExnum.test(event.key)) {
    if (event.key) {
      value += event.key;
      outputs[0].style.backgroundColor = "green";
      outputs[0].style.padding = "15px";
      outputs[0].style.color = "#fff";
    }
  }
  if (event.key == "Backspace") {
    value = inputs[0].value;
  }

  if (inputs[0].value.length === 0) {
    outputs[0].innerHTML = "";
    outputs[0].style.backgroundColor = "#fff";
  }
  outputs[0].innerHTML = value;
});

inputs[0].addEventListener("focusout", () => {
  inputs[0].value = "";
  outputs[0].innerHTML = "";
  outputs[0].style.backgroundColor = "#fff";
});

//Q-2
let value2 = "";
inputs[1].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (reqExnum.test(e.key)) {
    value += e.key;
  }

  if (e.key == "Backspace") {
    value = inputs[1].value;
  }

  if (+value % 4 === 0 && +value % 3 === 0) {
    outputs[1].innerHTML = "YES";
    outputs[1].style.backgroundColor = "green";
    outputs[1].style.padding = "15px";
    outputs[1].style.color = "#fff";
  } else {
    outputs[1].innerHTML = "NO";
    outputs[1].style.backgroundColor = "red";
    outputs[1].style.padding = "15px";
    outputs[1].style.color = "#fff";
  }

  if (inputs[1].value.length === 0) {
    outputs[1].innerHTML = "";
    outputs[1].style.backgroundColor = "#fff";
  }
});

inputs[0].addEventListener("focusout", () => {
  inputs[1].value = "";
  outputs[1].innerHTML = "";
  outputs[1].style.backgroundColor = "#fff";
});

//Q-3

buttons[0].addEventListener("click", () => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (reqExnum.test(inputs[2].value) && reqExnum.test(inputs[3].value)) {
    if (+inputs[2].value > +inputs[3].value) {
      buttons[0].classList.add("d-none");
      outputs[2].innerHTML =
        "First number is " +
        inputs[2].value +
        " & second number is " +
        inputs[3].value +
        " Max is " +
        inputs[2].value;
      outputs[2].style.color = "green";
    } else {
      buttons[0].classList.add("d-none");
      outputs[2].innerHTML =
        "First number is " +
        inputs[2].value +
        " & second number is " +
        inputs[3].value +
        " Max is " +
        inputs[3].value;
      outputs[2].style.color = "green";
    }
  } else {
    buttons[0].classList.add("d-none");
    outputs[2].innerHTML = "Please Enter valid numbers";
    outputs[2].style.color = "red";
  }

  inputs[2].value = "";
  inputs[3].value = "";
});

inputs[2].addEventListener("focus", () => {
  buttons[0].classList.remove("d-none");
  outputs[2].innerHTML = "";
});
inputs[3].addEventListener("focus", () => {
  buttons[0].classList.remove("d-none");
  outputs[2].innerHTML = "";
});

//Q-4
let value3 = "";
inputs[4].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (reqExnum.test(e.key)) {
    value3 += e.key;
  } else {
    outputs[3].innerHTML = "Please Enter a Valied Number";
    outputs[3].style.color = "red";
  }
  if (inputs[4].value.length > 0) {
    if (+value3 > 0) {
      outputs[3].innerHTML = "Positive Num";
      outputs[3].style.color = "#fff";
      outputs[3].style.backgroundColor = "green";
    } else {
      outputs[3].innerHTML = "Negative Num";
      outputs[3].style.color = "#fff";
      outputs[3].style.backgroundColor = "red";
    }
  } else {
    outputs[3].innerHTML = "";
    outputs[3].style.backgroundColor = "#fff";
  }
});

//Q-5
buttons[1].addEventListener("click", () => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (
    reqExnum.test(inputs[5].value) &&
    reqExnum.test(inputs[6].value) &&
    reqExnum.test(inputs[7].value)
  ) {
    if (
      +inputs[5].value > +inputs[6].value &&
      +inputs[5].value > +inputs[7].value
    ) {
      outputs[4].innerHTML = "Max is " + inputs[5].value;
      outputs[4].style.color = "green";
      if (+inputs[6] < +inputs[7]) {
        outputs[5].innerHTML = "Min is " + inputs[6].value;
      } else {
        outputs[5].innerHTML = "Min is " + inputs[7].value;
      }
    } else if (+inputs[6].value > inputs[7].value) {
      outputs[4].innerHTML = "Max is " + inputs[6].value;
      outputs[4].style.color = "green";
      if (+inputs[5] < +inputs[7]) {
        outputs[5].innerHTML = "Min is " + inputs[5].value;
      } else {
        outputs[5].innerHTML = "Min is " + inputs[7].value;
      }
    } else {
      outputs[4].innerHTML = "Max is " + inputs[7].value;
      outputs[4].style.color = "green";
      if (+inputs[5] < +inputs[6]) {
        outputs[5].innerHTML = "Min is " + inputs[5].value;
      } else {
        outputs[5].innerHTML = "Min is " + inputs[6].value;
      }
    }
  } else {
    outputs[4].innerHTML = "Please enter a valid numbers";
    outputs[4].style.color = "red";
    inputs[5].value = "";
    inputs[6].value = "";
    inputs[7].value = "";
    outputs[5].value = "";
  }
  inputs[5].value = "";
  inputs[6].value = "";
  inputs[7].value = "";
});

inputs[5].addEventListener("focus", () => {
  outputs[4].innerHTML = "";
  outputs[5].innerHTML = "";
});

inputs[6].addEventListener("focus", () => {
  outputs[4].innerHTML = "";
  outputs[5].innerHTML = "";
});

inputs[7].addEventListener("focus", () => {
  outputs[4].innerHTML = "";
  outputs[5].innerHTML = "";
});

//Q-6
let value4 = "";
inputs[8].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  value4 += e.key;
  if (e.key == "Backspace") {
    value4 = inputs[8].value;
  }
  if (reqExnum.test(+value4)) {
    console.log("value = ", value4);
    if (+value4 % 2 === 0) {
      outputs[6].innerHTML = "Even Number";
      outputs[6].style.color = "#fff";
      outputs[6].style.backgroundColor = "green";
    } else {
      outputs[6].innerHTML = "Odd Number";
      outputs[6].style.color = "red";
      outputs[6].style.backgroundColor = "yellow";
    }
  } else {
    console.log("false value = ", value4);
    outputs[6].innerHTML = "Please enter a valid number";
    outputs[6].style.color = "red";
  }

  if (inputs[8].value.length === 0) {
    outputs[6].innerHTML = "";
  }
});

inputs[8].addEventListener("focusout", () => {
  outputs[6].innerHTML = "";
  inputs[8].value = "";
});

//Q-7

inputs[9].addEventListener("keyup", (e) => {
  let regLet = /^[a-zA-Z]$/;
  let vowel = ["a", "e", "i", "o", "u"];

  if (inputs[9].value.length > 1) {
    outputs[7].innerHTML = "Please enter Single character only";
    outputs[7].style.color = "red";
  } else {
    if (regLet.test(e.key)) {
      if (vowel.includes(e.key.toLowerCase())) {
        outputs[7].innerHTML = "vowel";
        outputs[7].style.color = "green";
      } else {
        outputs[7].innerHTML = "Consonant";
        outputs[7].style.color = "orange";
      }
    } else {
      outputs[7].innerHTML = "No number accepted";
      outputs[7].style.color = "red";
    }
  }

  if (e.key == "Backspace") {
    outputs[7].innerHTML = "";
  }
});
inputs[9].addEventListener("focusout", () => {
  outputs[7].innerHTML = "";
  inputs[9].value = "";
});

//Q-8
inputs[10].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (!reqExnum.test(e.key)) {
    outputs[8].innerHTML = "Please enter only numbers";
    outputs[8].style.color = "red";
  } else {
    outputs[8].innerHTML = "";
  }
  if (e.key == "Backspace") {
    outputs[8].innerHTML = "";
    inputs[10].value = "";
  }
});
buttons[2].addEventListener("click", () => {
  let value = [];
  if (inputs[10].value.length === 0) {
    outputs[8].innerHTML = "Please enter value first";
    outputs[8].style.color = "red";
  } else {
    outputs[8].innerHTML = "";
    for (let i = 1; i <= +inputs[10].value; i++) {
      console.log(i);
      value.push(i);
      console.log(value);
    }
    outputs[8].innerHTML = value;
    outputs[8].style.color = "green";
    inputs[10].value = "";
  }
});

inputs[10].addEventListener("focus", () => {
  outputs[8].innerHTML = "";
});

//Q-9
inputs[11].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (!reqExnum.test(e.key)) {
    outputs[9].innerHTML = "Please enter only numbers";
    outputs[9].style.color = "red";
  } else {
    outputs[9].innerHTML = "";
  }
  if (e.key == "Backspace") {
    outputs[9].innerHTML = "";
    inputs[11].value = "";
  }
});
buttons[3].addEventListener("click", () => {
  let value = [];
  if (inputs[11].value.length === 0) {
    outputs[9].innerHTML = "Please enter value first";
    outputs[9].style.color = "red";
  } else {
    outputs[9].innerHTML = "";
    for (let i = 1; i <= 12; i++) {
      value.push(+inputs[11].value * i);
      console.log(value);
    }
    outputs[9].innerHTML = value;
    outputs[9].style.color = "green";
    inputs[11].value = "";
  }
});

inputs[11].addEventListener("focus", () => {
  outputs[9].innerHTML = "";
});

//10

inputs[12].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (!reqExnum.test(e.key)) {
    outputs[10].innerHTML = "Please enter only numbers";
    outputs[10].style.color = "red";
  } else {
    outputs[10].innerHTML = "";
  }
  if (e.key == "Backspace") {
    outputs[10].innerHTML = "";
    inputs[12].value = "";
  }
});
buttons[4].addEventListener("click", () => {
  let value = [];
  if (inputs[12].value.length === 0) {
    outputs[10].innerHTML = "Please enter value first";
    outputs[10].style.color = "red";
  } else {
    outputs[10].innerHTML = "";
    for (let i = 1; i <= +inputs[12].value; i++) {
      if (i % 2 === 0) {
        value.push(i);
      }
    }
    outputs[10].innerHTML = value;
    outputs[10].style.color = "green";
    inputs[12].value = "";
  }
});

inputs[12].addEventListener("focus", () => {
  outputs[10].innerHTML = "";
});

//Q-11
inputs[13].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (!reqExnum.test(e.key)) {
    outputs[11].innerHTML = "Please enter only numbers";
    outputs[11].style.color = "red";
  } else {
    outputs[11].innerHTML = "";
  }
  if (e.key == "Backspace") {
    outputs[11].innerHTML = "";
    inputs[13].value = "";
  }
});
inputs[14].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (!reqExnum.test(e.key)) {
    outputs[11].innerHTML = "Please enter only numbers";
    outputs[11].style.color = "red";
  } else {
    outputs[11].innerHTML = "";
  }
  if (e.key == "Backspace") {
    outputs[11].innerHTML = "";
    inputs[14].value = "";
  }
});

buttons[5].addEventListener("click", () => {
  let value = 1;
  if (inputs[13].value.length === 0 || inputs[14].value.length === 0) {
    outputs[11].innerHTML = "Please enter value first";
    outputs[11].style.color = "red";
  } else {
    outputs[11].innerHTML = "";
    for (let i = 1; i <= +inputs[14].value; i++) {
      value = value * +inputs[13].value;
    }
    outputs[11].innerHTML = value;
    outputs[11].style.color = "green";
    inputs[13].value = "";
    inputs[14].value = "";
  }
});

inputs[13].addEventListener("focus", () => {
  outputs[11].innerHTML = "";
});

inputs[14].addEventListener("focus", () => {
  outputs[11].innerHTML = "";
});

//Q-12
let numInputs = document.querySelectorAll(".q12");
buttons[6].addEventListener("click", () => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  let total = 0;
  let av = 1;
  let pre = 1;
  let numbers = [];
  numInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      outputs[12].innerHTML = "";
    });

    if (
      input.value.length > 0 &&
      reqExnum.test(input.value) &&
      input.value <= 100
    ) {
      total += +input.value;
      av = total / 5;
      pre = (total / 500) * 100;
      numbers.push(input.value);
    } else {
      outputs[12].innerHTML = "Please enter a valid number";
      input.value = "";
    }
  });
  if (numbers.length === 5) {
    outputs[12].innerHTML = `Total = ${total} <br> Avg = ${av} <br> Percentage = ${pre}%`;
    numInputs.forEach((input) => [(input.value = "")]);
  } else {
    outputs[12].innerHTML = "Please enter a valid number";
  }
});

//Q-13
inputs[20].addEventListener("keyup", (e) => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  let month31 = [1, 3, 5, 7, 8, 10, 12];
  let month30 = [4, 6, 9, 11];
  let month = "";
  if (reqExnum.test(e.key)) {
    month += e.key;
    if (+inputs[20].value > 12) {
      outputs[13].innerHTML = "We have only 12 Month";
      outputs[13].style.color = "red";
    } else {
      outputs[13].innerHTML = "";
      if (month30.includes(+inputs[20].value)) {
        outputs[13].innerHTML = "Days in month 30";
        outputs[13].style.color = "green";
      } else if (month31.includes(+inputs[20].value)) {
        outputs[13].innerHTML = "Days in month 31";
        outputs[13].style.color = "orange";
      } else {
        outputs[13].innerHTML = "Days in month 28 or 29";
        outputs[13].style.color = "#c2c";
      }
    }
  } else {
    outputs[13].innerHTML = "Please enter number only";
    outputs[13].style.color = "red";
  }

  if (e.key == "Backspace") {
    outputs[13].innerHTML = "";
    inputs[20].value = "";
  }
});

//Q-14
let marksinput = document.querySelectorAll(".q14");
buttons[7].addEventListener("click", () => {
  let reqExnum = /^(\d+$|-\d+$|-)/;
  let marks = [];
  let total = 0;
  marksinput.forEach((mark) => {
    if (reqExnum.test(mark.value) && +mark.value <= 100) {
      total = total + +mark.value;
      marks.push(mark.value);
    } else {
      console.log(mark.value.length);
      if (!reqExnum.test(mark.value)) {
        outputs[14].innerHTML = "Please enter marks in numbers";
        outputs[14].style.color = "red";
        mark.value = "";
      } else if (+mark.value > 100) {
        outputs[14].innerHTML = "Max value for mark is 100";
        outputs[14].style.color = "red";
        mark.value = "";
      } else {
        outputs[14].innerHTML = "please check values again";
        outputs[14].style.color = "red";
        mark.value = "";
      }
    }
    let grade = (total / 500) * 100;
    if (marks.length === 5) {
      if (grade >= 90) {
        outputs[14].innerHTML = `grade = ${grade}% <br> Grad A`;
        outputs[14].style.color = "green";
      } else if (grade >= 80) {
        outputs[14].innerHTML = `grade = ${grade}% <br> Grad B`;
        outputs[14].style.color = "green";
      } else if (grade >= 70) {
        outputs[14].innerHTML = `grade = ${grade}% <br> Grad C`;
        outputs[14].style.color = "green";
      } else if (grade >= 60) {
        outputs[14].innerHTML = `grade = ${grade}% <br> Grad D`;
        outputs[14].style.color = "green";
      } else if (grade >= 40) {
        outputs[14].innerHTML = `grade = ${grade}% <br> Grad E`;
        outputs[14].style.color = "green";
      } else {
        outputs[14].innerHTML = `grade = ${grade}% <br> Grad F`;
        outputs[14].style.color = "green";
      }
      marksinput.forEach((input) => {
        input.value = "";
      });
    }
  });
});

//switch case questions 
let inp = document.querySelector("#single-input")
let inp2 = document.querySelector("#double-input")
let answers = document.querySelector("#answers")



//Q15
let btn15 = document.getElementById("btn-q15");

btn15.addEventListener("click",()=>{
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (inp.value.length !== 0){
    if(reqExnum.test(inp.value)){
      if(+inp.value <12){
        switch (+inp.value) {
            case 1:
            case 3:
            case 5: 
            case 7:
            case 8:
            case 10:
            case 12:
              answers.textContent = "Total No of days 31"
              break;
            case 4:
            case 6:
            case 9:
            case 11:
              answers.textContent = "Total No of days 30"
              break;
            case 2:
              answers.textContent = "Total No of days 28 or 29"
              break;
            default:
              answers.textContent = "Please input number from 1 to 12"
              break;
        }
      }else{
        answers.textContent = "We have only 12 month"
      }
    }else{
      answers.textContent = "Sorry we accept only numbers"  
    }
  }else{
    answers.textContent = "Please Enter a number"
  }
  inp.value = "";
})



//Q-16
let btn16 = document.getElementById("btn-q16")
btn16.addEventListener("click",()=>{
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (inp.value.length !== 0){
    if(!reqExnum.test(inp.value)){
      if(inp.value.length === 1 ){
        switch(inp.value.toLowerCase()){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
              answers.textContent = "Vowel";
              break;
            default:
              answers.textContent = "consonant";
              break;
        }
    }else{
      answers.textContent = "Please enter single letter only"
    }
  }else{
    answers.textContent = "Pleas Enter letter only"
  }
 }else{
  answers.textContent = "Please enter a charachter"
 }
 inp.value = ""
})

//Q-17
let btn17 = document.getElementById("btn-q17")
btn17.addEventListener("click",()=>{
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (inp.value.length !== 0 && inp2.value.length !== 0 ){
    if(reqExnum.test(inp.value) && reqExnum.test(inp2.value)){
      switch(true){
        case (+inp.value === +inp2.value):
          answers.textContent = "Equal"
          break;
        case (+inp.value > +inp2.value):
          answers.textContent = `Max: ${inp.value} & Min: ${inp2.value}`;
          break;
        default:
          answers.textContent = `Max: ${inp2.value} & Min: ${inp.value}`
          break;
      }
    }else{
      answers.textContent = "Sorry we accept only numbers"  
    }
  }else{
    answers.textContent = "Please Enter a number"
  }
  inp.value = "";
  inp2.value = "";
})

//Q-18
let btn18 = document.getElementById("btn-q18")
btn18.addEventListener("click",()=>{
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (inp.value.length !== 0){
    if(reqExnum.test(inp.value)){
      switch(true){
        case (+inp.value === 0):
          answers.textContent = "Zero"
          break;
        case (+inp.value%2 == 0):
          answers.textContent = "Even";
          break;
        case (+inp.value%2 !== 0):
          answers.textContent = "Odd";
          break;
        default:
          answers.textContent = "No more avail values"
          break;
      }
    }else{
      answers.textContent = "Sorry we accept only numbers"  
    }
  }else{
    answers.textContent = "Please Enter a number"
  }
  inp.value = "";
})

//Q-19
let btn19 = document.getElementById("btn-q19")
btn19.addEventListener("click",()=>{
  let reqExnum = /^(\d+$|-\d+$|-)/;
  if (inp.value.length !== 0){
    if(reqExnum.test(inp.value)){
      switch(true){
        case (+inp.value === 0):
          answers.textContent = "Zero"
          break;
        case (+inp.value > 0):
          answers.textContent = "Positive";
          break;
        case (+inp.value < 0):
          answers.textContent = "Negative";
          break;
        default:
          answers.textContent = "No more avail values"
          break;
      }
    }else{
      answers.textContent = "Sorry we accept only numbers"  
    }
  }else{
    answers.textContent = "Please Enter a number"
  }
  inp.value = "";
})


//Q-20
let cal = document.querySelectorAll(".cal")

cal.forEach(btn=>{
  btn.addEventListener('click',()=>{
    let reqExnum = /^(\d+$|-\d+$|-)/;
    let result = 0
    if (inp.value.length !== 0 && inp2.value.length !== 0 ){
      if(reqExnum.test(inp.value) && reqExnum.test(inp2.value)){
        switch(true){
          case ( btn.value === "+"):
            result = +inp.value + +inp2.value
            answers.textContent = `Result = ${result}`
            break;
          case (btn.value === "-"):
            result = +inp.value - +inp2.value
            answers.textContent = `Result = ${result}`
            break;
          case (btn.value === "*"):
              result = +inp.value * +inp2.value
              answers.textContent = `Result = ${result}`
              break;
          case (btn.value === "/"):
              result = +inp.value / +inp2.value
              answers.textContent = `Result = ${result}`
              break;
          default:
            answers.textContent = `operation is not avail`
            break;
        }
      }else{
        answers.textContent = "Sorry we accept only numbers"  
      }
    }else{
      answers.textContent = "Please Enter a number"
    }
    inp.value = "";
    inp2.value = "";
})})


//question selection
let title = document.querySelector(".answer-title")
let questions = document.querySelectorAll(".questions")
let cover = document.querySelectorAll(".show")
let chkAnswer = document.querySelectorAll(".chk-answer")
let exit = document.querySelector("#exit")

questions.forEach(question=>{
  question.addEventListener("click",(e)=>{
    e.preventDefault()
    if(question.classList.contains("single")){
      if(question.classList.contains("alph")){
        title.textContent = "We accept only charachters"
      }else{
        title.textContent = "We accept only numbers"
      }
      cover.forEach(div=>{
        div.classList.remove("d-none")
      })
      inp.classList.remove("d-none")
      chkAnswer[e.target.attributes.data.value].classList.remove("d-none")

    }else if (question.classList.contains("double")){
      cover.forEach(div=>{
        div.classList.remove("d-none")
      })
      inp.classList.remove("d-none")
      inp2.classList.remove("d-none")
      chkAnswer[e.target.attributes.data.value].classList.remove("d-none")
    }else{
      cover.forEach(div=>{
        div.classList.remove("d-none")
      })
      chkAnswer[e.target.attributes.data.value].classList.remove("d-none")
      inp.classList.remove("d-none")
      inp2.classList.remove("d-none")
    }
  })
})

cover[0].addEventListener("click",()=>{
  cover.forEach(div=>{
    div.classList.add("d-none")
  })
  chkAnswer.forEach(chk=>{
    chk.classList.add("d-none")
  })
  inp.classList.add("d-none")
  inp2.classList.add("d-none")
})

exit.addEventListener("click",(e)=>{
  e.preventDefault()
  cover.forEach(div=>{
    div.classList.add("d-none")
  })
  chkAnswer.forEach(chk=>{
    chk.classList.add("d-none")
  })
  inp.classList.add("d-none")
  inp2.classList.add("d-none")
})