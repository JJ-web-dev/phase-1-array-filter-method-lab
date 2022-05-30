// Code your solution here

function findMatching(arr, driverName){
    let matchDriver = arr.filter(element => element.toLowerCase() === driverName.toLowerCase());
    return matchDriver;
    };
   

function fuzzyMatch(arr, query){
    let letters = arr.filter(element => element.startsWith(query))
    return letters;
}


function matchName(drivers, name){
    return drivers.filter(element => element.name.toLowerCase() === name.toLowerCase())
};
    
