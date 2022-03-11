/*let button=document.getElementById('spanbutton');
let button1=document.getElementById('button1');
console.log(button.innerHTML);
button1.addEventListener('click',function(){
if(button.innerHTML=="Work"){
    button.style.backgroundColor="purple";
    console.log("he");
}
});
console.log('hey');*/
var list;
var link;
var title="get";
function checkclicked(todoid){
  //  console.log(todoid);
  list=todoid;
           console.log(list);
           link="/delete-task/?id="+list;
        
           console.log(link);
   /* let checkbox=document.getElementById('ch');
    if(checkbox.checked==true){
        
           
    }*/
}
function linking(){

    window.location.replace(link);

}