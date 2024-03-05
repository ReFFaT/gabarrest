<script>
	import { onMount } from "svelte";
    import "./Header.css"
	import { user } from "../../store/user";
	import { settings } from "../../store/settingsMod";

    let activeRoute='home'
    let routeMove;
    function setActiveRoute(route){
        activeRoute=route
        let newRoute = document.getElementById(route+"-header")
        let newRouteRect = newRoute.getBoundingClientRect();

        routeMove.style.left = newRouteRect.left + 10 - routeMove.getBoundingClientRect().width  + "px"
    }
    onMount(()=>{
        setActiveRoute("home")
        let userId=localStorage.getItem("userId")   
        // console.log(userId)
        if(userId && userId!==''){
            fetch(`http://127.0.0.1:5000/users/${Number(userId)}`,
            {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
            // console.log(data)
            user.set(data)
            console.log($user)
            localStorage.setItem("userId",$user.id)
            // Обработка полученных данных меню
            })
            .catch(error => {
            // Обработка ошибок
            console.error('Ошибка при получении меню:', error);
            }
            );
        }
    })
    function login(){

    }
</script>
<div class="header">
    <div class="header__wrapper">
        <ul class="header__list">
            <li class=" header__item-wrapper" id="home-header">
                <a href="/home" class="header__list-item {activeRoute==="home" && "active"}"
                on:click={()=>setActiveRoute("home")}>
                    <img src="/images/home-outline.svg" class="header__list-icon" alt="">
                    <p class="header__list-text">Главная</p>
                </a>
            </li>
            <li class="header__item-wrapper" id="menu-header">
                <a href="/menu" class="header__list-item {activeRoute==="menu" && "active"}"
                on:click={()=>setActiveRoute("menu")}>
                <img src="/images/book-outline.svg" class="header__list-icon" alt="">
                <p class="header__list-text">Меню</p>
                </a>
            </li>
            <li class="header__item-wrapper" id="info-header">
                <a  href="/info" class="header__list-item {activeRoute==="info" && "active"}"
                on:click={()=>setActiveRoute("info")}>
                    <img src="/images/basket-outline.svg" class="header__list-icon" alt="">
                    <p class="header__list-text">Корзина</p>
                </a>
            </li>
            <li class="header__item-wrapper" id="order-header">
                <a href="/order" class="header__list-item {activeRoute==="order" && "active"}"
                on:click={()=>setActiveRoute("order")}
                >
                    <img src="/images/ice-cream-outline.svg" class="header__list-icon" alt="">
                    <p class="header__list-text">Заказы</p>
                </a>
            </li>
        </ul>
        <div bind:this={routeMove} class="header__slider"></div>
        {#if $user.authorized}
            <button class="header__button-login">
                Выйти
            </button>
        {:else}
            <button class="header__button-login">
                Регистрация
            </button>
            <button class="header__button-login">
                Вход
            </button>
        {/if}        
    </div>
    {#if $user.role === "admin"}
        <div class="header__admin">
            <div class="header__admin-settings">
                <button class="header__admin-settings-btn" on:click={()=> settings.set(!$settings)} >
                    <img class="header__admin-settings-btn-image" src="images/settings.svg" alt="">
                </button>
            </div>
            <div class="header__admin-dashboard">
                <a class="header__admin-dashboard-href" href="/dashBoard" >
                    <img class="header__admin-dashboard-image" src="images/dashboard.svg" alt="">
                </a>   
            </div>        
        </div> 
    {/if}
</div>


<style>
    .header__admin{
        right: 0;
        position: relative;
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .header__admin-settings{
        width: 50px;
        height: 50px;
    }
    .header__admin-settings-btn-image{
        width: 36px;
        height: 36px;
    }
    .header__admin-settings-btn{
        background-color: white;
        border-radius: 10px;
        height: 50px;
        width: 50px;
        border: none;
        transition: all .3s;
        &:hover{
            transform: scale(1.1);
        }
        &:active{
            transform: scale(0.9);
        }
    }
    .header__admin-dashboard{
        background-color: white;
        border-radius: 10px;
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            transform: scale(1.1);
        }
        &:active{
            transform: scale(0.9);
        }    
    }
    .header__admin-dashboard-image{
        width: 36px;
        height: 36px;
    }
</style>