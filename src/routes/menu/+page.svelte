<script>
  let menu=[{
    id:"1",
    image:"img/single_food_1.png",
    name:"дес-ерт",
    title:"Будет приятным дополнением для крассного вина",
    price:400.00,
    amount:1
  },
  {
    id:"2",
    image:"img/single_food_2.png",
    name:"Ля-пеньон",
    title:"Экзотическое блюдо прямиком из Франции",
    price:400.00,
    amount:1
  },
  {
    id:"3",
    image:"img/single_food_3.png",
    name:"Летняя кулинария",
    title:"Нежное филе курици по фирменному рецепту шеф-повара",
    price:400.00,
    amount:1
  },
  {
    id:"4",
    image:"img/single_food_4.png",
    name:"нежное воспоминание",
    title:"Сочные блины со сладким соусом",
    price:400.00,
    amount:1
  },
  {
    id:"5",
    image:"img/single_food_5.png",
    name:"Резьба по дереву",
    title:"Сочная рыба на мангале",
    price:400.00,
    amount:1
  },
  {
    id:"6",
    image:"img/single_food_6.png",
    name:"Салат",
    title:"Прекрасный салат из курицы",
    price:400.00,
    amount:1
  },
  ];
  let openmodal=false
  $:openmodal
  let id=0;
  
  let setLocal=()=>{

  let myhand={
    id:menu[id].id,
    image:menu[id].image,
    name:menu[id].name,
    title:menu[id].title,
    price:menu[id].price,
    amount:menu[id].amount
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
<section class="food_menu">
    <div class="container">
      {#if openmodal==false}
        <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="section_tittle">
            <h2>Сезонное меню</h2>
            <p>Обновляется каждый сезон</p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="single-member">
            <div class="row">
              <div class="col-sm-6 col-lg-6">
                {#each menu as el, i }
                  {#if i<=2}
                    <div class="single_food_item media" id={el.id} on:click={(e)=>{ 
                      openmodal=true;
                      id= Number(el.id)
                      id=--id
                    }}>
                      <img src={el.image} class="img-responsive" alt="...">
                      <div class="media-body align-self-center">
                        <h3>{el.name}</h3>
                        <p>{el.title}</p>
                        <h5>За {el.price} р</h5>
                      </div>
                    </div>
                  {/if}
                {/each}
              </div>
              <div class="col-sm-6 col-lg-6">
                {#each menu as el, i }
                  {#if i>2}
                    <div class="single_food_item media" id={el.id} on:click={(e)=>{ 
                      openmodal=true;
                      id= Number(el.id)
                      id=--id
                    }}>
                      <img src={el.image} class="img-responsive" alt="...">
                      <div class="media-body align-self-center">
                        <h3>{el.name}</h3>
                        <p>{el.title}</p>
                        <h5>За {el.price} р</h5>
                      </div>
                    </div>
                  {/if}
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
      {:else if openmodal == true}
      <div class="food_menu">
        <div class="wrap">
        <div class="single_food_item media" id={menu[id].id}>
            <img src={menu[id].image} class="img-responsive" alt="...">
            <div class="media-body align-self-center">
              <h3>{menu[id].name}</h3>
              <p>{menu[id].title}</p>
              <h5>За {menu[id].price} р</h5>
            </div>
          </div>
          <button class="btn" on:click={setLocal}>Добавить в корзину</button>
          <button class="btn" on:click={()=>{
            openmodal=false
          }}>Вернуться</button>
        </div>
        </div>
      {/if}
      
    </div>
  </section>

  <style>
    .media{
      cursor: pointer;
    }
  </style>