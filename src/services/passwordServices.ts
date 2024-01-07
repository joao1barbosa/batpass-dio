export default function generatePass(){
    let characters: string='QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm1234567890?!@#$%*';
    let password: string = '';
    const passwordLength = 8;
    
    for(let index = 0; index < passwordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    
    return password;
}