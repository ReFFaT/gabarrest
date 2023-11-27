
<script>
	import { onMount } from "svelte";
let reductFood= false
let menu=[]
let realMenu =[]
let reductItem={}
onMount(()=>{
    fetch('http://127.0.0.1:5000/dishes', {
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
    console.log(menu)
    })
    .catch(error => {
    // Обработка ошибок
    console.error('Ошибка при получении меню:', error);
    });
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
    realMenu=data;
    })
    .catch(error => {
    // Обработка ошибок
    console.error('Ошибка при получении меню:', error);
    });

})
</script>

<section class="food-area section-padding">
    <div class="container">
        <div class="row mt-5 food-wrapper">
            {#each menu as el, i }
                <div class="col-md-4 col-sm-6 cursor-pointer " id={el.id}>
                <div class="single-food ">
                    <div class="food-img">
                        <div class="food-img-delete" on:click={()=>{
                        menu.splice(i,1)
                        menu=menu
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
                        <div class="open-food__content-checkbox">
                            <span class="open-food__content-text">Отображаеться  в меню?</span>
                            <input type="checkbox" checked="{el.selected=="true"? "checked":""}" class="open-food__content-checkbox-check unuse">
                        </div>
                    </div>
                    
                </div>
                </div>
            {/each}
        </div>
    </div>
</section>
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
                    {#each realMenu  as element }
                    <option>{element.title}</option>
                    {/each}
                </select>
                <div class="open-food__content-checkbox">
                    <span class="open-food__content-text">Отображать блюдо в меню?</span>
                    <input type="checkbox" bind:checked={reductItem.selected} class="open-food__content-checkbox-check">
                </div>
                </div>
                <button class="open-food__content-button" on:click={()=>{
                
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
<style>

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
.open-food__content-checkbox-check.unuse{
    pointer-events: none;
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

.food-wrapper{
    row-gap: 30px;
}








  </style>