let values = "";
let pin = "1234"
let accountNumber = "1234567890"
let currentAmmount = 10000;
let savingAmount = 10000;
let currentBalance;
let savingBalance;

function myFunction(){
	document.getElementById('text').style.display = "none"
	let element = document.createElement("INPUT")
	element.type = "password";
	element.id = "password"
	element.placeholder = "Enter your Pin and please wait for few seconds"
	let visit = document.getElementById('set')
	 visit.appendChild(element)
	 document.getElementById('btn').style.display = "none"
	  document.getElementById('btn2').style.display = "none"
	  let parah = document.createElement("h5")
	  parah.innerHTML = "Enter the password soon and wait for few seconds otherwise you can't enter"
	  let visit2=document.getElementById('btnset')
	  visit2.appendChild(parah)
	
	   setTimeout(verify,10000)
	
	}
function verify(){
	values = document.getElementById('password').value;
	console.log(values)
	console.log(pin)
	if(values===""){
		alert("you make so delay so refresh the window again and start")
	}
	else if(values == pin){
		window.location.replace("atm2.html")
	}
	else{
		alert("Incorrect Pin...Something Went Wrong")
	}
}
function accountVerify(){
	let accoutOfInput = document.getElementById('account').value
	if(accoutOfInput == accountNumber){
		document.getElementById('account').style.display = "none"
		document.getElementById('accountVerify').style.display = "none"
		document.getElementById('accountcontainer').style.display = "inline-block"
		document.getElementById('notes1').style.display = "none"
		
	}
		else{
			alert("Incorrect accountNumber")
		}
	}
function current(){
document.getElementById('currentbtn').style.display = "none"
document.getElementById('savingbtn').style.display = "none"
document.getElementById('current').style.display = "inline-block"
document.getElementById('currentConfirm').style.display = "inline-block"
}
function paymentConfirm1(){
	let val = document.getElementById('current').value
	if(val<=10000){
		currentBalance = currentAmmount-val
	console.log(currentBalance)
	document.getElementById('ammountcontainer').style.display = "none"
	document.getElementById('informcontainer').style.display = "block"
   document.getElementById('bold1').innerHTML = "your current balance is:"+ currentBalance;	
	}
	else{
		alert("InSufficient balance so please enter the correct ammount")
	}
}
function saving(){
	window.location.replace('atm3.html')
}
function saving2(){
	let val = document.getElementById('saving').value
	if(val<=10000){
		savingBalance = savingAmount-val
	console.log(savingBalance)
	document.getElementById('savingContainer').style.display = "none"
	document.getElementById('informContainer2').style.display = "inline-block"
	document.getElementById('bold2').innerHTML = "your saving balance is:"+ savingBalance;	
	}
	else{
		alert("InSufficient balance so please enter the correct")
	}
}