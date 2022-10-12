



const calculate = (choice)=>{
    let weight = parseInt(document.querySelector('#weight_input').value),
    height0 = parseInt(document.querySelector('#height_input').value),
    point = parseInt(document.querySelector("#point_input").value),
    point_id = document.querySelector('#point_input'),
    result = document.querySelector(".result_show"),
    unit_name2 = document.querySelector('.unit_name2'),
    uspan1 = document.querySelector('.uspan1'),
    uspan2 = document.querySelector('.uspan2');


    if(choice == "standard"){
        point_id.setAttribute('max',"12");
        unit_name2.textContent = "Pounds";
        uspan1.textContent = "Feet";
        uspan2.textContent = "Inches";
        let height =(((height0*12)+point)*0.0254);
        weight = (weight*0.45359237);
        let calcu = ((weight)/(height*height));
        result.textContent = calcu;
        comment(calcu);
    }

    else{
        unit_name2.textContent = "Kg's";
        uspan1.textContent = "Meter";
        uspan2.textContent = "CM";
        let height = height0 + (point/100);
        console.log(height)
        let calcu = weight/(height*height);
        result.textContent = calcu;
        comment(calcu);
    }
}


const comment = (com)=>{
    let compara = document.querySelector('.com_para');


    if(com <18.5){
        compara.textContent = "Owh! You are Underweight sweety!! Have some extra meal!";
    }
    else if(com >18.5 && com<24.9){
        compara.textContent = "Wow! You got a good health folk! You have a Healthy weight!";
    }

    else if(com>24.9 && com<29.9){
        compara.textContent = "Aah! You have a little extra weight ! I don't wanna say Overweight! I know you can have a good diet and control over yourself!";
    }

    else{
        compara.textContent = "Hey! You have a obesity problem! Before I yell at you, consult a doctor!!";
    }
}


const choice = ()=>{
    let choice = document.querySelector("#unit_choice").value;

    if(choice == "standard"){
        calculate("standard");
    }

    else{
        calculate("meter");
    }

}


// setInterval(choice,1000);