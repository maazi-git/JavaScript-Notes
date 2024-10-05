//              Objects inside an array 
//     this is very useful in real world applications.


// So, we have to store the data of the many users!

let Users = [
    {UserID : 1, Fullname : "Maaz Haider", Gender : "Male"},
    {UserID : 2, Fullname : "Abdul Shukran", Gender : "Male"},
    {UserID : 3, Fullname : "Zain Malik", Gender : "Male"},
    {UserID : 4, Fullname : "Zoha Malik", Gender : "Female"},
    {UserID : 5, Fullname : "Ahtisham Nasir", Gender : "Male"},
]

// console.log(Users);
for(let user of Users){
    console.log(user.Fullname)
}

for (let users of Users){
    console.log(users.UserID)
}

for(let user=0; user<Users.length; user++){
    console.log(Users[user].UserID);
}

for (let i=0; i<Users.length; i++){
    console.log(Users[i].Fullname);
}

for (let n=0; n<Users.length; n++){
    console.log(Users[n].Gender)
}

for (let z=0; z<Users.length; z++){
    console.log(Users[z])
}