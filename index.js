function getInput(){
    var name=document.getElementById("first-name").value;
    var type=document.getElementById("type").value;
    var size=document.getElementById("size").value;
    var crust=document.getElementById("crust").value;
    var popping=document.getElementById("popping").value;

    if(size==="small"){
        alert("Hello "+name+ " you ordered "+type+" type, "+crust+" crust, "+popping+" popping with"+size+" size so you will pay 1500 Rwf");
    }
    else if(size==="medium")
    {
        alert("Hello "+name+ "you ordered "+type+" type, "+crust+" crust, "+popping+" popping with"+size+" size so you will pay 3000 Rwf");
    }
    else
    {
        alert("Hello "+name+ "you ordered "+type+" type, "+crust+" crust, "+popping+" popping with"+size+" size so you will pay 5000 Rwf");
        
    }

}