<script>
	import { user } from "../../store/user";

export let isLogin = true
export let showLogin = false
let loginValues={
    email:'',
    password:''
}
let regValues={
    name:"",
    email:'',
    password:''
}
async function login(){
    await fetch(`http://127.0.0.1:5000/login`,
    {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(loginValues)
    }).then((responce)=>{
        return responce.json()
    }).then((data)=>{
        console.log(data)
        showLogin=false
        localStorage.setItem("userId", data.id) 
        user.set(data)
    })
    .catch((err)=>{
        console.error(err)
    })

}
async function reg(){
    await fetch(`http://127.0.0.1:5000/register`,
    {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(regValues)
    }).then((responce)=>{
        return responce.json()
    }).then((data)=>{
        console.log(data)
        loginValues.email = regValues.email
        loginValues.password = regValues.password
        login()
    })
    .catch((err)=>{
        console.error(err)
    })

}
</script>

{#if showLogin}
    <div class="login" on:click={(e)=>{
        if(e.target.closest(".login__container")) return
        showLogin = false
    }}>
        <div class="login__container">
            <div class="login__title-container">
                <h4 class="login__title {isLogin && "active"}" on:click={()=>isLogin=true}>Вход</h4>
                <h4 class="login__title {!isLogin && "active"}" on:click={()=>isLogin=false}>Регистрация</h4>
            </div>
            {#if isLogin}    
                <div class="login__content">
                    <p class="login__content-title">Логин</p>
                    <input type="text" bind:value={loginValues.email} placeholder="Email" class="login__content-input">
                </div>
                <div class="login__content">
                    <p class="login__content-title">Пароль</p>
                    <input type="password" bind:value={loginValues.password} placeholder="Пароль" class="login__content-input">
                </div>
                <div class="login__content-button">
                    <button class="login__content-button-btn" on:click={login}>Войти</button>
                </div>
            {:else}
                <div class="login__content">
                    <p class="login__content-title">Имя</p>
                    <input type="text" bind:value={regValues.name} placeholder="Имя" class="login__content-input">
                </div>
                <div class="login__content">
                    <p class="login__content-title">Логин</p>
                    <input type="text" bind:value={regValues.email} placeholder="Email" class="login__content-input">
                </div>
                <div class="login__content">
                    <p class="login__content-title">Пароль</p>
                    <input type="password" bind:value={regValues.password} placeholder="Пароль" class="login__content-input">
                </div>
                <div class="login__content-button">
                    <button class="login__content-button-btn" on:click={reg}>Регистрация</button>
                </div>
            {/if}
        </div>
    </div>    
{/if}


<style>
.login{
    position: absolute;
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}
.login__container{
    padding: 20px;
    position: relative;
    min-width: 450px;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    box-sizing: border-box;
    border-radius: 40px;
    background-color: white;
}
.login__title-container{
    display: flex;
    gap: 15px;
}
.login__title{
    cursor: pointer;
    color: rgb(102, 102, 102);
}
.login__title.active{
    color: black;
}
.login__content-title{
    margin: 0;
    padding-left: 5px;
    padding-bottom: 5px;
}
.login__content-input{
    padding: 0 15px;
    height: 40px;
    border-radius: 20px;
    width: 100%;
    padding:10px;
    border:0;
    outline: none;
    box-shadow:0 0 15px 4px rgba(0, 0, 0, 0.321);
}
.login__content-button{
    margin-top: auto;
    display: flex;
    justify-content: end;
}
.login__content-button-btn{
    height: 40px;
    border:none;
    padding: 0 15px;
    background-color: #ffb606;
    border-radius: 20px;
    transition: all .3s;
}
.login__content-button-btn:hover{
    background-color: rgb(234, 234, 234);
}
</style>