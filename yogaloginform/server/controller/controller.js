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

        res.json({mail, password})
        
    } catch (error) {
      res.status(500).jon({err:error.message || "Error while logging"})  
    }

    
};


//controller for register
exports.registerUser=(req,res)=>{
    try {

        //validate request
        if(req.body){
            res.status(406).json({err: "You have to fill all the fields in the form"})
            return
        }

        let{mail,password,comfirmpwd, username} = req.body

        if(!mail || !password || !confirmpwd)
        return res.status(406).json({err:"Not all fields have been entered"})

        if(password.length <8)
        return res.status(406).json({err:"Password needs to be 8 characters long"})

        if(password!=confirmpwd)
        return res.status(406).json({err:"Confirm password didn't matched"})

        res.json({mail,password,comfirmpwd, username})
        
    } catch (error) {
        res.status(500).json({err:error.message || "Error while registration"})
        
    }
    res.json({message:"register user response"})
};