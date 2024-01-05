const bcrypt = require('bcrypt')
let user = {
    email:"divya@gmail.com",
    password:"iloveindia",
    mobile:6281669562
}
console.log(user)
let salt = 10;
let new_Password=bcrypt.hashSync(user.password,salt)
/* console.log(user.password)
console.log(new_Password)
 */
//store user object into database
user={...user,password:new_Password}


console.log(user)