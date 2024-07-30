const select1=document.getElementById('currency-one');
const select2=document.getElementById('currency-two');
const input1=document.getElementById('js-input1');
const input2=document.getElementById('js-input2');
const swapbtn=document.getElementById('swap');
let text=document.getElementById('text');


function cal(){
   const currency1=select1.value;
   const currency2=select2.value;
 
   fetch(`https://v6.exchangerate-api.com/v6/af87b1b099ec2b97f78bccec/latest/${currency1}`)
   .then(res => res.json( ))
   .then(data=>{
    const rate=data.conversion_rates[currency2];
    text.innerText=` 1 ${currency1} = ${rate} ${currency2}`;
    input2.value=(input1.value * rate).toFixed(2);
   })

}

select1.addEventListener('change',cal);
select2.addEventListener('change',cal);
input1.addEventListener('input',cal);
input2.addEventListener('input',cal);
swapbtn.addEventListener('click',()=>{
    const temp=select1.value;
    select1.value=select2.value;
    select2.value=temp;
    cal();
})

