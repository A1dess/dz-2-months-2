var projekts = [ 'li', 'ol', 'div', 'ol', 'h1', 'p', 'div', 'ol', 'p', 'li', 'div', 'div']
var h1 = 0;
var div = 0;
var ol = 0;
var li = 0;
var p = 0;
for(var i = 0; i < projekts.length; i++){
if(projekts[i]=='div'){
    div= div +1
}
else if(projekts[i]=='h1'){
    h1 = h1 +1
}
else if(projekts[i]=="li")
{
    li= li+1
}
else if(projekts[i]=='ol'){
    ol = ol +1
}
else if(projekts[i]=='p'){
    p = p +1
}
}

const obj = {
li :li,
div : div,
ol : ol,
h1 : h1,
p: p
}
console.log(obj);



const sorter = Object.entries(obj)
    .sort(([,a],[,b]) => b - a )
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
   
           
console.log(sorter);
