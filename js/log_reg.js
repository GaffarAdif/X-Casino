let UserData ={}


// for swtich loging to registration 
function switchSing_up_in(x){

    const ParentDiv = document.getElementById('log-registrer-parent')
    
    if(x == 'sing_up'){
        ParentDiv.innerHTML = ''
        ParentDiv.innerHTML = `
        
        <div id="sing_in" class="h-[500px] w-full bg-white md:w-[50%] box-border md:mt-5">
        <h2 id="CurPageText" class="w-full text-center text-[25px]">Sing up</h2>
        <p class="h-[2px] w-full bg-black box-border my-2"></p>

        <form  class="flex flex-col gap-3 justify-center items-center">
        
            <input type="text" id="reg_fullName" placeholder="Full Name" class="w-[90%] h-8  box-border px-3 border-2 border-black rounded">
            <input type="text" id="reg_UserName" placeholder="User Name" class="w-[90%] h-8  box-border px-3 border-2 border-black rounded lowercase">
            <input type="text" id="reg_Email" placeholder="Email" class="w-[90%] h-8  box-border px-3 border-2 border-black rounded lowercase">
            <!-- password  -->
            <div class="w-[90%] h-8 relative">
            <input type="password" id="reg_Pass" placeholder="Password" class="w-full h-8  box-border px-3 border-2 border-black rounded">
            <i id="reg_pass_Icon" onclick="ShowAndHidePass('reg_pass_Icon')" class="fa-regular fa-eye absolute top-[50%] translate-y-[-50%] text-[20px] right-2"></i>
            </div>
            
        <!-- confirm password -->
            <div class="w-[90%] h-8 relative">
            <input type="password" id="reg_c_Pass" placeholder="Confirm Password" class="w-full h-8  box-border px-3 border-2 border-black rounded">
            <i id="reg_C_pass_Icon" onclick="ShowAndHidePass('reg_C_pass_Icon')" class="fa-regular fa-eye absolute top-[50%] translate-y-[-50%] text-[20px] right-2"></i>
            </div>

            <input type="text" name="" id="reg_phone" placeholder="Phone Number" class="w-[90%] h-8  box-border px-3 border-2 border-black rounded">

            <div class="h-[50px] w-[90%]  grid grid-cols-2">
                <div class="grid place-content-center">
                    <input type="text" name="" id="forverify" class="w-full h-10 border-2 border-black rounded">
                </div>
                <div class="flex justify-center items-center text-[25px]">
                 <span class="box-border mr-3"><i onclick="ReloadRandomNum()" id="ReloadIcon" class="fa-solid fa-rotate duration-300"></i></span> <span id="RandomNumber"></span>
                </div>

            </div>

            <input type="button"  onclick="regFormCheck()"  value="Create Account" class="bg-green-400 h-10 w-[90%] rounded-md">
        
        </form>
    </div>
        
        `
}

else if(x == 'sing_in'){
    ParentDiv.innerHTML = ''
    ParentDiv.innerHTML = `
    
    <div id="sing_in" class="h-[250px] w-full bg-white md:w-[30%] md:rounded box-border md:mt-5">
    <h2 id="CurPageText" class="w-full text-center text-[25px]">Sing In</h2>
    <p class="h-[2px] w-full bg-black box-border my-2"></p>

    <form  class="flex flex-col gap-3 justify-center items-center">
    
        <input type="text" id="log_UserName" placeholder="User Name" class="w-[90%] h-8  box-border px-3 border-2 border-black rounded lowercase">
        <!-- password  -->
        <div class="w-[90%] h-8 relative">
        <input type="password" id="log_Pass" placeholder="Password" class="w-full h-8  box-border px-3 border-2 border-black rounded">
        <i id="reg_pass_Icon" onclick="ShowAndHidePass('reg_pass_Icon')" class="fa-regular fa-eye absolute top-[50%] translate-y-[-50%] text-[20px] right-2"></i>
        </div>
        <input type="button"  onclick="logFormCheck()"  value="Loging" class="bg-green-400 h-10 w-[90%] rounded-md">
    </form>
</div>
    
    `
}

}
switchSing_up_in('sing_up')

let ShowedRandomNum 

// for random Number 
function ReloadRandomNum(){
    let icon = document.getElementById('ReloadIcon')
    icon.style.transform += `rotate(360deg)`

    const ShowRandomNumber = document.getElementById('RandomNumber')

    let Ran_Num =''

    for (let index = 0; index < 4; index++) {
        Ran_Num += Math.floor(Math.random() * 10)
    }

    ShowRandomNumber.innerHTML = Ran_Num
    ShowedRandomNum = Ran_Num

}
ReloadRandomNum()

let PassHide = true

function ShowAndHidePass(x){
   
    const passIcon = document.getElementById(x)
    const Innput = passIcon.parentElement.querySelector('input')


    if(PassHide){

        passIcon.classList.remove('fa-eye')
        passIcon.classList.add('fa-eye-slash')
        Innput.type = 'text'
        PassHide = false

    }else{
        passIcon.classList.remove('fa-eye-slash')
        passIcon.classList.add('fa-eye')
        Innput.type = 'password'
   
        PassHide = true

    }
    


}
// form validation 

function regFormCheck(){

    const reg_fullName = document.getElementById('reg_fullName')
    const reg_UserName = document.getElementById('reg_UserName')
    const reg_Email = document.getElementById('reg_Email')
    const reg_Pass = document.getElementById('reg_Pass')
    const reg_c_Pass = document.getElementById('reg_c_Pass')
    const reg_phone = document.getElementById('reg_phone')
    const forverify = document.getElementById('forverify')


// all input fild dtails
 

// for fullName 

let FNameCheck = false

if(reg_fullName.value.length > 6){
    FNameCheck = true
    reg_fullName.style.borderColor = 'black'
}else{
    reg_fullName.value = ''
    reg_fullName.style.borderColor = 'red'
}

// for userName
let UNameCheck = false

if(reg_UserName.value.length > 6){
    UNameCheck = true
    reg_UserName.style.borderColor = 'black'
}else{
    reg_UserName.value = ''
    reg_UserName.style.borderColor = 'red'
}

// for Email
let EmailCheck = false

// user Gived Email Must need to @  

const UserEnterEmail = reg_Email.value
const CheckAtdarate = UserEnterEmail.search('@')
if(UserEnterEmail.length > 6 && CheckAtdarate != -1){
    EmailCheck = true
    reg_Email.style.borderColor = 'black'
}else{
    reg_Email.value = ''
    reg_Email.style.borderColor = 'red'
}

// for password
let passwordCheck = false

if(reg_Pass.value.length >= 8 ){
   
    reg_Pass.style.borderColor = 'black'
    if(reg_Pass.value == reg_c_Pass.value){
       
        passwordCheck = true
        reg_c_Pass.style.borderColor = 'black'
    }else{
        reg_c_Pass.value = ''
        reg_c_Pass.style.borderColor = 'red'
    }

}else{

    reg_Pass.value = ''
    reg_Pass.style.borderColor = 'red'


}


// for PhoneNumber
let PhoneNUmberCheck = false
// onley number Are allowed not letter allowed
let PhoneNumValue = reg_phone.value
const CheckPhonNumberAreNumber = Number(PhoneNumValue)
if(PhoneNumValue.length != 11 || isNaN(CheckPhonNumberAreNumber)){
    reg_phone.value = ''
    reg_phone.style.borderColor = 'red'
}else{
    PhoneNUmberCheck = true
    reg_phone.style.borderColor = 'black'
}
// for Verify
let VerifyCheck = false
let ConvertStr = String(forverify.value)
if(ConvertStr != ShowedRandomNum){
    forverify.value = ''
    forverify.style.borderColor = 'red'
    ReloadRandomNum()
}else{
    VerifyCheck = true
    forverify.style.borderColor = 'black'
}
// Succsec Registration 
if(FNameCheck && UNameCheck && EmailCheck && passwordCheck && PhoneNUmberCheck && VerifyCheck){

    UserData.U_Full_Name_Data = reg_fullName.value
    UserData.U_User_Name_Data =  reg_UserName.value.toLowerCase()
    UserData.U_Email_Name_Data = reg_Email.value.toLowerCase()
    UserData.U_Password_Data = reg_Pass.value
    UserData.U_Phone_Name_Data = reg_phone.value


    let ConVertJson = JSON.stringify(UserData)
    localStorage.setItem('userAllData',ConVertJson)
    document.body.innerHTML += `
    <div id="Acc_Create_sucsess_div" class="fixed top-0 left-0 w-full overflow-hidden duration-500 h-screen backdrop-blur-sm z-10 flex items-center justify-center">
    <div class="w-[80%] h-[200px] bg-red-400 relative flex flex-col gap-2 justify-center items-center">
    <button onclick="RemoveDiv('Acc_Create_sucsess_div')" class="absolute top-[-5px] right-[-5px] h-8 w-8 text-[20px] bg-lime-600 "><i class="fa-solid fa-x"></i></button>
     <p class="text-green-700">Account Create Sucsses fully</p>
     <button id="sing_in" onclick="switchSing_up_in('sing_in')" class="bg-yellow-200 h-10 w-[60%] rounded-md">Sing in</button>
    </div>
    </div>

    `
}
}


// loging section start form here 


let ValidUserDAta = JSON.parse(localStorage.getItem('userAllData'))



function logFormCheck(){
    const LogingUsername = document.getElementById('log_UserName')
    const LogingPass = document.getElementById('log_Pass')

    let userNameCheck = false
    let passcheck = false

    // user name chaeck 

    if(ValidUserDAta.U_User_Name_Data == LogingUsername.value.toLowerCase()){
        console.log('user Name Matched');
        LogingUsername.style.borderColor = 'black'

    }else{
        LogingUsername.value = ''
        LogingUsername.style.borderColor = 'red'
        console.log('user name not match');
    }
    // passwrod check 
    if(ValidUserDAta.U_Password_Data == LogingPass.value){
        console.log('password match');
        LogingPass.style.borderColor = 'black'
    }else{
        LogingPass.value = ''
        LogingPass.style.borderColor = 'red'
        console.log('password not match');
    }
}



