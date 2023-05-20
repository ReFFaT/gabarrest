<script>
	import { onMount } from "svelte";
    import Wave from "$lib/wave.svelte";
let menu = null
let check=0
onMount(()=>{
    if(localStorage.getItem("order")!=null && localStorage.getItem("order")!=' '){
        const localStor = localStorage.getItem("order")
        menu = JSON.parse(localStor)
        console.log(menu.orderMenu)
        menu.orderMenu.forEach(e=>{
            check=check + e.price*e.amount;
        })
    }
})
let clearOrder=()=>{
    localStorage.setItem("order"," ")
    console.log(localStorage.getItem("order"))
    menu=null
}
$:menu
</script>



<section class="banner-area banner-area2 menu-bg text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <h1><i>Ваш заказ</i></h1>
      </div>
    </div>
  </div>
</section>
<Wave />
{#if menu==null}
    <div class="container-info">
        <h1>Заказа нет</h1>
    </div>
{:else}
<section class="food_menu">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="section_tittle">
                    <h2>Заказ</h2>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="single-member">
                    <div class="row pb-5">
                        <div class="preorder">
                            {#each menu.orderMenu as el, i }
                                <div class="single_food_item media" id={el.id} >
                                    <img src=/images/menu-image/{el.image} class="img-responsive" alt="...">
                                    <div class="media-body align-self-center">
                                        <h3>{el.name}</h3>
                                        <h5>Цена: {el.price} р</h5>
                                        <h5>Количетво: {el.amount}</h5>
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <div class="preorder__wrapper mb-5 mt-5">
                            <h3>Всего: {check} р</h3>
                            <h3>Забронированый стол: {menu.table} </h3>
                            <button class="btn" on:click={clearOrder}>Отменить заказ</button>
                        </div>
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