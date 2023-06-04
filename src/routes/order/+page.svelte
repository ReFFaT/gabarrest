<script>
	import { onMount } from "svelte";
    import Wave from "$lib/wave.svelte";
	import { user } from "../../store/user";
	import { each, element } from "svelte/internal";
let menu = []
let check=0
onMount(()=>{
    let userId=localStorage.getItem("userId")
    if(Number(userId)>0){
        fetch(`http://127.0.0.1:5000/order/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
            })
            .then(response => response.json())
            .then(data => {
                menu=data
                console.log(data)

                // Обработка полученных данных меню
            })
            .catch(error => {
                // Обработка ошибок
                console.error('Ошибка при получении меню:', error);
            });
    }
    
})
let deleteOrder=(id)=>{
    fetch(`http://127.0.0.1:5000/order/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(response => response.json())
        .then(data => {
            menu.find((element,index)=>{
                if(element.id==id){
                    menu.splice(index, 1);
                    menu=menu
                    return true
                }
            })
            console.log(data)

            // Обработка полученных данных меню
        })
        .catch(error => {
            // Обработка ошибок
            console.error('Ошибка при получении меню:', error);
        });
}
</script>



<section class="banner-area banner-area2 menu-bg text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <h1><i>Ваши заказы</i></h1>
      </div>
    </div>
  </div>
</section>
<Wave />
{#if menu.message || $user.id == undefined}
    <div class="container-info">
        <h1>Заказа нет</h1>
    </div>
{:else}
<section class="food_menu">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="section_tittle">
                    <h2>Заказы</h2>
                </div>
            </div>
            <div class="order">
                {#each menu as element}
                    <div class="order__container" id={element.id}>
                        <div class="order__name">
                            <h5>Имя: {$user.name}</h5>
                            <h5>Телефон: {element.phone}</h5>
                            <h5>Адресс: {element.address}</h5>
                            <h5>Статус: {element.status}</h5>
                            <h5>Время заказа: {element.time}</h5>
                            <button class="order__name-button" on:click={()=>deleteOrder(element.id)}>Удалить заказ</button>
                        </div>
                        <div class="order__list">
                            {#each element.list as el}
                                <div class="order__list-item" id={el.id} >
                                    <img src={el.image} class="img-responsive" alt="...">
                                    <div class="media-body align-self-center">
                                        <h5>{el.name}</h5>
                                        <h5>Цена: {el.price*el.value} р</h5>
                                        <h5>Количетво: {el.value}</h5>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
                
            </div>
        </div>
    </div>
</section>
    
{/if}

<style>
    .order__name{
        border: 1px solid #a5a5be;
        
        border-radius: 30px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin: 0 10px;
    }
    .order__container{
        display: flex;
        gap: 30px;
        margin-bottom: 20px;
        
    }
    .order__container:last-child{
        margin-bottom: 70px;
    }
    .order__name-button{
        width: 100%;
        margin: 20px 0 0 0 ;
        height: 40px;
        border-radius: 10px;
        background-color: transparent;
        font-size: 18px;
        font-weight: 600;
        box-sizing: border-box;
        transition: all .3s;
    }
    .order__name-button:hover{
        background-color:#dfdfe9 !important ;
    }
    .order__list{
        width: 100%;
    }
    .order__list-item{
        background: #f9f9ff;
        height: 100%;
        border-radius: 10px;
    }
    .img-responsive{
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 140px;
        object-fit: cover;
    }
    .media-body{
        padding: 10px;
        
    }
    .order__list{
        border: 1px solid #a5a5be;
        
        border-radius: 30px;
        padding: 20px;
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(3, 1fr);
    }
    .container-info{
        width: 100%;
        text-align: center;
        margin-top: 150px;
    }
    .container-info h1{
        color: black !important;
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
    @media  screen  and (max-width: 1000px) {
        .order__list{
        grid-template-columns: repeat(2, 1fr);
    }
    }
</style>