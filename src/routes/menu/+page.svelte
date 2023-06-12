<svelte:head>
</svelte:head>
<script>
  // создание меню готово
  // созданение кнопки для удаление раздела меню готово
  // добавить страницу со всеми типами блюд где их можно редактировать либо
  // создание кнопки для редактирования блюда 
	import Wave from "$lib/wave.svelte";
	import { onMount } from "svelte";
	import { settings } from "../../store/settingsMod";
	import { each } from "svelte/internal";
	import { user } from "../../store/user";
  let menuModal=false
  let menu=[];
  let openAddFood=false
  let reductFood=false
  let openAddFoodType="food"
  
  let reductItem={}

  let menuTitle=""
  let newFood={
    "image": "",
    "name": "",
    "title": "",
    "price": 0,
    "gram": 0,
    "type": "",
    "selected": false
  }

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
          {#if $settings && $user.id}
            <div class="add-new-item" on:click={()=>{
              openAddFood=true
              console.log(1231)
            }}></div>
          {/if}
          
          <div class="">
            <h2>Популярные блюда</h2>
            <p>Толко они доступны для заказа</p>
          </div>

        </div>
      {#each menu as element,index }
        <div class="food-title">
          <h3>{element.title}</h3>
          {#if $settings && $user.id}
            <div class="food-img-delete" on:click={()=>{
              menu.splice(index,1)
              menu=menu
              fetch(`http://127.0.0.1:5000/menu/${element.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              })
                .then(response => response.json())
                .then(data => {
                  console.log(data)
                  // Обработка полученных данных меню
                })
                .catch(error => {
                  // Обработка ошибок
                  console.error('Ошибка при получении меню:', error);
                });
            }}></div>
          {/if}
        </div>
        <div class="row mt-5 food-wrapper">
          {#each element.dishList as el, i }
              <div class="col-md-4 col-sm-6 cursor-pointer " id={el.id}>
                <div class="single-food ">
                  <div class="food-img">
                    {#if $settings && $user.id}
                      <div class="food-img-delete" on:click={()=>{
                        element.dishList.splice(i,1)
                        element.dishList=element.dishList
                        console.log(el)
                          fetch(`http://127.0.0.1:5000/dishes/${el.id}`, {
                            method: 'DELETE',
                            headers: {
                              'Content-Type': 'application/json'
                            }
                          })
                            .then(response => response.json())
                            .then(data => {
                              console.log(data)
                              // Обработка полученных данных меню
                            })
                            .catch(error => {
                              // Обработка ошибок
                              console.error('Ошибка при получении меню:', error);
                            });
                        }}>
                      </div>
                      <img class="food-img-reduct" src="/images/redact.svg" alt=""
                        on:click={()=>{
                          reductFood=true
                          reductItem={...el,
                            selected:true
                          }
                          console.log(reductItem)
                        }}>
                    {/if}
                    
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
{#if reductFood}
  <div class="open-food">
    <div class="open-food__wrap">
      <div class="food-img-delete" on:click={()=>{
        reductFood=false
      }}></div>
          <h3 class="open-food__title">Обновление блюда</h3>
          <div class="open-food__content">
            <span class="open-food__content-text">Путь к картинке</span>
            <input type="text" bind:value={reductItem.image} class="open-food__input" placeholder="https://">
            <span class="open-food__content-text">Название блюда</span>
            <input type="text" bind:value={reductItem.name} class="open-food__input" placeholder="Название блюда">
            <span class="open-food__content-text">Описание блюда</span>
            <input type="text" bind:value={reductItem.title} class="open-food__input" placeholder="Описание блюда">
            <span class="open-food__content-text">Цена блюдаа</span>
            <input type="text" bind:value={reductItem.price} class="open-food__input" placeholder="Цена блюда">
            <span class="open-food__content-text">Граммовка блюда</span>
            <input type="text" bind:value={reductItem.gram} class="open-food__input" placeholder="Граммовка блюда ">
            <span class="open-food__content-text">Категория блюда</span>
            <select class="open-food__input" bind:value={reductItem.type} name="" id="">
              {#each menu  as element }
                <option>{element.title}</option>
              {/each}
            </select>
            <div class="open-food__content-checkbox">
              <span class="open-food__content-text">Отображать блюдо в меню?</span>
              <input type="checkbox" bind:checked={reductItem.selected} class="open-food__content-checkbox-check">
            </div>
          </div>
          <button class="open-food__content-button" on:click={()=>{
            
            console.log(newFood)
            fetch(`http://127.0.0.1:5000/dishes/${reductItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify( {
                  image : reductItem['image'],
                  name : reductItem['name'],
                  title : reductItem['title'],
                  price : reductItem['price'],
                  gram : reductItem['gram'],
                  type : reductItem.type,
                  selected : `${reductItem['selected']}`
                })
                // {
                //   "image": "new_image.svg",
                //   "name": "Новое блюдо",
                //   "title": "Описание нового блюда",
                //   "price": 500,
                //   "gram": 800,
                //   "type": "Горячие блюда",
                //   "selected": "true"
                // }
                })
                .then(response => response.json())
                .then(data => {
                    
                    console.log(data)
                    location. reload()
                    // Обработка полученных данных меню
                })
                .catch(error => {
                    // Обработка ошибок
                    console.error('Ошибка при получении меню:', error);
                });
          }}>Обновить</button>
        
    </div>
</div>
{/if}
{#if openAddFood}
  <div class="open-food">
    <div class="open-food__wrap">
      <div class="food-img-delete" on:click={()=>{
        openAddFood=false
      }}></div>
      <div class="open-food__switch-wrap s-7IPF32Wcq3s8">
        <span class="{openAddFoodType=="food"? "active":""} open-food__switcher" id="food__switch"
        on:click={()=>{
          openAddFoodType="food"
          
        }}>Блюдо</span> 
        <span id="menu__switch" class="{openAddFoodType=="menu"? "active":""} open-food__switcher"
        on:click={()=>{
          openAddFoodType="menu"
        }}>Тип меню</span>
      </div>
        {#if openAddFoodType=="food"}
          <h3 class="open-food__title">Создание блюда</h3>
          <div class="open-food__content">
            <span class="open-food__content-text">Путь к картинке</span>
            <input type="text" bind:value={newFood.image} class="open-food__input" placeholder="https://">
            <span class="open-food__content-text">Название блюда</span>
            <input type="text" bind:value={newFood.name} class="open-food__input" placeholder="Название блюда">
            <span class="open-food__content-text">Описание блюда</span>
            <input type="text" bind:value={newFood.title} class="open-food__input" placeholder="Описание блюда">
            <span class="open-food__content-text">Цена блюдаа</span>
            <input type="text" bind:value={newFood.price} class="open-food__input" placeholder="Цена блюда">
            <span class="open-food__content-text">Граммовка блюда</span>
            <input type="text" bind:value={newFood.gram} class="open-food__input" placeholder="Граммовка блюда ">
            <span class="open-food__content-text">Категория блюда</span>
            <select class="open-food__input" bind:value={newFood.type} name="" id="">
              {#each menu  as element }
                <option>{element.title}</option>
              {/each}
            </select>
            <div class="open-food__content-checkbox">
              <span class="open-food__content-text">Отображать блюдо в меню?</span>
              <input type="checkbox" bind:checked={newFood.selected} class="open-food__content-checkbox-check">
            </div>
          </div>
          <button class="open-food__content-button" on:click={()=>{
            
            console.log(newFood)
            fetch('http://127.0.0.1:5000/dishes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify( {
                  image : newFood['image'],
                  name : newFood['name'],
                  title : newFood['title'],
                  price : newFood['price'],
                  gram : newFood['gram'],
                  type : newFood.type,
                  selected : `${newFood['selected']}`
                })
                })
                .then(response => response.json())
                .then(data => {
                    
                    console.log(data)
                    location. reload()
                    // Обработка полученных данных меню
                })
                .catch(error => {
                    // Обработка ошибок
                    console.error('Ошибка при получении меню:', error);
                });
          }}>Добавить</button>
        {:else if openAddFoodType=="menu"}
          <h3 class="open-food__title">Создание блюда</h3>
          <div class="open-food__content">
            <span class="open-food__content-text">Заголовок меню</span>
            <input type="text" bind:value={menuTitle} class="open-food__input" placeholder="Заголовок меню">
          </div>
          <button class="open-food__content-button" on:click={()=>{
            
            fetch('http://127.0.0.1:5000/menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify( {
                  title:menuTitle
                })
                })
                .then(response => response.json())
                .then(data => {
                    
                    console.log(data)
                    location. reload()
                    // Обработка полученных данных меню
                })
                .catch(error => {
                    // Обработка ошибок
                    console.error('Ошибка при получении меню:', error);
                });
          }}>Добавить</button>
        {:else}
        <h3>Нет доступа</h3>
        {/if}
        
    </div>
</div>
{/if}

  <style>
    .food-title{
      position: relative;
      display: flex;
      gap: 30px;
      justify-content: center;
      align-items: center;
      margin: 60px 0 30px 0;
    }
    .food-title h3{
      margin: 0 !important;
    }
    .food-title .food-img-delete {
      position: relative !important;
      margin-bottom: 12px;
    }
    .open-food__switch-wrap{
      margin-top: 50px;
      display: flex;
      justify-content: center;
      gap: 30px;
    }
    .open-food__switcher{
      padding: 10px 15px 10px 15px;
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid black;
      font-size: 22px;
      font-family: sans-serif;
      cursor: pointer;
    }
    .open-food__switcher.active{
      background-color: #dfdfe9;
    }
    .open-food__content-button{
      width: 300px;
      height: 40px;
      font-size: 22px;
      font-family: sans-serif;
      margin: 20px auto 50px 30px;
      border-radius: 10px;
      background-color: transparent;
    }
    .open-food__title{
      margin: 20px 0 0 20px;
    }
    .open-food__content-checkbox-check{
      width: 25px;
      height: 25px;
      cursor: pointer;
      
    }
    .open-food__content-checkbox{
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
    }
    .open-food__content-text{
      font-size: 22px;
      font-family: sans-serif;
      margin-left: 5px;
    }
    .open-food{
      position: fixed;
      width: 100vw;
      top: 0;
      left: 0;
      z-index: 11;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: rgba(0, 0, 0, .6);

    }
    .open-food__wrap{
      width: 50%;
      position: relative;
      min-height: 100px;
      border-radius: 20px;
      background-color: white;
    }
    .open-food__content{
      margin-top: 20px;
      padding: 20px;
    }
    .open-food__input{
      margin-top: 15px;
      margin-bottom: 30px;
      width: 100%;
      height: 40px;
      border-radius: 10px;
      font-size: 22px;
      padding: 0 10px;
      font-family: sans-serif;
    }
    .add-new-item{
      width: 100px;
      height: 100px;
      position: absolute;
      background-color: #f9f9ff;
      right: 0;
      cursor: pointer;
      border-radius: 50%;
      border: 1px solid black;
      transition: all .3s;
    }
    .add-new-item:hover{
      transform: scale(1.1);
    }
    .add-new-item::before{
      width: 10px;
      transform: rotate(90deg);
      left: 45px;
      top: 23px;
      height: 50px;
      content: " ";
      position: absolute;
      border: 1px solid black;
      border-radius: 10px;
      background-color: #141a14;
    }
    .add-new-item::after{
      width: 10px;
      height: 50px;
      content: " ";
      top: 23px;
      right: 45px;
      position: absolute;
      border: 1px solid black;
      border-radius: 10px;
      background-color: #141a14;
    }
    .food-img-delete{
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 10px;
      width: 30px;
      height: 30px;
      background-color: red;
      z-index: 1;
      transition: all .3s;
      border-radius: 50%;
    }
    .food-img-delete:hover{
      transform: scale(1.2);
    }
    :global(.food-img-delete::before){
      content: " ";
      position: absolute;
      transform: rotate(45deg);
      display: block;
      left: 14px;
      width: 2px;
      top: 5px;
      height: 20px;
      background-color: #fff;
      z-index: 1;
    }
    :global(.food-img-delete::after){
      content: " ";
      display: block;
      transform: rotate(-45deg);
      position: absolute;
      right: 14px;
      width: 2px;
      top: 5px;
      height: 20px;
      background-color: #fff;
      z-index: 1;
    }
    .food-img{
      position: relative;

    }
    .food-img-reduct{
      position: absolute;
      background: white;
      border: 1px solid black;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      left: 10px;
      top: 10px;
      z-index: 1;
      transition: all .3s;
    }
    .food-img-reduct:hover{
      transform: scale(1.3);
    }
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
      position: fixed;
      
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
      height: 20vh;
      background-color: #fff;
      border-radius: 20px;
    }
    .menu-vhod__info{
      display: flex;
      width: 100%;
      height: 100%;
      padding-bottom: 39px;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      font-family: sans-serif;
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
      position: relative;
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