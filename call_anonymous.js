var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}

// normal function

// for (var i = 0; i < animals.length; i++) {
 
//       console.log('#' + i + ' ' + this.species
//                   + ': ' + this.name);
    
// }this doesn't work as we can't iterate through every object 


// below function is same as function written using the call*************
//  for (var i = 0; i < animals.length; i++) {
 
//       console.log('#' + i + ' ' + animals[i].species
//                   + ': ' + animals[i].name);
    
// }