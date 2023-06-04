<svelte:head>
</svelte:head>
<script>
	import Wave from "$lib/wave.svelte";
	import { onMount } from "svelte";
	import { element } from "svelte/internal";
  let menuModal=false
  let menu=[];
  
  let openmodal=false
  $:openmodal
  let id=0;
  
  let setLocal=(id,count)=>{
    let preOrder=JSON.parse(localStorage.getItem("preOrder",id)??"[]")
    let isfind=false
    console.log(preOrder)
    preOrder.find(element=>{
      if(element.id==id){
        element.value=Number(element.value)
        element.value+=Number(count);
        isfind=true
        return true
      }
    })
    if(!isfind){
      menu.forEach(e=>{
        e.dishList.find(element=>{
          if(element.id==id){
            let thisElement =element;
            thisElement.value=count
            preOrder.push(thisElement)
          }
        })
      })
    }
    console.log(preOrder)
    localStorage.setItem("preOrder",JSON.stringify(preOrder))
  }
  onMount(()=>{
    fetch('http://127.0.0.1:5000/menu', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // Обработка полученных данных меню
        menu=data;
      })
      .catch(error => {
        // Обработка ошибок
        console.error('Ошибка при получении меню:', error);
      });
  })
</script>
<section class="banner-area banner-area2 menu-bg text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <h1><i>Наше меню</i></h1>
        <p class="pt-2"><i>Тайна ночи: Бескомпромиссная сила животного мира, окутанная мраком.</i></p>
      </div>
    </div>
  </div>
</section>
<Wave />
<section class="food-area section-padding">
    <div class="container">
        <div class="menu-title">
          <h2>Популярные блюда</h2>
          <p>Толко они доступны для заказа</p>
        </div>
        {#each menu as element }
          <h3>{element.title}</h3>
          <div class="row mt-5 food-wrapper">
            {#each element.dishList as el, i }
                <div class="col-md-4 col-sm-6 cursor-pointer " id={el.id}>
                  <div class="single-food ">
                    <div class="food-img">
                      <img src="{el.image}" class="img-fluid" alt="">
                    </div>
                    <div class="food-content">
                      <div class="d-flex justify-content-between">
                        <h5>{el.name}</h5>
                        <div class="food-content__title">
                          <span class="style-change">{el.price} р</span>
                          <span class="style-change">за {el.gram} г</span>
                        </div>

                      </div>
                      <p class="pt-3">{el.title}</p>
                      <div class="order__count">
                        <button class="btn order" on:click={()=>{
                          
                          if(localStorage.getItem('userId') && localStorage.getItem('userId')!==""){
                            let counter =document.getElementById("count-order-"+el.id) 
                            setLocal(Number(el.id),counter.value)
                          }
                          else{
                            menuModal=true
                          }
  
                        }}>Добавить в корзину</button>
                        <select name=""  id="count-order-{el.id}" class="order-count-select">
                          <option value="1" selected>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                        </select>
                      </div>
  
                    </div>
                    
                  </div>
                </div>
            {/each}
          </div>
        {/each}
        
    </div>
  </section>
  {#if menuModal}
  <div class="menu-vhod" >
    <div class="menu-vhod__wrapper">
      <div class="menu-vhod__close" on:click={()=>menuModal=false}>
        <span>Закрыть</span>
      </div>
      <div class="menu-vhod__info">
        <span>Пожалуста, Войдите перед заказом</span>
      </div>
    </div>
  </div>
{/if}

  <style>
    .food-content__title{
      display: flex;
      align-items: end;
      flex-direction: column;
    }
    .container h3{
      text-align: center;
      margin: 60px 0 30px 0;
    }
    .menu-vhod{
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
    .menu-vhod__wrapper{
      margin-top: 35vh;
      padding: 25px;
      width: 50vw;
      height: 30vh;
      background-color: #fff;
      border-radius: 20px;
    }
    .menu-vhod__info{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      font-family: "Playfair Display",serif;
    }
    .menu-vhod__close{
      width: min-content;
      border-radius: 10px;
      border: 1px solid black;
      font-size: 18px;
      cursor: pointer;
      padding: 5px;
      margin-left: auto;
    }
    .single-food{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .food-content{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    .food-content .order__count{
      margin-top: auto;
    }
    .food-wrapper{
      row-gap: 30px;
    }



    .food-area .single-food:hover .food-content .btn.order{
      background-color: #fff;
      color: black;
    }
    .order__count{
      display: flex;
      gap: 5px;
      width: 100%;
      justify-content: space-between;
    }
    .btn.order:hover{
      background-color: #dfdfe9 !important;
    }
    .order-count-select{
      border-radius: 10px;
      width: 50px;
      height: 50px;
      padding: 0 0 0 7px;
      cursor: pointer;
      transition: all .3s;
    }
    .order-count-select:hover{
      background-color: #dfdfe9 !important;
    }
    .menu-title{
      text-align: center;
      display: block;
      margin: 0 auto;
    }
    .menu-title h2{
      color: black !important;
    }
    .banner-area2 p {
      color: #fff;
    }
    .menu-bg {
      background-image: url(/images/menu-bg.jpg.webp);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      padding: 210px 0 160px;
    }
    .banner-area2::before {
      content: " ";
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background-color: rgba(0, 0, 0, .7);
    }
    .banner-area > div{
      position: relative;
      z-index: 2;
    }
  </style>