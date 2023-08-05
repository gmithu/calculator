
var screen = document.getElementById ('screen');

function btns(value){
    screen.value += value
};

function cls(value){
    screen.value = ""
}

function  result(){
    var result = eval(screen.value);
    screen.value =(result)
}
                                                                                                                                                                                                                                                                                    
function del(){
    screen.value = screen.value.slice(0,-1);
}
