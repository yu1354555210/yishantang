adaptation(750);
//适配
function adaptation(size){
    if(document.documentElement.clientWidth>size){
        document.documentElement.style.fontSize=size/26.66666666+'px';
    }else{
        document.documentElement.style.fontSize=document.documentElement.clientWidth/26.66666666+'px';
    }
}
window.onresize = function(){
    adaptation(750);
}
