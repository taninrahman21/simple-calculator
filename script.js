const buttons = Array.from(document.getElementsByClassName("button"));
let result = document.getElementById("display-result");
for (const button of buttons){
  button.addEventListener("click", function(event){
    const buttonText = event.target.innerText;
        if(buttonText === "AC"){
          result.value = "";
        } else if(buttonText === "Del"){
          result.value = result.value.slice(0,-1);
        } else if(buttonText === "="){
        } else if(buttonText === "+/-"){
          result.value = result.value;
        } else if(buttonText === "="){
          try{
            result.value = eval(result.value);
          } catch {
            result.value = "Error";
          }
        } else{
          result.value += buttonText;
        }
  })
}