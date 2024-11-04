const form= document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const Weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`GIVE A VALID HEIGHT ${height}`;
    }
    else if(Weight==='' || Weight<0 || isNaN(Weight)){
        result.innerHTML=`GIVE A VALID WEIGHT ${Weight}`;
    }
    else{
        const bmi=(Weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6)
            result.innerHTML=`Under Weight${bmi}`;
        else if(bmi>=18.6 && bmi<24.9)
            result.innerHTML=`Normal Weight${bmi}`;
        if(bmi>24.9)
            result.innerHTML=`over Weight${bmi}`;
    }
});