function error_message(message){
    let error_message = 
    "\033[31m"+message+"\033[0m";
    console.log(String(error_message));
}

function sucess_message(message){
    let sucess_message = 
    "\033[32m"+message+"\033[0m";
    console.log(String(sucess_message));
}
module.exports = { error_message, sucess_message };