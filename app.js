let btn = document.querySelector(".btn")
let input = document.querySelector("input")
let select = document.querySelector("select");
let result = document.querySelector(".result");

// let a = document.createElement("li")
// a.innerText = inp_1.value + " - " + "Rs " + inp_2.value
// expense_list.appendChild(a)
// total.innerText = parseFloat(total.innerText)+parseFloat(inp_2.value);
// console.log(total)
// inp_1.value = ""
// inp_2.value = ""


// function check_oF(){
//     f = (input.value*9)/5+32
//     console.log(f,"fahrenheit");
// }
function check_oC(){
      if(select.value == "oF"){
        let a = document.createElement("li")
        f = (input.value*9)/5+32
        a.innerText =  "The fahrenheit = "+f
        // a.write(f,"fahrenheit");    
        result.appendChild(a)
    }else{
        let b = document.createElement("li")
        c = (input.value-32) * 5/9 
       b.innerText = "The celcius = "+ c
       console.log(c,"degree celsius");
       result.appendChild(b)
       b = innerText = ""
    }
    
}


btn.addEventListener("click",()=>{
  check_oC()
  input.value=""
})
