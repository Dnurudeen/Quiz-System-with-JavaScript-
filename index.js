function getInfo(){
    var ques1 = document.form.question1.value;
    var ques2 = document.form.question2.value;
    var ques3 = document.form.question3.value;

    var quescount = 0;
    var scoreObtainable = 3;

    if(ques1 == "1a"){
        quescount++;
    }
    if (ques2 == "2c"){
        quescount++;
    }
    if (ques3 == "3b"){
        quescount++;
    }

    var gradeMark = (quescount / scoreObtainable) * 100;

    document.write ("<b>Total Score: </b>" + quescount + "<br>");
    document.write ("<b>Grade: </b>" + gradeMark.toFixed(1) + "% <br>");
    
    if (quescount <= 1){
        document.write ("<b>Remark: </b>" + "<p style='color: red;'>This is a very bad result, try to do better!</p>");
    }else if(quescount <= 2){
        document.write ("<b>Remark: </b>" + "<p style='color: blue;'>Fair enough! Try again.</p>");
    }else if(quescount <= 3){
        document.write ("<b>Remark: </b>" + "<p style='color: green;'>Excellent Performace...</p>");
    }
}
