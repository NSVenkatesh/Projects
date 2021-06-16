// function input(val){
//     document.getElementById('result').value+=val;
// }
// function solve(){
//     let x=document.getElementById('result').value;
//     let y=eval(x);
//     document.getElementById('result').value=y;
// }
// function clr(){
//     document.getElementById('result').value="";
// }
function clr(){
    $('#result').val("");
}
function del(){
    a=$('#result').val();
    b=a.slice(0,length-1);
    $("#result").val(b);
}
function input(x){
    var y=$("#result").val();
    $("#result").val(y+x);
}
function operator(y){
    x=$("#result").val();
    $("#result").val("");
    o=y;
}
function solve(){
    y=$("#result").val();
    if(o=="+"){
        $('#result').val(parseFloat(x)+parseFloat(y));
    }
    else if(o=="-"){
        $('#result').val(parseFloat(x)-parseFloat(y));
    }
    else if(o=="*"){
        $('#result').val(parseFloat(x)*parseFloat(y));
    }
    else if(o=="/"){
        $('#result').val(parseFloat(x)/parseFloat(y));
    }
    else if(o=="%"){
        $('#result').val(parseFloat(x)%parseFloat(y));
    }
    else if(o=="**"){
        $('#result').val(parseFloat(x)**parseFloat(y));
    }
}