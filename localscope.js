 var dept="hr"; //global variable
function fun1()
{
    var name="sachin";
    console.log("your name is" + name);//local variable
    console.log("dep="+dept)
}
function fun2()
{
    console.log("your name is" + name);//local variable
    console.log("dep="+dept)
}

console.log(name);

fun1();
fun1();
fun1();