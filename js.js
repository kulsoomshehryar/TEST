function Celsius(){
  let  hello = document.getElementById("num1").value;
  document.getElementById("result").innerHTML =(5/9) * (Number(hello) -32)
}
function Fah(){
    let  hello = document.getElementById("num2").value;
    document.getElementById("result").innerHTML =(9/5) * (Number(hello) -32)
  }