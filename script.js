//select display value block/element
const display = document.querySelector(".display")

// select button one 
// const first= document.querySelector(".btn-1")
//varible or diaplaying the value

// const buttonTwo= document.querySelector(".btn-2")

const allBtns= document.querySelectorAll(".btn");
// console.log(allBtns);


// const buttonArrs= [first, buttonTwo];


let displayValue='';

// operator list
const operator =["%", "+", "-", "*", "/"]

let lastOperator = ""
//loop over thte button array

const audio = new Audio("./ss.wav");

allBtns.forEach((item)=> {
    
    
    item.addEventListener ('click', ()=> {
        //reset the prank
        display.classList.remove("prank");
        display.style.background="";
        display.style.color="";
        const val= item.innerText;

        if(val==='AC'){
            displayValue="";
            // display.innerText="0.00";
            displayData();
            return;
        }

        if (val === "="){
            const lastChar= displayValue[displayValue.length -1];
            //check if the last digit is operator
          
            if(operator.includes(lastChar)){
                displayValue= displayValue.slice (0, -1);
            }  
            return calculateTotal()
            
        }

            //dont allow more than one operator at once, replace by 
            //last one 

            if(operator.includes(val)){
                lastOperator=val;
                const lastChar= displayValue[displayValue.length -1];
                if(operator.includes(lastChar)){
                    displayValue= displayValue.slice (0, -1);
                }
            }

            if (val === "."){

                if (!displayValue) {
                    displayValue
                    return;
                }
                // const lastChar= displayValue [displayValue.length -1];
                const indexOfLastOperator= displayValue.lastIndexOf(lastOperator);
                const lastNumberSet = displayValue.slice(indexOfLastOperator);

                if(lastNumberSet.includes(".")){
                    return;
                }
            }
            // const result = eval(displayValue);
            // displayValue=result;
            // displayData(result);
            // return;}

            if(!lastOperator && displayValue.includes('.')){
                return;
            }


            
        //     const result = eval(displayValue);
        //     displayValue=result;
        //     displayData(result);
        //     return;

        // }

        if (val === "C") {  
            
           const btnC= displayValue.slice(0, -1 );
            displayValue= btnC;
            displayData(displayValue);
            return;
        }
        displayValue += val;
        display.innerText = displayValue;
        
       
       
    })
})
    
//and display string alue in the display element
const calculateTotal = ()=>{
    const extraValue = randomNum();
    if (extraValue > 0){
        //prank situation
        display.classList.add("prank");
        display.style.background = "red";
        display.style.color = "white";
        
        audio.play();
    }
    const result = eval(displayValue) + extraValue;
    const ttl=result.toString();
    displayData(ttl);
    return;
}
const displayData = (str) => {
    display.innerText = str || "0.00"
}

const randomNum = () => {
    //0-10
    const num = Math.round(Math.random()* 10);
    return num<4 ? num :0;
}

//handle button one - onClick eventListener
// first.addEventListener('click',()=>{
//     //get the value of button clicked
//     const val = first.innerText

//     //update displayValue by adding new value
//     displayValue+=val
//     //displayValue=displayValue + val 

//     //and display string in the display element
//     display.innerText =displayValue
//     console.log('hello')
// })


// buttonTwo.addEventListener('click',()=>{
//     const valTwo = buttonTwo.innerText

//     displayValue += valTwo
//     display.innerText = displayValue
// })


