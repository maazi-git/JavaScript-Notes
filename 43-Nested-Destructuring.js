//                  Nested Destructuring
const Users = [
    {UserID: 1, Fullname: "Maaz Haider", Gender: "Male"},
    {UserID: 2, Fullname: "Abdul Shukran", Gender: "Male"},
    {UserID: 3, Fullname: "Zain Malik", Gender: "Male"}
]

let [user1, user2, user3] = Users;
// This will gave you the variables as an object of the users seperately. 
console.log(user1)
console.log(user2)
console.log(user3)

// So, if i have to get the variable from the object in the array, then 
let [{Fullname:User1name, UserID}, ,{Gender}] = Users;
// This will give you the Fullname from the first object and the gender from the last object, which is stored as a seperate variable.
// We can make more than one keys of object as our variable, with just putting a comma , and then the key name
// I have changed the name of the Fullname of the object which i made a variable from an array, then its name is User1name, i cannot use it as fullname as a variable.
console.log(User1name);
console.log(UserID);
console.log(Gender)


//                                  Revision
const Users2 = [
    {UserID1: 1, Fullname1: "Maaz Haider", Gender1: "Male"},
    {UserID2: 2, Fullname2: "Abdul Shukran", Gender2: "Male"},
    {UserID3: 3, Fullname3: "Zain Malik", Gender3: "Male"}
]
let [myuser1, myuser2, myuser3] = Users2;
console.log(myuser1)
console.log(myuser2)
console.log(myuser3)

let [{UserID1},{Fullname2},{Gender3}] = Users2
console.log(UserID1)
console.log(Fullname2)
console.log(Gender3)