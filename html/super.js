
document.getElementById("Pu1").value = "500";
document.getElementById("Pu2").value = "500";
document.getElementById("Pu3").value = "500";
function Produit(produit, prix){

    var P1 = document.getElementById(produit).value;    
    if(P1=="Ordinateur"){
        document.getElementById(prix).value = "500";
    }
    else if(P1=="Telephone"){
        document.getElementById(prix).value = "300";
    }
    else if(P1=="Pain au lait"){
        document.getElementById(prix).value = "2000";
    }
    else{

        document.getElementById(prix).value = "500";
    }
}

function PrixTotal(qte, prix, ptotal){

    var Qte1 = document.getElementById(qte).value
    var Price = document.getElementById(prix).value;
    document.getElementById(ptotal).value = Number(Qte1 * Price);
}

function sum(){
    
    var price1 = document.getElementById("pt1");
    var price2 = document.getElementById("pt2");
    var price3 = document.getElementById("pt3");

    var total = Number(price1 + price2 + price3);

    document.getElementById("PTHT").value = total;
}