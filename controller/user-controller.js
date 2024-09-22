const { connection } = require("../db/dbconnection");
const addNewUserHandler =(req,res)=>{
    let isSuccessful = false;
    connection.query(`Insert into 'user_profile' 
        ('lastname', 'firstname','email',
        'user_type','street','barangay_id','contact_number',
        'gender','birthdate','experience_id') values (?)`,data,(err,result,fields)=>{
        if(result){
            isSuccessful =result.affectedRows > 0;
            console.log(isSuccessful);
        }
    })

    return {
        isSuccessful
    }
}
const updateUserHandler = (data)=> {


}

module.exports = {
    addNewUserHandler,
    updateUserHandler
}