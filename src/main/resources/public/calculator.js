
function test1(){
    numGrades = 4;
    percent1 = document.getElementById("mark1").value/document.getElementById("total1").value;
    if(isNaN(percent1)||document.getElementById("total1").value<=0){
        document.getElementById("displayP1").innerHTML = null;
        percent1=0;
        numGrades--; 
    }
    else{
        document.getElementById("displayP1").innerHTML = percent1.toFixed(2)*100 + "%";
    } 
    percent2 = document.getElementById("mark2").value/document.getElementById("total2").value;
    if(isNaN(percent2)||document.getElementById("total2").value<=0){
        document.getElementById("displayP2").innerHTML = null;
        percent2=0;
        numGrades--;  
    }
    else{
        document.getElementById("displayP2").innerHTML = percent2.toFixed(2)*100 + "%";
    }  
    percent3 = document.getElementById("mark3").value/document.getElementById("total3").value;
    if(isNaN(percent3)||document.getElementById("total3").value<=0){
        document.getElementById("displayP3").innerHTML = null;
        percent3=0;
        numGrades--;  
    }
    else{
        document.getElementById("displayP3").innerHTML = percent3.toFixed(2)*100 + "%";
    } 
    percent4 = document.getElementById("mark4").value/document.getElementById("total4").value;
    if(isNaN(percent4)||document.getElementById("total4").value<=0){
        document.getElementById("displayP4").innerHTML = null;
        percent4=0;
        numGrades--;  
    }
    else{
        document.getElementById("displayP4").innerHTML = percent4.toFixed(2)*100 + "%";
    } 
}

document.getElementById("meanBut").addEventListener("click", mean);

function mean(){
    var mean1 = (percent1 + percent2 + percent3 + percent4)/numGrades;
    if(isNaN(mean1)){
        document.getElementById("finalResult").innerHTML = "Error"
    }
    else{
        document.getElementById("finalResult").innerHTML = mean1.toFixed(3) + " or " + mean1.toFixed(3)*100 + "%" + " is the mean.";
    }
}

document.getElementById("weightBut").addEventListener("click", weight);

function weight(){
    weightTemp1 = document.getElementById("weight1").value
    weightTemp2 = document.getElementById("weight2").value
    weightTemp3 = document.getElementById("weight3").value
    weightTemp4 = document.getElementById("weight4").value
    if(isNaN(weightTemp1)||(percent1 == 0)){
        weightTemp1=0;
    } 
    else{
        weightTemp1 = weightTemp1*1
    }
    if(isNaN(weightTemp2)||(percent2 == 0)){
        weightTemp2=0;
    } 
    else{
        weightTemp2 = weightTemp2*1
    }
    if(isNaN(weightTemp3)||(percent3 == 0)){
        weightTemp3=0;
    } 
    else{
        weightTemp3 = weightTemp3*1
    }
    if(isNaN(weightTemp4)||(percent4 == 0)){
        weightTemp4=0;
    } 
    else{
        weightTemp4 = weightTemp4*1
    }
    var weightTotal = ((percent1*weightTemp1)+(percent2*weightTemp2)+(percent3*weightTemp3)+(percent4*weightTemp4));
    var finalWeight = weightTotal/(weightTemp1+weightTemp2+weightTemp3+weightTemp4);
    document.getElementById("finalResult").innerHTML = finalWeight.toFixed(3) + " or " + finalWeight.toFixed(3)*100 + "%" + " is the weighted average.";;
}
