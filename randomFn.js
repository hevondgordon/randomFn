/*SIMPLE FUNCTION FOR FORMATTING 
STRINGS TO LOOK LIKE CURRENCY*/
var curr="";
function commas(x){
    if(x.length<=3){
        return x+curr;
    }
    else{
        curr=curr+","+x.substring(x.length-3,x.length);
        return commas(x.substring(0,x.length-3));
    }
    
}