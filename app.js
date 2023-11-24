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

function playround(x,y){
    if(y==1)
        console.log("Computer chose rock")
    if(y==2)
        console.log("Computer chose paper")
    if(y==3)
        console.log("Computer chose scissors")
    if(x==y)
    {
        return 0;
    }
    if(x==1)
    {
        if(y==2)
            return 2//lost
        else
            return 1//won
    }
    if(x==2)
    {
        if(y==3)
            return 2;
        else
            return 1;
    }
    if(x==3)
    {
        if(y==2)
            return 1;
        else
            return 2;
    }
}
var p1,p2=0;
function game(){
    let xselection = prompt("Please enter your selection:");
    let selection = xselection.toLowerCase();
    console.log(selection)
    var x=getUserChoice(selection);
    var y=getComputerChoice();
    var ans=playround(x,y)
    if(ans==1)
        p1++;
    else if(ans==2)
        p2++
}  
// for(let i=0;i<3;i++)
// {
//     game()
// }
game()
if(p1>p2)
    console.log("YOU WON TOURNY")
else if(p2>p1)
    console.log("YOU LOST TOURNY")
else    
    console.log("DRAW")



