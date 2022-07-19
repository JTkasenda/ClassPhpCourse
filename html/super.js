
document.getElementById("Pu1").value = "500";

function Produit(){

    var P1 = document.getElementById("Produit1").value;
    
    if(P1=="Ordinateur"){
        document.getElementById("Pu1").value = "500";
    }
    else if(P1=="Telephone"){
        document.getElementById("Pu1").value = "300";
    }
    else if(P1=="Pain au lait"){
        document.getElementById("Pu1").value = "2000";
    }
    else{
        document.getElementById("Pu1").value = "500";
    }
}

