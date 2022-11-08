function analyse(){
    let name = document.getElementById('name').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let age = document.getElementById('age').value;
    var n = document.getElementsByName('gender');  
        for(i = 0; i < n.length; i++) {
            if(n[i].checked)
               var gender = n[i].value;
            }
    alert(gender);
    
}