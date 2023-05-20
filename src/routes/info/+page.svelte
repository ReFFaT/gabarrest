
<script>
	import { onMount } from "svelte";
    import Wave from "$lib/wave.svelte";
    let menu=[]
    let check=0
    let clearStore = ()=>{
        console.log(1311)
        localStorage.setItem("myEat","[]")
        menu = [ ]
    }
    let deleteItem =(e)=>{
        menu.forEach((element,i)=>{
            let parent= e.target.parentNode.parentNode.id
            if(element.id == parent ){
                menu.splice(i,1)
                menu=menu
            }
            localStorage.setItem("myEat",(JSON.stringify(menu)))
            if(menu.length==0){
                menu=[]
            }
            
        })
        check=0
        menu.forEach(e=>{
            check=check + e.price*e.amount;
        })
        
    }
    let confirm =()=>{
        let order={
            orderMenu:menu,
            table:select,
        }
        localStorage.setItem("order",(JSON.stringify(order)))
        menu=[]
        localStorage.setItem("myEat","[]")
    }
    let select;
    $:select;
    $:menu
    onMount(()=>{
        const localStor = localStorage.getItem("myEat")
        if (localStor == null){
            menu=[]
        }
        else{
            menu = JSON.parse(localStor)
        }
        menu.forEach(e=>{
            check=check + e.price*e.amount;
        })
        if(localStorage.getItem("vxod")!=="true"){
            menu=[]
        }
    })
</script>


<section class="banner-area banner-area2 menu-bg text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <h1><i>Ваша корзина</i></h1>
      </div>
    </div>
  </div>
</section>
<Wave />
    {#if menu.length==0}
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
                                <img src=/images/menu-image/{el.image} class="img-responsive" alt="...">
                                <div class="media-body align-self-center">
                                    <h3>{el.name}</h3>
                                    <h5>Цена: {el.price*el.amount} р</h5>
                                    <h5>Количетво: {el.amount}</h5>
                                    <h5 style="cursor: pointer;" on:click={(e)=>{deleteItem(e)}}>удалить</h5>
                                </div>
                            </div>
                        {/each}
                    </div>
                    <div class="preorder__wrapper">
                        <h2>Всего: {check} р</h2>
                        <h3>Забронировать стол</h3>
                        <select name="" class="form-select" bind:value={select}>
                            <option value="1" selected>Стол 1</option>
                            <option value="2">Стол 2</option>
                            <option value="3">Стол 3</option>
                            <option value="4">Стол 4</option>
                            <option value="5">Стол 5</option>
                            <option value="6">Стол 6</option>
                        </select>
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
    .container-info h1{
        color: black !important;
    }
    .preorder__wrapper{
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
    .form-select{
        height: 40px;
        margin: 10px 0 10px 0;
        cursor: pointer;
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
        height: 344px;
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

