screen_exp=document.getElementById("expr_screen");
screen_answ=document.getElementById("answer_screen");
btn_clear=document.getElementById("clear");
btn_del=document.getElementById("del");
btn_equals=document.getElementById("equals");
expander=document.getElementById("expander");
div2=document.getElementById("buttonsdiv2");
btns_num=document.querySelectorAll(".num");
btns_op=document.querySelectorAll(".op");


var ANSWER="0"
var EXPRESSION=""

btns_num.forEach(element => {
    element.addEventListener('click', ()=>{
        text=element.innerHTML;
        screen_exp.innerHTML+=text;
    });
});

btns_op.forEach(element => {
    element.addEventListener('click', ()=>{
        text=element.innerHTML;
        screen_exp.innerHTML+=text;
    });
});

btn_clear.addEventListener('click', ()=>{
    screen_exp.innerHTML="";
    screen_answ.innerHTML="";
});
btn_del.addEventListener('click', ()=>{
    screen_exp.innerHTML=(screen_exp.innerHTML).toString().substring(0,screen_exp.innerHTML.toString().length-1);
    screen_answ.innerHTML="";
});
expander.addEventListener('click', ()=>{
    if(div2.style.visibility=="hidden"){
        div2.style.visibility="visible";
        expander.innerHTML=">>";
    }else{
        div2.style.visibility="hidden";
        expander.innerHTML="<<";
    }
});

btn_equals.addEventListener('click', ()=>{
    try {
        ANSWER=eval(screen_exp.innerHTML.replace("x","*").replace("^","**"));
        ANSWER2=ANSWER
        if(isScientific(ANSWER)){
            ANSWER2=scientificToStandardForm(ANSWER);
        }   
        ANSWERW="<span style='font-style: italic;font-size: 15px;Color: #2b2b2b;'>Ans <span/>"+"<span style='font-style: normal;font-size: 28px;Color: rgb(2, 42, 2);'>"+ANSWER2+"<span/>"
        screen_answ.innerHTML=ANSWERW;
        if(ANSWER==undefined){
            ANSWERW=0;
        }
        
    } catch (error) {
        screen_answ.innerHTML="ERROR";
        ANSWERW="";
    }
    
});
function isScientific(answer) {
    if(answer.toString().toUpperCase().indexOf("E")!=-1){
        return true;
    }else{
        return false;
    }
}
function scientificToStandardForm(answer) {
    lengthofstr=answer.toString().length
    index=answer.toString().toUpperCase().indexOf("E")
    df=answer.toString().substring(0,index)
    df=parseFloat(df)
    df=Math.round((df+Number.EPSILON)*100000000)/100000000
    dftens=answer.toString().substring(index+1,lengthofstr)
    result=df+" x "+"10"+"<sup>"+dftens+"<sup/>"
    return result
}
