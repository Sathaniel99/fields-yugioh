const all = document.getElementsByClassName("contain-fields");


document.getElementById("VS").addEventListener('change', (e) => {
    
    for (let index = 0; index < all.length; index++) {
        all.item(index).style.display = "none";
    }

    document.getElementById(e.target.value).style.display = "block";

});