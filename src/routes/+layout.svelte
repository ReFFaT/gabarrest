<svelte:head>

</svelte:head>
<script>
	import { onMount } from "svelte";
  let mover
  let beforeElem
  let vhod={
    vxod:"false",
    vxodModal :false,
    registerModal:false,
    vhodText: "Войти"
  }
  function pointerMove (mover,thisElem) {
    console.log(123)
    while (thisElem.classList.contains('li')!== true){
      thisElem=thisElem.parentNode;
    }
    if(thisElem!== beforeElem){
      let thisElemRect =thisElem.getBoundingClientRect();
      mover.style.left=thisElemRect.left +thisElemRect.width/2-mover.getBoundingClientRect().width/2  +"px";
      thisElem.classList.add("active");
      if(beforeElem){
        beforeElem.classList.remove("active")
      }
      beforeElem=thisElem
    }
  }

  onMount(()=>{
    vhod.vxod = localStorage.getItem('vxod')
    if(vhod.vxod=="true"){
      vhod.vhodText="Выйти"
    }
    mover =document.getElementById("mover")
    switch(window.location.pathname) {
      case '/home':
        pointerMove(mover,document.getElementById("home"));
        break;
      case '/menu':
        pointerMove(mover,document.getElementById("menu"));
      break;
      case '/info':
        pointerMove(mover,document.getElementById("info"));
      break;
      case '/order':
        pointerMove(mover,document.getElementById("order"));
      break;
      default:
        break;
    }
  })

</script>
<header class="my-Header">
  <div class="navigation">
      <ul class="ul">
        <li class="li " id="home" on:click={(e)=>pointerMove(mover,e.target)}>
          <a  href="/home" class="a">
            <img src="/images/home-outline.svg" class="navigation__image" alt="">
            <span class="text">Главная</span>
          </a>
        </li>
        <li class="li" id="menu" on:click={(e)=>pointerMove(mover,e.target)}>
          <a href="/menu" class="a">
            <img src="/images/book-outline.svg" class="navigation__image" alt="">
            <span class="text">Меню</span>
          </a>
        </li>
        <li class="li" id="info" on:click={(e)=>pointerMove(mover,e.target)}>
          <a  href="/info" class="a">
            <img src="/images/basket-outline.svg" class="navigation__image" alt="">
            <span class="text">Корзина</span>
          </a>
        </li>
        <li class="li" id="order" on:click={(e)=>pointerMove(mover,e.target)}>
          <a href="/order" class="a">
            <img src="/images/ice-cream-outline.svg" class="navigation__image" alt="">
            <span class="text">Заказ</span>
          </a>
        </li>
          <li class=" vxod">
            <button class="vxod__btn" on:click={()=>{
                if((vhod.vxod?? "false")=="false"){
                  vhod.vxodModal=true
                }
                else if((vhod.vxod?? "false")=="true"){
                  localStorage.setItem('vxod',"false")
                  vhod.vhodText="Войти"
                  vhod.vxod="false"
                  localStorage.setItem("myEat","[]")
                }
              }}>{vhod.vhodText}</button>
          </li>
        
      </ul>
    </div>
    <div class="indicator-wrap" id="mover">
      <div class="indicator"></div>
    </div>
    
</header>
{#if vhod.vxodModal}
    <div class="vxod-modal" >
      <div class="vxod-modal__wrapper">
        <div class="vxod-modal__close" on:click={()=>vhod.vxodModal=false}>
          <span>Закрыть</span>
        </div>
        <div class="vxod-modal__info">
          <div class="vxod-modal__info-swipe">
            <span class="active" id="header_vhod" on:click={(e,login=document.getElementById("header_login"))=>{
              e.target.classList.add("active")
              login.classList.remove("active")
              vhod.registerModal=false
            }}>Вход</span>
            <span id="header_login"on:click={(e,login=document.getElementById("header_vhod"))=>{
              e.target.classList.add("active")
              login.classList.remove("active")
              vhod.registerModal=true
            }}>Регистрация</span>
          </div>
          {#if vhod.registerModal}
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Логин">
            <input type="text" placeholder="Пароль">
            <input type="text" placeholder="Повторите пароль">
            <button on:click={()=>{
              localStorage.setItem('vxod',"true")
              vhod.vxod="true"
              vhod.vhodText="Выйти"
              vhod.vxodModal=false
            }}>Регистрация</button>
          {:else}
            <input type="text" placeholder="Логин">
            <input type="text" placeholder="Пароль">
            <button on:click={()=>{
              localStorage.setItem('vxod',"true")
              vhod.vxod="true"
              vhod.vhodText="Выйти"
              vhod.vxodModal=false
            }}>Войти</button>
          {/if}

        </div>
      </div>
    </div>
{/if}

<style>
  .vxod-modal__info-swipe{
    font-size: 20px;
    display: flex;
    justify-content: center;
    gap: 50px;
    font-weight: 700;


  }
  .vxod-modal__info-swipe span{
    width: min-content;
        border: 1px solid black;
        padding: 5px 10px;
        border-radius: 10px;
    cursor: pointer;
  }
  .vxod-modal__info-swipe span.active{
    color: #555557;
    background-color: #dfdfe9;
  }
  .vxod-modal__info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
  }
  .vxod-modal__info input{
    width: 90%;
    font-size: 20px;
    padding: 0 10px;
    border-radius: 15px;
    height: 50px;
  }
  .vxod-modal__info button{
    width: 250px;
    height: 40px;
    border-radius: 15px;
    background-color: transparent;
    font-size: 20px;
  }
  .vxod-modal{
    background-color: rgba(0, 0, 0, .6);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    left: 0;
    z-index:15;
  }
  .vxod-modal__wrapper{
    margin-top: 25vh;
    padding: 25px;
    width: 50vw;
    height: 50vh;
    background-color: #fff;
    border-radius: 20px;
  }
  .vxod-modal__close{
    width: min-content;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 18px;
    cursor: pointer;
    padding: 5px;
    margin-left: auto;
  }

  .vxod{
    width: 100%;
    padding: 0 15px 0 0;
    height: 100% !important;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: end;
  }
  .vxod__btn{
    border-radius: 10px;
    padding: 5px;
    font-size: 18px;
    background-color: transparent;
    transition: all .3s;
  }
  .vxod__btn:hover{
    background-color: #dfdfe9 !important;
    border-color: transparent;
  }

  .my-Header{
    margin-top: 50px;
    z-index: 10;
    position: absolute;
    top: 0;
    width: 100%;
    padding-left:100px;
    display: flex;
    align-items: center;

  }
  .navigation{
    position: relative;
      
    z-index: 2;
    width: 800px;
    height: 60px;
    background: #FFF;
    
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid;
    border-color: #222327; */
    border-radius: 10px;
  }
  .ul{
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    background: #FFF;
    height: 100%;
     padding: 0;
  }
  .li{
    list-style: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    z-index: 2;
  }
  .a{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 600;
  }
  .navigation__image{
    position: absolute;
    top: 0;
    width: 35px;
    height: 35px;
    opacity: 0;
    transition: all .5s;
  }
  :global(.li.active .navigation__image){
    color: #2196f3;
    fill: #2196f3;
    top: 30px;
    opacity: 1;
    color: red;
  }
  .text{
    position: absolute;
    font-size: 22px;
    color: #222327;
    width: 100%;
    padding: 5px 12px;
    border-radius: 12px;
    font-weight: 400;
    transition: .7s;
    transform:  translateY(15px);
  }
  :global(.li.active .text){
    transform:  translateY(5px);
    color: #2196f3;
    opacity: 1;
  }
  .indicator-wrap{
    left: 125px;
    position: absolute;
    bottom: -40px;
    width: 120px;
    height: 60px;
    overflow: hidden;
    z-index: 1;
    transition: all .5s;
  }
  .indicator{
    position: absolute;
    width: 120px;
    height: 120px;
    background: #fff;
    bottom: 0;
    border-radius: 50%;
  }

</style>

<slot></slot>

<!-- <div class="header-wrap">
  <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
    <li class="u-nav-item"><a class="u-button-style u-nav-link" href="/home">Главная</a></li>
    <li class="u-nav-item"><a class="u-button-style u-nav-link" href="/menu">Меню</a></li>
    <li class="u-nav-item"><a class="u-button-style u-nav-link" href="/info">Корзина</a></li>
    <li class="u-nav-item"><a class="u-button-style u-nav-link" href="/order">Заказ</a></li>
  </ul>
</div> -->