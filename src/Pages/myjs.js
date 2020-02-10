function calculateProbability()
{
    var dato1 = document.getElementById('txt_fcases').value;
    var dato2 = document.getElementById('txt_pcases').value;
    
    var probability = dato1 / dato2;
    
    document.getElementById('txt_probability').value = probability;
    
    return false;
}

function viewTheList(){
	var combo = document.getElementById('lst_colsori');
	if(combo.selectedIndex<0)
	    alert('Nothing selected');
	else
	    alert('The selected option is: '+
              combo.options[combo.selectedIndex].value);	
}

function moveAllDown(){
    var lstori = document.getElementById("lst_colsori");
    var lstdest = document.getElementById("lst_colsel");
    
    var optori;
    var optdest;
    
    lstdest.remove(0);
    
    for(var i=0;i<lstori.length;i++){
        optori = lstori.options[i];
        optdest = document.createElement("option");
        optdest.value = optori.value;
        optdest.text = optori.text;
        lstdest.add(optdest);
    }
}
