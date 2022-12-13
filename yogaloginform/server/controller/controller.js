const bcrypt = require('bcrypt')
const router = require('../router/router')
const conn = require ('../db/conn')





//controller for login
exports.login=(req,res)=>{

    try {

        // validate request
        if(!req.body){
            res.status(406).json({err:"You have to fill the email and password field"})
            return;
        }

        //get user data
        const {mail, password} = req.body

        // validation 
         if(!mail || !password)
        res.status(406).json({err:"Not all fields have been entered"})

        conn.query("SELECT hash_password FROM users WHERE mail = ?", mail,(err,result,fields)=>{
            result = JSON.stringify(result)
            console.log(result)
            // console.log(result[0])
            var array = result[0]["hash_password"];
            // const r = array["hash_password"].toString();
            
            
            console.log(array);
            if(bcrypt.compareSync(password,result))
            return res.status(406).json({err:"Wrong password"})
            else {
                return res.status(200)
            }
            


        }
        )


        



        

        //compare the password
        // const isMatch = bcrypt.compare(password)

        // res.json({mail, isMatch})
        
    } catch (error) {
      res.status(500).jon({err:error.message || "Error while logging"})  
    }

    
};


//controller for register
exports.registerUser=async(req,res)=>{
    try {

        let{mail,password,confirmpwd,username,age} = req.body

        //validate request
        if(!req.body){
            res.status(406).json({err: "You have to fill all the fields in the form"})
            return
        }

        if(!mail || !password || !confirmpwd || !age || !username)
        return res.status(406).json({err:"Not all fields have been entered"})

        if(password.length <8)
        return res.status(406).json({err:"Password needs to be 8 characters long"})

        if(password!==confirmpwd)
        return res.status(406).json({err:"Confirm password didn't matched"});

        if(age <18 || age>65)
        return res.status(406).json({err: "You are not eligible"});

        const hash_password = await bcrypt.hashSync(password,10)


        // checking that no two email should match and if not then adding the user to the database
        conn.query("SELECT * FROM users WHERE mail = ?", mail,(err,result)=>{
            if(result.length){
                return res.status(406).json("This email is already taken")
            } else {
                conn.query("INSERT INTO users SET?",{mail,hash_password,username,age},(err, result)=>{
                   if(err){
                    console.log("err" + err);
                   } else{
                    return res.status(201).json(req.body);
                   } 
                })
            }
        } )
        

        

        

        

        // //hashing password
        // const hash = await bcrypt.hashSync(password,10)

        // res.json({mail,hash,confirmpwd, username,age})
        
    } catch (error) {
        res.status(500).json({err:error.message || "Error while registration"})
        
    }
    
};



































































































// const bcrypt = require('bcrypt')
// const router = require('../router/router')
// const conn = require ('../db/conn')





// //controller for login
// exports.login=(req,res)=>{

//     try {

//         // validate request
//         if(!req.body){
//             res.status(406).json({err:"You have to fill the email and password field"})
//             return;
//         }



//         //get user data
//          const {mail, password} = req.body

//         // validation 
//          if(!mail || !password)
//         res.status(406).json({err:"Not all fields have been entered"})

//         //compare the password
//         const isMatch = bcrypt.compare(password)

//         res.json({mail, isMatch})
        
//     } catch (error) {
//       res.status(500).jon({err:error.message || "Error while logging"})  
//     }

    
// };


// //controller for register
// exports.registerUser=async(req,res)=>{
//     try {

//         let{mail,password,confirmpwd,username,age} = req.body


//         // checking that no two email should match and if not then adding the user to the database
//         conn.query("SELECT * FROM users WHERE mail = ?", mail,(err,result)=>{
//             if(result.length){
//                 return res.status(406).json("This email is already taken")
//             } else {
//                 conn.query("INSERT INTO users SET?",{mail,password,confirmpwd,username,age},(err, result)=>{
//                    if(err){
//                     console.log("err" + err);
//                    } else{
//                     res.status(201).json(req.body);
//                    }
//                 })
//             }
//         } )
        

//         //validate request
//          if(!req.body){
//             res.status(406).json({err: "You have to fill all the fields in the form"})
//             return
//         }

        

//         if(!mail || !password || !confirmpwd || !age || !username)
//         return res.status(406).json({err:"Not all fields have been entered"})

//         if(password.length <8)
//         return res.status(406).json({err:"Password needs to be 8 characters long"})

//         if(password!==confirmpwd)
//         return res.status(406).json({err:"Confirm password didn't matched"});

//         if(age <18 || age>65)
//         return res.status(406).json({err: "You are not eligible"});

//         //hashing password
//         const hash = await bcrypt.hashSync(password,10)

//         res.json({mail,hash,confirmpwd, username,age})
        
//     } catch (error) {
//         res.status(500).json({err:error.message || "Error while registration"})
        
//     }
    
// };