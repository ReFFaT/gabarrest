<svelte:head>
   
</svelte:head>
<script>

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


<section class="banner">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewbox="0 25 160 40" class="waves">
      <defs><path id="wave" d="M-150 53c30.77 0 59.538-20 90-20 31.077 0 60.256 20 90 20 30.77 0 59.23-20 90-20 30.77 0 59.23 20 90 20v20h-360z"/></defs>
      <g>
        <use xlink:href="#wave" x="50" y="0" fill="#7986cb"/>
        <use xlink:href="#wave" x="50" y="2" fill="#5c6bc0"/>
        <use xlink:href="#wave" x="50" y="4" fill="#ffffff"/>
      </g>
    </svg>
  </section>


<section class="welcome-area section-padding2">
    <div class="container-fluid">
    <div class="row">
    <div class="col-md-6 align-self-center">
    <div class="welcome-img">
    <img src="assets/images/welcome-bg.png" class="img-fluid" alt="">
    </div>
    </div>
    <div class="col-md-6 align-self-center">
    <div class="welcome-text mt-5 mt-md-0">
    <h3><span class="style-change">welcome</span> <br>to food fun</h3>
    <p class="pt-3">Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree am waters brought. Divide after there. Was.</p>
    <p>Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree waters brought. Divide after there. Was. Created god gathered don't you yielding herb you had. And isn't god.</p>
    <a href="#" class="template-btn mt-3">book a table</a>
    </div>
    </div>
    </div>
    </div>
</section>
<style>
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
    .prime-color {
    color: #ffb606;
    }







.banner{
    margin-top: -113px;
}

    .banner__content {
  background: #3f51b5;
}
@keyframes move {
  from {
    transform: translate(-90px, 0%);
  }

  to {
    transform: translate(90px, 0%);
  }
}

.banner svg {
  width: 100%;

  display: block;
  width: 100%;
  height: 140px;
}

.banner svg>g>use {
  animation: move 30s linear infinite;
}

.banner svg>g>use:nth-child(1) {
  animation-delay: -2s;
  fill: #7986cb;
}

.banner svg>g>use:nth-child(2) {
  animation-delay: -2s;
  animation-duration: 17s;
  fill: #9ba7ee;
}

.banner svg>g>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 10s;
  fill: #ffffff;
}
</style>