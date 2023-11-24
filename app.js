function getComputerChoice(){
  var x=Math.random();
  if(x<=0.33)
    return 1;
  else if (x<=0.66)
    return 2;
    else    
        return 3;
}
function getUserChoice(x){
    if(x=="rock")
      return 1;
    else if (x=="paper")
      return 2;
      else    
          return 3;
  }
  let xselection = prompt("Please enter your selection:");
let selection = xselection.toLowerCase();
console.log(selection)
var x=getUserChoice(selection);
var y=getComputerChoice();
function playround(x,y){
    if(y==1)
        console.log("Computer chose rock")
    if(y==2)
        console.log("Computer chose paper")
    if(y==3)
        console.log("Computer chose scissors")
    if(x==y)
    {
        console.log("draw")

    }
    if(x==1)
    {
        if(y==2)
            console.log("you lost")
        else
            console.log("you won")
    }
    if(x==2)
    {
        if(y==3)
            console.log("you lost")
        else
            console.log("you won")
    }
    if(x==3)
    {
        if(y==2)
            console.log("you won")
        else
            console.log("you lost")
    }
}
playround(x,y)


