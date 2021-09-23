const initialprice=document.querySelector("#initialprice");
const quantity= document.querySelector("#quantity");
const currentprice= document.querySelector("#currentprice");

const btn= document.querySelector("#btn");
const output= document.querySelector("#output");


function calculate(ip,quan,curr)
{
    if(curr>ip){
        const result= (curr-ip)*quan;
        let  resultbypercent=((curr-ip)*100)/curr;
        resultbypercent= resultbypercent.toFixed(2);
       
        
        output.innerText="The Profit is "+result+" and the Profit percentage is "+resultbypercent;
        output.style.color='#2BFA01 ';
        output.style.borderColor='#2BFA01 ';
    }   
    else if (ip>curr)
    {
        const result= (ip-curr)*quan;
        let resultbypercent=((ip-curr)*100)/curr;
        resultbypercent= resultbypercent.toFixed(2);
       
        
        output.innerText="The Loss is "+result+" and the Loss percentage is "+resultbypercent;
        output.style.color='red';
        output.style.borderColor='red';
    }
    else
    {
        output.innerText="No Loss, No Profit";
        output.style.borderColor='rgb(255, 251, 0)';
    }
    
 
    
    
}






function clickhandler(){
    const ip= initialprice.value;
    const quan= quantity.value; 
    const curr=currentprice.value;

    if((ip&&quan&&curr)==0)
    {
         output.innerText="ENter the all inputs";
        // // console.log("no input");
    }
    else{

        calculate(ip,quan,curr);
    }
    // console.log("inn");
}




btn.addEventListener("click", clickhandler);