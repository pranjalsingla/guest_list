guest=[];

function submit(){
    con_array=[]
    for(var j=1; j<=4; j++){
        var guest_name = document.getElementById("ti"+j).value;
        console.log(guest_name);
        guest.push(guest_name);
    }
    console.log(guest);
    var length=guest.length;
    console.log(length);
    for(var k=0; k<length; k++){
        con_array.push("<h4>Name-"+guest" </h4>");
        console.log(con_array);
    }
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sort(){
    guest.sort();
    console.log(guest);
    document.getElementById("sorted_names").innerHTML=con_array;
}