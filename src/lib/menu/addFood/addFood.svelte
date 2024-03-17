<script>
    export let openAddFood=false
    export let openAddFoodType="food"
    let menuTitle=""
    let newFood={
        "image": "",
        "name": "",
        "title": "",
        "price": 0,
        "gram": 0,
        "type": "",
        "selected": false
    }
    export let menu=[];
</script>

<div class="open-food">
	<div class="open-food__wrap">
		<div
			class="food-img-delete"
			on:click={() => {
				openAddFood = false;
			}}
		></div>
		<div class="open-food__switch-wrap">
			<h3 class="open-food__title">Создание</h3>
			<span
				class="{openAddFoodType == 'food' ? 'active' : ''} open-food__switcher"
				id="food__switch"
				on:click={() => {
					openAddFoodType = 'food';
				}}>Блюда</span
			>
			<button
				id="menu__switch"
				class="{openAddFoodType == 'menu' ? 'active' : ''} open-food__switcher"
				on:click={() => {
					openAddFoodType = 'menu';
				}}>Типа меню</button
			>
		</div>
		{#if openAddFoodType == 'food'}
			<div class="open-food__content">
				<div class="">
					<span class="open-food__content-text">Путь к картинке</span>
					<input
						type="text"
						bind:value={newFood.image}
						class=" menu__input"
						placeholder="https://"
					/>
				</div>
				<div class="">
					<span class="open-food__content-text">Название блюда</span>
					<input
						type="text"
						bind:value={newFood.name}
						class=" menu__input"
						placeholder="Название блюда"
					/>
				</div>
				<div class="">
					<span class="open-food__content-text">Описание блюда</span>
					<input
						type="text"
						bind:value={newFood.title}
						class=" menu__input"
						placeholder="Описание блюда"
					/>
				</div>
				<div class="">
					<span class="open-food__content-text">Цена блюдаа</span>
					<input
						type="text"
						bind:value={newFood.price}
						class=" menu__input"
						placeholder="Цена блюда"
					/>
				</div>

				<div class="">
					<span class="open-food__content-text">Граммовка блюда</span>
					<input
						type="text"
						bind:value={newFood.gram}
						class=" menu__input"
						placeholder="Граммовка блюда "
					/>
				</div>
				<div class="">
					<span class="open-food__content-text">Категория блюда</span>
					<select class="menu__input" bind:value={newFood.type} name="" id="">
						{#each menu as element}
							<option>{element.title}</option>
						{/each}
					</select>
				</div>
				<div class="open-food__content-checkbox">
					<span class="open-food__content-text">Отображать блюдо в меню?</span>
					<input
						type="checkbox"
						bind:checked={newFood.selected}
						class="open-food__content-checkbox-check"
					/>
				</div>
			</div>
			<button
				class="open-food__content-button menu__button"
				on:click={() => {
					console.log(newFood);
					fetch('http://127.0.0.1:5000/dishes', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							image: newFood['image'],
							name: newFood['name'],
							title: newFood['title'],
							price: newFood['price'],
							gram: newFood['gram'],
							type: newFood.type,
							selected: `${newFood['selected']}`
						})
					})
						.then((response) => response.json())
						.then((data) => {
							console.log(data);
							location.reload();
							// Обработка полученных данных меню
						})
						.catch((error) => {
							// Обработка ошибок
							console.error('Ошибка при получении меню:', error);
						});
				}}>Добавить</button
			>
		{:else if openAddFoodType == 'menu'}
			<div class="open-food__content">
				<div class="">
					<span class="open-food__content-text">Заголовок меню</span>
					<input
						type="text"
						bind:value={menuTitle}
						class=" menu__input"
						placeholder="Заголовок меню"
					/>
				</div>
			</div>
			<button
				class="open-food__content-button menu__button"
				on:click={() => {
					fetch('http://127.0.0.1:5000/menu', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							title: menuTitle
						})
					})
						.then((response) => response.json())
						.then((data) => {
							console.log(data);
							location.reload();
							// Обработка полученных данных меню
						})
						.catch((error) => {
							// Обработка ошибок
							console.error('Ошибка при получении меню:', error);
						});
				}}>Добавить</button
			>
		{:else}
			<h3>Нет доступа</h3>
		{/if}
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
.open-food__switch-wrap{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 30px;
}
.menu-title h2{
    color: black !important;
}
.open-food__switcher{
    border-radius: 10px;
    font-size: 22px;
    font-family: sans-serif;
    cursor: pointer;
    border:none;
    padding: 5px 15px;
    border-radius: 20px;
    background-color: #dfdfe9;
    transition: all .3s;
}
.open-food__switcher.active{
    background-color: #ffb606;
}
.open-food__content-button{
    width: 150px;
    height: 40px;
    padding: 0 0 2px 0;
    font-size: 22px;
    margin: 20px auto 50px 30px;
}
.open-food__title{
    font-family: sans-serif;
    margin:0;
}
.open-food__content-checkbox-check{
    width: 25px;
    height: 25px;
    cursor: pointer;
    
}
.open-food__content-checkbox{
    display: flex;
    align-items: center;
    gap: 20px;
}
.open-food__content-text{
    margin-bottom: 10px;
    display: block;
    margin-top: 10px;
    font-size: 22px;
    font-family: sans-serif;
    margin-left: 5px;
}

.open-food__content{
    margin-top: 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
    row-gap: 10px;
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
</style>
