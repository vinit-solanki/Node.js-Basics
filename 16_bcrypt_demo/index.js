const bcrypt = require('bcrypt');

const hashPassword = async (pw)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw,salt);
    console.log(salt);
    console.log(hash);   
    return hash;     
}
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw.trim());
    if(result){
        console.log("Logged in!");        
    } else{
        console.log("Incorrect Credentials");        
    }
}
// const hashedPw = hashPassword('abc123');
login('abc123','$2b$10$O4q.iIjEdTOzCri255MmNuUsHgVMrBP2mvIfACZMLnaC1H.0ng0di');