
<script>
	import { onMount } from "svelte";
    let menu=[]
    let check=0
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
    })
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
</script>



    {#if menu.length==0}

    <div class="container-info">
        <h1>Корзина пуста</h1>
    </div>
    {:else}
        <section class="food_menu">
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-lg-5">
            <div class="section_tittle">
                <h2>Корзина</h2>
            </div>
            </div>
            <div class="col-lg-12">
            <div class="single-member">
                <div class="row">
                <div class="col">
                    {#each menu as el, i }
                        <div class="single_food_item media" id={el.id} >
                            <img src={el.image} class="img-responsive" alt="...">
                            <div class="media-body align-self-center">
                                <h3>{el.name}</h3>
                                <h5>Цена: {el.price} р</h5>
                                <h5>Количетво: {el.amount}</h5>
                                <h5 style="cursor: pointer;" on:click={(e)=>{deleteItem(e)}}>удалить</h5>
                            </div>
                        </div>
                    {/each}
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
                    <button class="btn" on:click={confirm}>Заказать</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    </section>
    {/if}


