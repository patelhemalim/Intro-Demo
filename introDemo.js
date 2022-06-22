let harryAttack =25;
let lordVAttack =35;

if (harryAttack>lordVAttack){
    console.log("Harry has a better attack than lord v.")
}else if (lordVAttack>harryAttack){
console.log("lordVAttack has a better attack than harry ")
}else{
    console.log("they have same score")
}

let harryHealth = 100;
let harryDefence =0;

if(harryHealth<= lordVAttack){
    console.log("Harry has been slain")
}else {
    harryHealth -= lordVAttack;
    console.log(`Harry's health is down ${harryHealth}`)
}


harryDefence += 25;
if(harryHealth<=(lordVAttack-harryDefence)){

    console.log("harry has been slain")
}else {
    harryHealth-=(lordVAttack-harryDefence)
    console.log(`Harry's health is down ${harryHealth}`)
}

let healthKit =50;
if ((harryHealth+healthKit)>=100){
    harryHealth=100;
}else {
    harryHealth+=healthKit;
}console.log(`Harry got some help.Health is now ${harryHealth}`)



let coinTossHeads=false;
if(coinTossHeads!==false){
    console.log("the fight continues")
}else {
    console.log("harry is allowede to run away")
}
 for(let i=0;i<11;i++){
    if(harryHealth <=0){
    console.log("Harry has been slain")
}else {
    harryHealth-=(lordVAttack - harryDefence)
    console.log(`Harry's health is ${harryHealth}`)
}
 }

while (harryHealth>0){
    harryHealth-=(lordVAttack-harryDefence)
        console.log(`Harry's health is $(harryHaelth)`);
        if (harryHealth<=0){
            console.log("Harry has been slain")
        }
}














