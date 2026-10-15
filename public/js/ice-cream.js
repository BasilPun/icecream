document.querySelector('#ice-cream-form').onsubmit = () =>{
    let isValid = true;
    clearErrors();


    let name = document.querySelector('#name').value.trim();
    if (name === ""){
        console.log("hello");
        document.querySelector('#err-name').style.display = "block";
        isValid = false;
    }
    

    //flavor
    let flavorSelected = document.getElementById("flavor").value;
    if (flavorSelected == "none") {
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;
    }

    let coneTypes = document.getElementsByName("cone")


    //cones
    let checkedBoxes = 0;
    for(let i = 0; i< coneTypes.length; i++){
        if (!coneTypes[i].checked){
            checkedBoxes++;
        }
    }

    if (checkedBoxes === coneTypes.length){
        document.getElementById("err-cone").style.display = "block";
        isValid = false;
    }

    alert("hello");
    return isValid;
}


function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i< errors.length; i++){
        errors[i].style.display = "none";
    }
}