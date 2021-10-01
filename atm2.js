let val1;
let password = "1234"
let currentAmmount2 = 10000;
let savingAmount2 = 10000;
let currentBalance2;
let savingBalance2;

function myFunction_2(){
	document.getElementById('visit').style.display = "none";
	document.getElementById('btn').style.display = "none";
	document.getElementById('btn2').style.display = "none";
	let h2 = document.createElement('H2')
	let element = document.createElement('INPUT')
	element.id = "WithDrawl"
	h2.innerHTML = "Enter Number between 25 to 99";
	let visit = document.getElementById('WithDrawlSet1')
	visit.appendChild(h2)
	visit.appendChild(element)
	setTimeout(condition,5000)
}
function condition(){
		 val1 = document.getElementById('WithDrawl').value
	console.log(val1)
	if(val1>=25&&val1<=99){
		window.location.replace('atm4.html')
	}
	else{
		alert("enter the correct value")
	}
}
function pinVerify(){
	let pin = document.getElementById('pass').value;
	if(pin == password){
		document.getElementById('pass').style.display = "none"
		document.getElementById('confirm').style.display = "none"
		document.getElementById('transactionSet').style.display = "inline-block"
	}
	else{
		alert('Something Went Wrong...Incorrect Pin')
	}


}
function currentAccount(){
	window.location.replace("atm5.html")
}
function currentAmount(){
	let ammountVal = document.getElementById('currentAmount').value;
	currentBalance2 = currentAmmount2-ammountVal
	console.log(currentBalance2)
	if(ammountVal<=10000){
	document.getElementById('currentContainer').style.display = "none"	
	document.getElementById('informcontainerCurrent').style.display = "inline-block"
	document.getElementById('info1').innerHTML = "your balance amouunt on current account is  "+currentBalance2
	}
	else{
		alert("Insufficent balance")
	}
}

function savingAccount(){
	window.location.replace("atm6.html")
}
function savingAmounts(){
	let ammountVal = document.getElementById('savingAmount').value;
	savingBalance2 = currentAmmount2-ammountVal
	console.log(savingBalance2)
	if(ammountVal<=10000){
	document.getElementById('savingContainer').style.display = "none"	
	document.getElementById('informcontainerSaving').style.display = "inline-block"
	document.getElementById('info2').innerHTML = "your balance amouunt on saving account is  "+savingBalance2
	}
	else{
		alert("Insufficent balance")
	}
}