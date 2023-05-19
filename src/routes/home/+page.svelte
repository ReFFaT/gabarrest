<svelte:head>
</svelte:head>
<script>
	import Map from "$lib/map.svelte";
import Wave from "$lib/wave.svelte";


</script>


<section>
    <div class="main-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h6>САМАЯ ИНТЕРЕСНАЯ ЕДА В МИРЕ</h6>
                    <h1>Откройте для себя <span class="prime-color">вкус</span><br>
                    <span class="style-change">еды <span class="prime-color">от </span>flavors </span></h1>
                </div>
            </div>
        </div>
    </div>
</section>

<Wave />


  <section class="welcome-area section-padding2">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <div class="welcome-img">
            <img src="/images/welcome-bg.png.webp" class="img-fluid" alt="">
          </div>
        </div>
        <div class="col-md-6 align-self-center">
          <div class="welcome-text mt-5 mt-md-0">
            <h3>
              <span class="style-change">Добро пожаловать</span> <br>в увлекательный мир еды!
            </h3>
            <p class="pt-3">Добро пожаловать в мир вкусовых удовольствий!
              Бог создал все необходимое для вашего благополучия. Он собрал все самые питательные травы и растения. Ничто не ускользает от его внимания. Он владыка всего сущего. Великая шестидневная творческая активность привела к появлению разнообразия на земле. Открытый доступ к источникам питания и пресной воде обеспечивает нашу жизнь. После создания Бог рассмотрел все свое творение и увидел, что оно хорошо.</p>
            <a href="#" class="template-btn mt-3">Заказать столик</a>
          </div>
        </div>
      </div>
    </div>
  </section>




<Wave type={"bottom"}/>



  <div class="reservation-area section-padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Натуральные ингредиенты и вкусная еда</h2>
          <h4 class="mt-4">Предлагаются некоторые модные и популярные курсы</h4>
          <a href="https://homechef-mk.ru/osnovi_kulinarii?gcpc=022c6" class="template-btn template-btn2 mt-4">БРОНИРОВАНИЕ</a>
        </div>
      </div>
    </div>
  </div>
<Wave />

  <section class="food-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="section-top">
            <h3>
              <span class="style-change">Мы служим</span> <br>вкусной еде
            </h3>
            <p class="pt-3">Наше обновленное сезонное меню.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="single-food">
            <div class="food-img">
              <img src="/images/menu-image/food1.jpg.webp" class="img-fluid" alt="">
            </div>
            <div class="food-content">
              <div class="d-flex justify-content-between">
                <h5>Мексиканские яйца</h5>
                <span class="style-change">750 р</span>
              </div>
              <p class="pt-3">Традиционное мексиканское блюдо с яйцами, приправленное мексиканскими специями и подается в виде ролла.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="single-food mt-5 mt-sm-0">
            <div class="food-img">
              <img src="/images/menu-image/food2.jpg.webp" class="img-fluid" alt="">
            </div>
            <div class="food-content">
              <div class="d-flex justify-content-between">
                <h5>Бургер с курицей</h5>
                <span class="style-change">550 р</span>
              </div>
              <p class="pt-3">Сочный куриный бургер с хрустящей куриной котлетой, свежими овощами и соусом на булочке.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="single-food mt-5 mt-md-0">
            <div class="food-img">
              <img src="/images/menu-image/food3.jpg.webp" class="img-fluid" alt="">
            </div>
            <div class="food-content">
              <div class="d-flex justify-content-between">
                <h5>Топу Ласанж</h5>
                <span class="style-change">870 р</span>
              </div>
              <p class="pt-3">Топлая и утонченная итальянская лазанья с мясом, сыром и ароматным соусом, приготовленная в слоях.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="single-food mt-5">
            <div class="food-img">
              <img src="/images/menu-image/food4.jpg.webp" class="img-fluid" alt="">
            </div>
            <div class="food-content">
              <div class="d-flex justify-content-between">
                <h5>Картофель с перцем</h5>
                <span class="style-change">950 р</span>
              </div>
              <p class="pt-3">Простое и вкусное блюдо из картофеля и перца, приготовленное в сочетании приправ и запеченное до золотистой корочки.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="single-food mt-5">
            <div class="food-img">
              <img src="/images/menu-image/food5.jpg.webp" class="img-fluid" alt="">
            </div>
            <div class="food-content">
              <div class="d-flex justify-content-between">
                <h5>Салат с фасолью</h5>
                <span class="style-change">450 р</span>
              </div>
              <p class="pt-3">Освежающий салат с фасолью, свежими овощами и ароматным соусом, создающий идеальное сочетание вкусов и текстур.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="single-food mt-5">
            <div class="food-img">
              <img src="/images/menu-image/food6.jpg.webp" class="img-fluid" alt="">
            </div>
            <div class="food-content">
              <div class="d-flex justify-content-between">
                <h5>Битбол Хоги</h5>
                <span class="style-change">650 р</span>
              </div>
              <p class="pt-3">Битбол Хоги - пикантные свинные фрикадельки, обжаренные до золотистости и подается с соусом.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<Map />




<style>
  
</style>