const protien = ['Ypgurt(1 cup)','Cooked meat/Mushroom(85g)','Cooked fish/smoked carrot salmon(100g)','1 whole egg + 4 eggs whites/(chickpea pasta)']
const fruit = ['Berries(80g)','Apple','Orange','Banana','Dried Fruit(Hand full)','Fruit Juice(125ml'];
const vegetables = ['Any vegetable(80g','Leafy greens(any amount'];
const grains = ['Cooked Grain(150g)','Whole Grain Bread(1 slice)','half large Potato(75g)','Oats(250g)','2 corn tortillas'];
const protein_snak = ['Soy nuts(30g)','Low fat milk(250ml)','hummus(4 Tbsp)','Cottage cheese(125g)','Flavored yogurt(125g)'];
const taste_enhancer = ['2 TSP (10 ml) olive oil','2 TBSP (30g) reduced-calorie salad dressin','1/4 medium avocado','Small handful of nuts','1/2 medium avocado']
function analyse(){
    let name = document.getElementById('name').value;
    let weight = document.getElementById('weight').value;
    weight = parseInt(weight);
    let height = document.getElementById('height').value;
    height = parseInt(height);
    let age = document.getElementById('age').value;
    age = parseInt(age);
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let physical_activity = document.querySelector('input[name="physical_activity"]:checked').value;
    if (gender == "Female"){
       var bmr = 655 + (9.6*weight) + (1.8 + height) - (4.7*age);
    }
    else if(gender == "Male"){
       var bmr = 66 + (13.7*weight) + (5*height) - (6.8*age);
    }
    bmr = parseInt(bmr);
    if(physical_activity == 'value1'){
       var tdee = bmr*1.2; 
    }
    else if(physical_activity == 'value2'){
        var tdee = bmr*1.375; 
    }
    else if(physical_activity == 'value3'){
        var tdee = bmr*1.55; 
    }
    else if(physical_activity == 'value4'){
        var tdee = bmr*1.735; 
    }
    else if(physical_activity == 'value5'){
        var tdee = bmr*1.9; 
    }
    tdee = parseInt(tdee);
    // breakfast
    breakfast = protien[Math.floor(Math.random()*(protien.length-1))]+",";
    breakfast += fruit[Math.floor(Math.random()*fruit.length-1)];
    if (tdee >= 2200){
        breakfast += ", "+grains[Math.floor(Math.random()*grains.length-1)];
    }
    alert(breakfast);
}