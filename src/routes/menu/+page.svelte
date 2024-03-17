<script>
	import DeleteIcon from './../../lib/menu/deleteIcon/deleteIcon.svelte';
	import MenuBanner from '../../lib/menu/menuBanner/menuBanner.svelte';
	import Wave from '$lib/wave.svelte';
	import { onMount } from 'svelte';
	import { settings } from '../../store/settingsMod';
	import { each } from 'svelte/internal';
	import { user } from '../../store/user';
	import RedactMenu from '$lib/menu/redactMenu/redactMenu.svelte';
	import AddFood from '$lib/menu/addFood/addFood.svelte';

	let menuModal = false;
	let menu = [];
	let openAddFood = false;
	let reductFood = false;
	let openAddFoodType = 'food';

	let reductItem = {};

	let openmodal = false;
	$: openmodal;
	let id = 0;

	let setLocal = (id, count) => {
		let preOrder = JSON.parse(localStorage.getItem('preOrder', id) ?? '[]');
		let isfind = false;
		console.log(preOrder);
		preOrder.find((element) => {
			if (element.id == id) {
				element.value = Number(element.value);
				element.value += Number(count);
				isfind = true;
				return true;
			}
		});
		if (!isfind) {
			menu.forEach((e) => {
				e.dishList.find((element) => {
					if (element.id == id) {
						let thisElement = element;
						thisElement.value = count;
						preOrder.push(thisElement);
					}
				});
			});
		}
		console.log(preOrder);
		localStorage.setItem('preOrder', JSON.stringify(preOrder));
	};

  
  function deleteMenuTitle(menu,title,index){
    menu.splice(index, 1);
    menu = menu;
    fetch(`http://127.0.0.1:5000/menu/${title.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Обработка полученных данных меню
    })
    .catch((error) => {
      // Обработка ошибок
      console.error('Ошибка при получении меню:', error);
    });
    return menu
  }

  function deleteMenuItem(menu,dish,index){
    menu.dishList.splice(index, 1);
    menu.dishList = menu.dishList;
    console.log(dish);
    fetch(`http://127.0.0.1:5000/dishes/${dish.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Обработка полученных данных меню
    })
    .catch((error) => {
      // Обработка ошибок
      console.error('Ошибка при получении меню:', error);
    });
    return menu
  }

	onMount(() => {
		fetch('http://127.0.0.1:5000/menu', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				// Обработка полученных данных меню
				menu = data;
			})
			.catch((error) => {
				// Обработка ошибок
				console.error('Ошибка при получении меню:', error);
			});
	});
</script>

<svelte:head></svelte:head>
<MenuBanner />
<Wave />
<section class="food-area section-padding">
	<div class="container">
		<div class="menu-title">
			{#if $settings && $user.id}
				<div
					class="add-new-item"
					on:click={() => {
						openAddFood = true;
						console.log(1231);
					}}
				></div>
			{/if}
		</div>
		{#each menu as element, index}
			<div class="food-title">
				<h3>{element.title}</h3>
				{#if $settings && $user.id}
					<DeleteIcon
						btnClick={() => menu = deleteMenuTitle(menu,element,index)}
					/>
				{/if}
			</div>
			<div class="row mt-5 food-wrapper">
				{#each element.dishList as el, i}
					<div class="col-md-4 col-sm-6 cursor-pointer" id={el.id}>
						<div class="single-food">
							<div class="food-img">
								{#if $settings && $user.id}
									<DeleteIcon
										btnClick={() => element = deleteMenuItem(element , el, i)}
									/>
									<img
										class="food-img-reduct"
										src="/images/redact.svg"
										alt=""
										on:click={() => {
											reductFood = true;
											reductItem = { ...el, selected: true };
											console.log(reductItem);
										}}
									/>
								{/if}

								<img src={el.image} class="img-fluid" alt="" />
							</div>
							<div class="food-content">
								<div class="d-flex justify-content-between">
									<h5 style="font-family: sans-serif;">{el.name}</h5>
									<div class="food-content__title">
										<span class="card-menu-text">{el.price} р</span>
										<span class="card-menu-text">за {el.gram} г</span>
									</div>
								</div>
								<p class="pt-3 card-menu-description">{el.title}</p>
								<div class="order__count">
									<button
										class="btn order"
										on:click={() => {
											if ($user.authorized) {
												console.log($user);
												let counter = document.getElementById('count-order-' + el.id);
												setLocal(Number(el.id), counter.value);
											} else {
												menuModal = true;
											}
										}}>Добавить в корзину</button
									>
									<select name="" id="count-order-{el.id}" class="order-count-select">
										{#each Array(10) as arr, i}
											<option value={i + 1}>{i + 1}</option>
										{/each}
									</select>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</section>
{#if menuModal}
	<div class="menu-vhod">
		<div class="menu-vhod__wrapper">
			<div class="menu-vhod__close" on:click={() => (menuModal = false)}>
				<button class="menu__button">Закрыть</button>
			</div>
			<div class="menu-vhod__info">
				<span>Пожалуста, Войдите перед заказом</span>
			</div>
		</div>
	</div>
{/if}
{#if reductFood}
	<RedactMenu bind:redactFood={reductFood} bind:redactItem={reductItem} {menu} />
{/if}
{#if openAddFood}
	<AddFood bind:openAddFood bind:openAddFoodType {menu} />
{/if}

<style>
  .card-menu-text{
    font-size: 16px;
    font-family: sans-serif;
    color: black;
    font-weight: 600;
  }
  .card-menu-description{
    font-size: 16px;
    font-family: sans-serif;
    color: black;
    font-weight: 400;
  }
	.menu__button {
		font-family: sans-serif;
		height: 40px;
		border: none;
		padding: 0 15px;
		background-color: #ffb606;
		border-radius: 20px;
		transition: all 0.3s;
	}
	.menu__button:hover {
		background-color: rgb(234, 234, 234);
	}

	.food-title {
		position: relative;
		display: flex;
		gap: 30px;
		justify-content: center;
		align-items: center;
		margin: 60px 0 30px 0;
	}
	.food-title h3 {
		margin: 0 !important;
	}
	:global(.food-title .food-img-delete) {
		position: relative !important;
		margin-bottom: 12px;
	}

	.add-new-item {
		width: 100px;
		height: 100px;
		position: absolute;
		background-color: #f9f9ff;
		right: 0;
		cursor: pointer;
		border-radius: 50%;
		border: 1px solid black;
		transition: all 0.3s;
	}
	.add-new-item:hover {
		transform: scale(1.1);
	}
	.add-new-item::before {
		width: 10px;
		transform: rotate(90deg);
		left: 45px;
		top: 23px;
		height: 50px;
		content: ' ';
		position: absolute;
		border: 1px solid black;
		border-radius: 10px;
		background-color: #141a14;
	}
	.add-new-item::after {
		width: 10px;
		height: 50px;
		content: ' ';
		top: 23px;
		right: 45px;
		position: absolute;
		border: 1px solid black;
		border-radius: 10px;
		background-color: #141a14;
	}
	.food-img {
		position: relative;
    border-radius: 20px 20px 0 0;
	}
	.food-img-reduct {
		position: absolute;
		background: white;
		border: 1px solid black;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		left: 10px;
		top: 10px;
		z-index: 1;
		transition: all 0.3s;
	}
	.food-img-reduct:hover {
		transform: scale(1.3);
	}
	.food-content__title {
		display: flex;
		align-items: end;
		flex-direction: column;
	}
	.container h3 {
		text-align: center;
		margin: 60px 0 30px 0;
	}
	.menu-vhod {
		background-color: rgba(0, 0, 0, 0.6);
		position: fixed;

		width: 100%;
		height: 100%;
		top: 0;
		display: flex;
		justify-content: center;
		left: 0;
		z-index: 15;
	}
	.menu-vhod__wrapper {
		margin-top: 35vh;
		padding: 25px;
		width: 50vw;
		height: 20vh;
		background-color: #fff;
		border-radius: 20px;
	}
	.menu-vhod__info {
		display: flex;
		width: 100%;
		height: 100%;
		padding-bottom: 70px;
		justify-content: center;
		align-items: center;
		font-size: 28px;
		font-family: sans-serif;
	}
	.menu-vhod__close {
		width: min-content;
		cursor: pointer;
		margin-left: auto;
	}
	.single-food {
		display: flex;
		flex-direction: column;
    border-radius: 20px;
		height: 100%;
	}
	.food-content {
		flex-grow: 1;
		display: flex;
    border-radius: 0 0 20px 20px;
		flex-direction: column;
	}
	.food-content .order__count {
		margin-top: auto;
	}
	.food-wrapper {
		row-gap: 30px;
	}

	.food-area .single-food:hover .food-content .btn.order {
		background-color: #fff;
		color: black;
	}
	.order__count {
		display: flex;
		gap: 5px;
		width: 100%;
		justify-content: space-between;
	}
	.btn.order:hover {
		background-color: #dfdfe9 !important;
	}
	.order-count-select {
		border-radius: 10px;
    border: none;
		width: 50px;
    outline: none;
		height: 50px;
		padding: 0 0 0 7px;
		cursor: pointer;
		transition: all 0.3s;
	}
	.order-count-select:hover {
		background-color: #dfdfe9 !important;
	}
	.menu-title {
		position: relative;
		text-align: center;
		display: block;
		margin: 0 auto;
	}
</style>
