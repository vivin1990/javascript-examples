// The call() method calls a function with a given this value and arguments provided individually.


// using call method to call the constructor :- calling parent constructor , from child constructor 

// parent : vehical 
// child  : Two_wheeler, four_wheeler


function vehical(name,price)
{
	this.name  = name;
	this.price = price;
} 

function two_wheeler(name,price)
{
	// calling parent // common constructor
	vehical.call(this,name,price);
	this.wheels=2;
}

function four_wheeler(name,price)
{
	// calling parent // common constructor
	vehical.call(this,name,price);
	this.wheels=4;
}

var car= new four_wheeler('nano','100000');

console.log(car); 
