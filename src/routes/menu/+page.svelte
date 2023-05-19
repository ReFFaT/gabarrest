<svelte:head>
</svelte:head>
<script>
	import Wave from "$lib/wave.svelte";

  let menu=[
  {
    id:"1",
    image:"food1.jpg.webp",
    name:"Мексиканские яйца",
    title:"Традиционное мексиканское блюдо с яйцами, приправленное мексиканскими специями и подается в виде ролла.",
    price:750.00,
    amount:1
  },
  {
    id:"2",
    image:"food2.jpg.webp",
    name:"Бургер с курицей",
    title:"Сочный куриный бургер с хрустящей куриной котлетой, свежими овощами и соусом на булочке.",
    price:550.00,
    amount:1
  },
  {
    id:"3",
    image:"food3.jpg.webp",
    name:"Топу Ласанж",
    title:"Топлая и утонченная итальянская лазанья с мясом, сыром и ароматным соусом, приготовленная в слоях.",
    price:870.00,
    amount:1
  },
  {
    id:"4",
    image:"food4.jpg.webp",
    name:"Картофель с перцем",
    title:"Простое и вкусное блюдо из картофеля и перца, приготовленное в сочетании приправ и запеченное до золотистой корочки.",
    price:950.00,
    amount:1
  },
  {
    id:"5",
    image:"food5.jpg.webp",
    name:"Салат с фасолью",
    title:"Освежающий салат с фасолью, свежими овощами и ароматным соусом, создающий идеальное сочетание вкусов и текстур.",
    price:450.00,
    amount:1
  },      
  {
    id:"6",
    image:"food6.jpg.webp",
    name:"Битбол Хоги",
    title:"Битбол Хоги - пикантные свинные фрикадельки, обжаренные до золотистости и подается с соусом.",
    price:650.00,
    amount:1
  },           
  {
    id:"7",
    image:"food7.jpg.webp",
    name:"дес-ерт",
    title:"Будет приятным дополнением для крассного вина",
    price:400.00,
    amount:1
  },
  {
    id:"8",
    image:"food8.jpg.webp",
    name:"Ля-пеньон",
    title:"Экзотическое блюдо прямиком из Франции",
    price:400.00,
    amount:1
  },
  {
    id:"9",
    image:"food9.jpg.webp",
    name:"Летняя кулинария",
    title:"Нежное филе курици по фирменному рецепту шеф-повара",
    price:400.00,
    amount:1
  },
  {
    id:"10",
    image:"food10.jpg.webp",
    name:"нежное воспоминание",
    title:"Сочные блины со сладким соусом",
    price:400.00,
    amount:1
  },
  {
    id:"11",
    image:"food11.jpg.webp",
    name:"Резьба по дереву",
    title:"Сочная рыба на мангале",
    price:400.00,
    amount:1
  },
  {
    id:"12",
    image:"food12.jpg.webp",
    name:"Салат",
    title:"Прекрасный салат из курицы",
    price:400.00,
    amount:1
  },
  ];
  let openmodal=false
  $:openmodal
  let id=0;
  
  let setLocal=(id,count)=>{
  id=--id
  let myhand={
    id:menu[id].id,
    image:menu[id].image,
    name:menu[id].name,
    title:menu[id].title,
    price:menu[id].price,
    amount:count
  }
    if(localStorage.getItem("myEat")==null){
      let storeAdd=[]
      storeAdd[0]=myhand
      localStorage.setItem("myEat",(JSON.stringify(storeAdd)))
    }
    else{
      let check= localStorage.getItem('myEat')
      let checkTrue=true
      check=JSON.parse(check)
      check.forEach((element,i) => {
        if (element.id==myhand.id){
          check[i].amount = check[i].amount + myhand.amount;
          checkTrue=false;
          localStorage.setItem("myEat",(JSON.stringify(check)))
        }
      });
      if(checkTrue==true){
        let findLocal=check
        findLocal[findLocal.length]=myhand
        localStorage.setItem("myEat",(JSON.stringify(findLocal)))
      }
    }
    let check= localStorage.getItem('myEat')
      check=JSON.parse(check)
    console.log(check)
  }
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
        <div class="row mt-5 food-wrapper">
          {#each menu as el, i }
              <div class="col-md-4 col-sm-6 cursor-pointer " id={el.id}>
                <div class="single-food ">
                  <div class="food-img">
                    <img src="/images/menu-image/{el.image}" class="img-fluid" alt="">
                  </div>
                  <div class="food-content">
                    <div class="d-flex justify-content-between">
                      <h5>{el.name}</h5>
                      <span class="style-change">{el.price} р</span>
                    </div>
                    <p class="pt-3">{el.title}</p>
                    <div class="order__count">
                      <button class="btn order" on:click={()=>{
                        let counter =document.getElementById("count-order-"+el.id) 
                        setLocal(Number(el.id),counter.value)
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
    </div>
  </section>

  <style>
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