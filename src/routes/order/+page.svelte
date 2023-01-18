<script>
	import { onMount } from "svelte";
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
                    <div class="row">
                        <div class="col">
                            {#each menu.orderMenu as el, i }
                                <div class="single_food_item media" id={el.id} >
                                    <img src={el.image} class="img-responsive" alt="...">
                                    <div class="media-body align-self-center">
                                        <h3>{el.name}</h3>
                                        <h5>Цена: {el.price} р</h5>
                                        <h5>Количетво: {el.amount}</h5>
                                    </div>
                                </div>
                            {/each}
                            <h2>Всего: {check} р</h2>
                            <h2>Забронированый стол: {menu.table} </h2>
                            <button class="btn" on:click={clearOrder}>Отменить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    
{/if}