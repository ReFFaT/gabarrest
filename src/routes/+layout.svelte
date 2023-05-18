<svelte:head>

</svelte:head>
<script>
	import { onMount } from "svelte";
  let mover
  let beforeElem
  function pointerMove (mover,thisElem) {
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
        
      </ul>
    </div>
    <div class="indicator-wrap" id="mover">
      <div class="indicator"></div>
    </div>
    
</header>
    

<style>
  .my-Header{
    margin-top: 50px;
    z-index: 100;
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