<script>
    export let redactFood=false
    export let redactItem={}
    export let menu = [];
</script>


<div class="open-food">
    <div class="open-food__wrap">
        <div class="food-img-delete" on:click={()=>redactFood=false}></div>
        <h3 class="open-food__title">Обновление блюда</h3>
        <div class="open-food__content">
            <div class="">
                <span class="open-food__content-text">Путь к картинке</span>
                <input type="text" bind:value={redactItem.image} class=" menu__input" placeholder="https://">
            </div>
            <div class="">
                <span class="open-food__content-text">Название</span>
                <input type="text" bind:value={redactItem.name} class=" menu__input" placeholder="Название">    
            </div>
            <div class="">
                <span class="open-food__content-text">Описание </span>
                <input type="text" bind:value={redactItem.title} class=" menu__input" placeholder="Описание ">
            </div>
            <div class="">
                <span class="open-food__content-text">Цена </span>
                <input type="text" bind:value={redactItem.price} class=" menu__input" placeholder="Цена ">
            </div>
            <div class="">
                <span class="open-food__content-text">Граммовка </span>
                <input type="text" bind:value={redactItem.gram} class=" menu__input" placeholder="Граммовка  ">
            </div>
            <div class="">
                <span class="open-food__content-text">Категория </span>
                <select class=" menu__input" bind:value={redactItem.type} name="" id="">
                    {#each menu  as element }
                    <option>{element.title}</option>
                    {/each}
                </select>
            </div>
        </div>
        <label class="open-food__content-checkbox">
            <span class="open-food__content-text">Отображать блюдо в меню?</span>
            <input type="checkbox" bind:checked={redactItem.selected} class="open-food__content-checkbox-check">
        </label>
        <button class="open-food__content-button menu__button" on:click={()=>{
            fetch(`http://127.0.0.1:5000/dishes/${redactItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify( {
                    image : redactItem['image'],
                    name : redactItem['name'],
                    title : redactItem['title'],
                    price : redactItem['price'],
                    gram : redactItem['gram'],
                    type : redactItem.type,
                    selected : `${redactItem['selected']}`
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
            }}
            >Обновить
        </button>
    </div>
</div>


<style>
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
        position: relative;
        min-height: 100px;
        border-radius: 20px;
        background-color: white;
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
    .open-food__title{
        font-family: sans-serif;
        margin:0;
        margin-top: 30px;
        margin-left: 20px;
    }
    .open-food__content{
        margin-top: 20px;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 25px;
        row-gap: 10px;
    }
    .open-food__content-text{
        margin-bottom: 10px;
        display: block;
        margin-top: 10px;
        font-size: 22px;
        font-family: sans-serif;
        margin-left: 5px;
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
    .open-food__content-checkbox{
        display: flex;
        margin-left: 20px;
        cursor: pointer;
        align-items: center;
        gap: 20px;
    }
    .open-food__content-checkbox-check{
        width: 25px;
        height: 25px;
        cursor: pointer;
        
    }
    .menu__button{
        font-family: sans-serif;
        height: 40px;
        border:none;
        padding: 0 15px;
        background-color: #ffb606;
        border-radius: 20px;
        transition: all .3s;
    }
    .menu__button:hover{
        background-color: rgb(234, 234, 234);
    }
    .open-food__content-button{
        width: 150px;
        height: 40px;
        padding: 0 0 2px 0;
        font-size: 22px;
        margin: 20px auto 50px 30px;
    }
    .menu__input{
        padding: 0 15px;
        height: 40px;
        border-radius: 20px;
        width: 100%;
        border:0;
        outline: none;
        font-family: sans-serif;
        font-size: 20px;
        box-shadow:0 0 15px 4px rgba(0, 0, 0, 0.321);
    }
</style>