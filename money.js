// function myFunction() {
//     var y = document.getElementById("txt1").value;
    
//     var a=parseFloat(y)
//     var z = document.getElementById("txt2").value;

//     var b=parseFloat(z)
//     var x = a+ b;
//     document.getElementById("demo").innerHTML = x;
//   }

document.getElementById('btn-calculate').addEventListener('click', function(event){

    const inocmeInput=document.getElementById('income-input').value ;

    const finalInocmeInput= parseFloat(inocmeInput);



    const foodInput=document.getElementById('food-input').value ;

    const finalFoodInput= parseFloat(foodInput);



    const rentInput=document.getElementById('rent-input').value ;

    const finalRentInput= parseFloat(rentInput);


    const clothInput=document.getElementById('cloth-input').value ;

    const finalClothInput= parseFloat(clothInput);


    const filalTotalCost= finalFoodInput+ finalRentInput+ finalClothInput;
    const finalBalance=  finalInocmeInput - filalTotalCost;

    

    document.getElementById('total-expence').innerHTML="fianl cost:  "+ filalTotalCost ;


    document.getElementById('after-balance').innerHTML="balance:  " + finalBalance;

    if(finalInocmeInput<0 || finalFoodInput<0 ){
        document.getElementById('total-expence').innerHTML="invalid"

        document.getElementById('after-balance').innerHTML="balance:  "
    }
  if(finalInocmeInput < filalTotalCost){
    document.getElementById('total-expence').innerHTML="impossible"
  }


    
    


    


})


document.getElementById('2nd-btn').addEventListener('click', function(){
     


    

    const foodInput=document.getElementById('food-input').value ;

    const finalFoodInput= parseFloat(foodInput);



    const rentInput=document.getElementById('rent-input').value ;

    const finalRentInput= parseFloat(rentInput);


    const clothInput=document.getElementById('cloth-input').value ;

    const finalClothInput= parseFloat(clothInput);
    const inocmeInput=document.getElementById('income-input').value ;

    const finalInocmeInput= parseFloat(inocmeInput);

    const filalTotalCost= finalFoodInput+ finalRentInput+ finalClothInput;

    const finalBalance=  finalInocmeInput - filalTotalCost;


    const percentInput= document.getElementById('percent-input').value ;

    const pFpercentInput=parseFloat(percentInput);

    const saveTheory = pFpercentInput/100 * finalInocmeInput;
   

    document.getElementById('save-amount').innerHTML= "save Amount :"+ saveTheory;
    const remainingBalance= finalBalance - saveTheory;

    document.getElementById('reamining-balance').innerHTML= "Remaining Balance :"+ remainingBalance;


})
