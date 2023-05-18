<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
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
  .food-area {
    color: #777;
    font-family: "Roboto",sans-serif;
    font-size: 14px;
    font-weight: 400;
}
    h6 {
      color: #fff;
      font-size: 16px !important;
      font-family: "Roboto",sans-serif;
      font-weight: 300;
      text-transform: uppercase;
    }
    h1 {
      color: #fff;
      font-family: "Playfair Display",serif;
      font-size: 60px !important;
      font-weight: 700;
      font-style: italic;
    }
    h3 {
      color: #131230;
      font-family: "Playfair Display",serif;
      font-size: 36px !important;
      font-weight: 700;
    }
    h2 {
        color: #fff;
        font-family: "Playfair Display",serif;
        font-size: 42px !important;
        font-weight: 700;
    }
    h4 {
        color: #fff;
        font-family: "Roboto",sans-serif;
        font-size: 24px !important;
        font-weight: 400;
        font-style: italic;
        text-transform: capitalize;
    }
    h5 {
      color: #131230;
      font-family: "Playfair Display",serif;
      text-transform: capitalize;
      font-size: 20px !important;
      font-weight: 700;
    }
    .section-top .style-change {
      color: #ffb606;
      font-style: italic;
    }
    .img-fluid {
      width: 100%;
      max-width: 100%;
      height: auto;
    }



    .food-area .food-img img {
      -webkit-transition: .5s;
      -moz-transition: .5s;
      -o-transition: .5s;
      transition: .5s;
    }

    .food-area .food-img {
        overflow: hidden;
    }
    .food-area .food-content .style-change {
      color: #ffb606;
      font-family: "Roboto",sans-serif;
      font-size: 20px;
      font-weight: 700;
      -webkit-transition: .5s;
      -moz-transition: .5s;
      -o-transition: .5s;
      transition: .5s;
    }
    .food-area .single-food:hover .food-content p {
      color: #131230;
    }
    .food-area .food-content {
      padding: 30px;
      background: #f9f9ff;
      -webkit-transition: .5s;
      -moz-transition: .5s;
      -o-transition: .5s;
      transition: .5s;
    }
    .food-area .single-food:hover .food-content {
      background: #ffb606;
    }
    .food-area .single-food:hover .food-content .style-change {
      color: #131230;
    }
    .food-area .single-food:hover img {
      -webkit-transform: scale(1.1, 1.1);
      -moz-transform: scale(1.1, 1.1);
      -ms-transform: scale(1.1, 1.1);
      -o-transform: scale(1.1, 1.1);
      transform: scale(1.1, 1.1);
    }
    .main-bg{
        width: 100%;
        background-image: url("/images/banner-bg.jpg.webp");
        background-color: #b0b0b0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        padding: 400px 0 350px;
    }

    .prime-color {
    color: #ffb606;
    }
    .prime-black{
      color: black;
    }
    .section-padding2 {
    padding-top: 70px;
}
.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.align-self-center {
    -ms-flex-item-align: center!important;
    align-self: center!important;
}
.welcome-area .welcome-img {
    padding-left: 10%;
}
.welcome-area .style-change {
    color: #ffb606;
    font-style: italic;
}

.template-btn {
    color: #131230;
    background: #ffb606;
    font-family: "Roboto",sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid transparent;
    display: inline-block;
    padding: 12px 30px !important;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all 0.5s;
}
.welcome-area .welcome-text {
    padding-right: 50%;
}

.section-padding {
    padding: 130px 0;
}

.reservation-area {
    background-image: url(../images/reservation-bg.jpg.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

</style>