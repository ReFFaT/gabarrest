
<script>
	import { onMount } from "svelte";
    import Wave from "$lib/wave.svelte";
	import { user } from "../../store/user";
	import { element } from "svelte/internal";


    let userAdress=""
    let userphone=""

    let menu=[]
    let check=0
    let clearStore = ()=>{
        console.log(1311)
        localStorage.setItem("preOrder","[]")
        menu = [ ]
    }
    let deleteItem =(e)=>{
        menu.forEach((element,i)=>{
            let parent= e.target.parentNode.parentNode.id
            if(element.id == parent ){
                menu.splice(i,1)
                menu=menu
            }
            localStorage.setItem("preOrder",(JSON.stringify(menu)))
            if(menu.length==0){
                menu=[]
            }
            
        })
        check=0
        menu.forEach(e=>{
            check=check + e.price*e.value;
        })
        console.log(menu)
    }
    let confirm =()=>{
        let order=menu.map(element=>{
            return {"id":element.id, "value":element.value} 
        })
        let today = new Date();
        console.log(order)
        fetch('http://127.0.0.1:5000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( {
                "user_id": localStorage.getItem("userId"),
                "address": userAdress,
                "time": today.toLocaleString(),
                "list": [
                    ...order
                ],
                "phone":userphone,
                "status":"waiting"
            })
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
        localStorage.setItem("order",(JSON.stringify(order)))
        menu=[]
        localStorage.setItem("preOrder","[]")
    }

    $:menu
    onMount(()=>{
        const localStor = localStorage.getItem("preOrder")
        if (localStor == null){
            menu=[]
        }
        else{
            menu = JSON.parse(localStor)
            console.log(menu)
        }
        menu.forEach(e=>{
            check=check + e.price*e.value;
        })
    })
</script>


<section class="banner-area banner-area2 menu-bg text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <h1 class="container__title"><i>Ваша корзина</i></h1>
      </div>
    </div>
  </div>
</section>
<Wave />
    {#if menu.length==0 || $user.id == undefined}
    <div class="container-info">
        <h1>Корзина пуста</h1>
    </div>
    {:else}
        <section class="food_menu">
        <div class="">
            <div class="row justify-content-center">
            <div class="col-lg-5">
            <div class="section_tittle">
                <h2>Корзина</h2>
            </div>
            </div>
            <div class="col-lg-12">
            <div class="single-member">
                <div class=" pb-5">
                    <div class="preorder">
                        {#each menu as el, i }
                            <div class="single_food_item media" id={el.id} >
                                <img src={el.image} class="img-responsive" alt="...">
                                <div class="media-body align-self-center">
                                    <h3>{el.name}</h3>
                                    <h5>Цена: {el.price*el.value} р</h5>
                                    <h5>Количетво: {el.value}</h5>
                                    <h5 style="cursor: pointer;" on:click={(e)=>{deleteItem(e)}}>удалить</h5>
                                </div>
                            </div>
                        {/each}
                    </div>
                    <div class="preorder__wrapper">
                        <h2>Всего: {check} р</h2>
                        <h3>Укажите ваш адрес и номер телефона</h3>
                        <input name="" type="text" class="form-input" bind:value={userAdress} placeholder="Номер телефона"/>
                        <input name="" type="text" class="form-input" bind:value={userphone} placeholder="Адресс"/>
                        <button class="btn" on:click={clearStore}>Очистить корзину</button>
                        <button class="btn mb-5" on:click={confirm}>Заказать</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    </section>
    {/if}
<style>
    .container-info{
        width: 100%;
        text-align: center;
        margin-top: 150px;
    }
    .container__title{
        position: relative;
        z-index: 10;
    }
    .container-info h1{
        color: black !important;
    }
    .preorder__wrapper{
        margin-top: 40px;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .preorder__wrapper select{
        max-width: 300px;
        border: 1px solid black;
    }
    .preorder__wrapper h2{
        color: black !important;
    }
    .form-input{
        border-radius: 10px;
        width: 350px;
        font-size: 18px;
        height: 50px;
        margin: 10px 0 10px 0;
        padding: 0 10px 2px 10px;
    }
    .btn{
        padding: 5px 10px;
        border-radius: 10px;
        border: 1px solid black;
        width: 350px;
        font-size: 22px;
        margin: 10px 10px 0 10px;
        height: min-content;
    }
    .preorder{
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: min-content;
        gap: 20px;
    }
    .img-responsive{
        width: 416px;
        min-height: 344px;
        max-height: 344px;
        object-fit: cover;
    }
    .single_food_item {
        display: flex;
        width: min-content;
        flex-direction: column;
    }
    .media-body{
        height: 100%;
        width: 100%;
        padding: 30px;
        background: #f9f9ff;
    }

    .banner-area2 {
        padding: 210px 0 160px;
        background-image: url(/images/about-bg.jpg.webp);
        background-size: 100% 100%;
        position: relative;
        z-index: 1;
    }
    .banner-area2::before {
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, .6);
    }
</style>

