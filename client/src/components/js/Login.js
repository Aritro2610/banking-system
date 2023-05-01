/*===== LOGIN SHOW and HIDDEN =====*/
export const Scripts = ()=>{

    const signUp = document.getElementById('sign-up'),
        signIn = document.getElementById('sign-in'),
        loginIn = document.getElementById('login-in'),
        loginUp = document.getElementById('login-up')

        signIn.addEventListener('click', ()=>{
            // Remove classes first if they exist
            loginIn.classList.remove('none')
            loginUp.classList.remove('block')
            // Add classes
        loginIn.classList.toggle('block')
        loginUp.classList.toggle('none')
        })
        signUp.addEventListener('click', ()=>{
            // Remove classes first if they exist
            loginIn.classList.remove('block')
            loginUp.classList.remove('none')
            // Add classes
            loginIn.classList.toggle('none')
            loginUp.classList.toggle('block')
        })
}