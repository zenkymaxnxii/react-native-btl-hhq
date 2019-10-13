const url = 'http://shipdoan.000webhostapp.com/app/';
async function Register(params) {
    const urlReg = 'register.php?username=' + params.username + '&password=' + params.password + '&fullname=' + params.fullname + '&phone=' + params.phoneNumber + '&address=' + params.address;
    try {
        let res = await fetch(url + urlReg);
        let resJson = await res.json();
        return resJson.status;
    } catch (error) {
        console.log(`API erorr: ${error}`);
    }
}
async function Login(params) {
    const urlLogin = 'login.php?username=' + params.username + '&password=' + params.password;
    try {
        let res = await fetch(url + urlLogin);
        let resJson = await res.json();
        return resJson;
    } catch (error) {
        console.log(`API erorr: ${error}`);
    }
}
export { Register };
export { Login };