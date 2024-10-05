//              Object Destructuring 
const band = {
    bandname : "Jackson",
    Song : "Unknown",
    year : 1978
}
console.log(band)

let {bandname:bandtag, Song:album, ...thisyear} = band;
//      var     var       array 
// this will make the two variables and an array, 
// : colon is used to rename variable colin:comma,
// ...thisyear is a new object, which will store the remaining keys or properties
thisyear.year = 1233;
console.log(bandtag);
console.log(thisyear);
