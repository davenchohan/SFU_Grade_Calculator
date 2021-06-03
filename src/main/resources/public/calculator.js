
document.getElementById("addActivity5").style.display = "none";
document.getElementById("addActivity6").style.display = "none";
document.getElementById("addActivity7").style.display = "none";
document.getElementById("addActivity8").style.display = "none";
function test1(){
    numGrades = 8;
    percent1 = document.getElementById("mark1").value/document.getElementById("total1").value;
    if(isNaN(percent1)||document.getElementById("total1").value<=0||percent1<0){
        document.getElementById("displayP1").innerHTML = null;
        percent1=0;
        tempPercent1 = null;
        numGrades--; 
    }
    else{
        document.getElementById("displayP1").innerHTML = percent1.toFixed(2)*100 + "%";
        tempPercent1 = 1;
    } 
    percent2 = document.getElementById("mark2").value/document.getElementById("total2").value;
    if(isNaN(percent2)||document.getElementById("total2").value<=0||percent2<0){
        document.getElementById("displayP2").innerHTML = null;
        percent2=0;
        tempPercent2 = null;
        numGrades--;  
    }
    else{
        document.getElementById("displayP2").innerHTML = percent2.toFixed(2)*100 + "%";
        tempPercent2 = 1;
    }  
    percent3 = document.getElementById("mark3").value/document.getElementById("total3").value;
    if(isNaN(percent3)||document.getElementById("total3").value<=0||percent3<0){
        document.getElementById("displayP3").innerHTML = null;
        percent3=0;
        tempPercent3 = null;
        numGrades--;  
    }
    else{
        document.getElementById("displayP3").innerHTML = percent3.toFixed(2)*100 + "%";
        tempPercent3 = 1;
    } 
    percent4 = document.getElementById("mark4").value/document.getElementById("total4").value;
    if(isNaN(percent4)||document.getElementById("total4").value<=0||percent4<0){
        document.getElementById("displayP4").innerHTML = null;
        percent4=0;
        tempPercent4 = null;
        numGrades--;  
    }
    else{
        document.getElementById("displayP4").innerHTML = percent4.toFixed(2)*100 + "%";
        tempPercent4 = 1;
    } 
    percent5 = document.getElementById("mark5").value/document.getElementById("total5").value;
    if(isNaN(percent5)||document.getElementById("total5").value<=0||percent5<0){
        document.getElementById("displayP5").innerHTML = null;
        percent5=0;
        tempPercent5 = null;
        numGrades--; 
    }
    else{
        document.getElementById("displayP5").innerHTML = percent5.toFixed(2)*100 + "%";
        tempPercent5 = 1;
    } 
    percent6 = document.getElementById("mark6").value/document.getElementById("total6").value;
    if(isNaN(percent6)||document.getElementById("total6").value<=0||percent6<0){
        document.getElementById("displayP6").innerHTML = null;
        percent6=0;
        tempPercent6 = null;
        numGrades--;  
    }
    else{
        document.getElementById("displayP6").innerHTML = percent6.toFixed(2)*100 + "%";
        tempPercent6 = 1;
    }  
    percent7 = document.getElementById("mark7").value/document.getElementById("total7").value;
    if(isNaN(percent7)||document.getElementById("total7").value<=0||percent7<0){
        document.getElementById("displayP7").innerHTML = null;
        percent7=0;
        tempPercent7 = null;
        numGrades--;  
    }
    else{
        document.getElementById("displayP7").innerHTML = percent7.toFixed(2)*100 + "%";
        tempPercent7 = 7;
    } 
    percent8 = document.getElementById("mark8").value/document.getElementById("total8").value;
    if(isNaN(percent8)||document.getElementById("total8").value<=0||percent8<0){
        document.getElementById("displayP8").innerHTML = null;
        percent8=0;
        tempPercent8 = null;
        numGrades--;  
    }
    else{
        document.getElementById("displayP8").innerHTML = percent8.toFixed(2)*100 + "%";
        tempPercent8 = 8;
    } 
}

document.getElementById("meanBut").addEventListener("click", mean);

function mean(){
    var mean1 = (percent1 + percent2 + percent3 + percent4 + percent5 + percent6 + percent7 + percent8)/numGrades;
    if(isNaN(mean1)){
        document.getElementById("finalResult").style.display = "none";
    }
    else{
        document.getElementById("finalResult").innerHTML = mean1.toFixed(3) + " or " + mean1.toFixed(3)*100 + "%" + " is the mean.";
        document.getElementById("finalResult").style.display = "block";
    }
}

document.getElementById("weightBut").addEventListener("click", weight);

function weight(){
    weightTemp1 = document.getElementById("weight1").value
    weightTemp2 = document.getElementById("weight2").value
    weightTemp3 = document.getElementById("weight3").value
    weightTemp4 = document.getElementById("weight4").value
    weightTemp5 = document.getElementById("weight5").value
    weightTemp6 = document.getElementById("weight6").value
    weightTemp7 = document.getElementById("weight7").value
    weightTemp8 = document.getElementById("weight8").value
    if(isNaN(weightTemp1)||(tempPercent1 == null)){
        weightTemp1=0;
    } 
    else{
        weightTemp1 = weightTemp1*1
    }
    if(isNaN(weightTemp2)||(tempPercent2 == null)){
        weightTemp2=0;
    } 
    else{
        weightTemp2 = weightTemp2*1
    }
    if(isNaN(weightTemp3)||(tempPercent3 == null)){
        weightTemp3=0;
    } 
    else{
        weightTemp3 = weightTemp3*1
    }
    if(isNaN(weightTemp4)||(tempPercent4 == null)){
        weightTemp4=0;
    } 
    else{
        weightTemp4 = weightTemp4*1
    }
    if(isNaN(weightTemp5)||(tempPercent5 == null)){
        weightTemp5=0;
    } 
    else{
        weightTemp5 = weightTemp5*1
    }
    if(isNaN(weightTemp6)||(tempPercent6 == null)){
        weightTemp6=0;
    } 
    else{
        weightTemp6 = weightTemp6*1
    }
    if(isNaN(weightTemp7)||(tempPercent7 == null)){
        weightTemp7=0;
    } 
    else{
        weightTemp7 = weightTemp7*1
    }
    if(isNaN(weightTemp8)||(tempPercent8 == null)){
        weightTemp8=0;
    } 
    else{
        weightTemp8 = weightTemp8*1
    }
    var weightTotal = ((percent1*weightTemp1)+(percent2*weightTemp2)+(percent3*weightTemp3)+(percent4*weightTemp4)+(percent5*weightTemp5)+(percent6*weightTemp6)+(percent7*weightTemp7)+(percent8*weightTemp8));
    var finalWeight = weightTotal/(weightTemp1+weightTemp2+weightTemp3+weightTemp4+weightTemp5+weightTemp6+weightTemp7+weightTemp8);

    if(isNaN(finalWeight)){
        document.getElementById("finalResult").style.display = "none";
    }
    else{
        document.getElementById("finalResult").innerHTML = finalWeight.toFixed(3) + " or " + finalWeight.toFixed(3)*100 + "%" + " is the weighted average.";
        document.getElementById("finalResult").style.display = "block";
    }
}

document.getElementById("addRows").addEventListener("click", rows);
function rows(){
    document.getElementById("addActivity5").style.display = "table-row";
    document.getElementById("addActivity6").style.display = "table-row";
    document.getElementById("addActivity7").style.display = "table-row";
    document.getElementById("addActivity8").style.display = "table-row";
}       

document.getElementById("resetRows").addEventListener("click", resetRows);
function resetRows(){
    var i;
    for(i = 1; i < 9; i++){
        document.getElementById("mark"+i).value = "";
        document.getElementById("weight"+i).value = "";
        document.getElementById("total"+i).value = "";
        document.getElementById("displayP"+i).innerHTML = null;
    }
    percent1 = null;
    percent2 = null;
    percent3 = null;
    percent4 = null;
    percent5 = null;
    percent6 = null;
    percent7 = null;
    percent8 = null;
    numGrades = 0;
    document.getElementById("addActivity5").style.display = "none";
    document.getElementById("addActivity6").style.display = "none";
    document.getElementById("addActivity7").style.display = "none";
    document.getElementById("addActivity8").style.display = "none";
    document.getElementById("finalResult").style.display = "none";
}
