const BASE_URL = "https://api.frankfurter.app/latest?from=USD&to=INR";  

//getting all target elements------------------------------------------>

const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("button");
const fromcurrCode = document.querySelector(".from select");
const tocurrCode = document.querySelector(".to select");
const mymsg = document.querySelector("#mymsg");

// populate the table-------------------------------------------------->
for(let select of dropdowns){
    for(let codes in countryList){
        let newoption = document.createElement("option");
        newoption.value = codes;
        newoption.innerText=codes;
        if(select.name === 'from' && codes === "USD"){
            newoption.selected = "selected";
        }
        else if(select.name === 'to' && codes === "INR"){
            newoption.selected = "selected"; 
        }
        select.append(newoption);
    }
    
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });   
    
}

// updates exchangerate of api ------------------------------------->
const updateexchangerate = async()=>{
    
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;

    if(amtval==="" || amtval<1){
        amtval = "1";
        amount.value="1";
    }

    const URL = `https://api.frankfurter.app/latest?from=${fromcurrCode.value}&to=${tocurrCode.value}`
    let response = await fetch(URL);
    let data = await response.json();
    let exchange_rate = await data.rates[tocurrCode.value]; 

    let finalamt = amtval*exchange_rate;


    updatemsg(finalamt);
} 

// updates flag images ------------------------------------------------>
const updateflag = (ele)=>{
    let CurrencyCode=ele.value;
    let CountryCode = countryList[CurrencyCode];
    let newSrc = `https://flagsapi.com/${CountryCode}/flat/64.png`
    let img = ele.parentElement.querySelector("img");
    img.src = newSrc;
}


//updating main msg--------------------------------------------------------->
const updatemsg = (final)=>{
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    mymsg.innerText = `${amtval} ${fromcurrCode.value} = ${final} ${tocurrCode.value}`
}


// Eventlisteners on targeting elements------------------------------------->
window.addEventListener("load",()=>{
    updateexchangerate();
    console.log("loading......");
})

button.addEventListener("click",(event)=>{
    event.preventDefault();
    updateexchangerate();

})




