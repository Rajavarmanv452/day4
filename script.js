//que2 & 3
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    for (var i=0;i<res.length;i++){
        console.log("country :"+ res[i].name,"capital :"+ res[i].capital,"flags :"+ res[i].flags.png)
    }
};
//que 1
var obj1 ={name:"person1" ,age:5}
var obj2 ={age:5 ,name:"person1"}
if (obj1==obj2) {
    console.log("condition: true");
    
} else {
    console.log("condition: false");
}
