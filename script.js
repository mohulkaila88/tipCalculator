const calculate = document.getElementById('btnCalculate');
const tips = document.getElementsByName('tip');
const amount = document.getElementById('amount');

calculate.addEventListener('click', () => {
    var tipValue = checkRadioSelection(tips);
    calculateTip(tipValue, amount.value);
    
});

function checkRadioSelection(tips){
    var returnValue;
    for(var i=0;i<tips.length;i++){
        if(tips[i].checked){
            if(tips[i].value == 'other'){
                returnValue = document.getElementById('newInput').value;
            } else {
                returnValue = tips[i].value;
            }
        }
    }
    return returnValue;
}

function createNewInput(){
    const tipInput = document.getElementById('tipInput');
    const newInput = document.createElement('input');
    newInput.id='newInput';
    newInput.type='text';
    tipInput.appendChild(newInput);
}

function calculateTip(tipPercent, amount){
    var tipAmount = ((tipPercent)/100 * amount);
    const tipInput = document.getElementById('tipInput');
    const result = document.createElement('label');
    result.innerHTML = tipPercent + '% of ' + amount + ' is $' + tipAmount.toFixed(2);
    tipInput.appendChild(result);
    console.log(tipPercent + '% of ' + amount + ' is $' + tipAmount);
}