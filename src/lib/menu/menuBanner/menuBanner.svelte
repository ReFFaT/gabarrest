<script>

</script>


<section class="banner-area banner-area-second menu-bg text-center">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1><i>Наше меню</i></h1>
                <p class="pt-2"><i>Тайна ночи: Бескомпромиссная сила животного мира, окутанная мраком.</i></p>
            </div>
        </div>
    </div>
</section>

<style>
    .banner-area > div{
        position: relative;
        z-index: 2;
    }
    .banner-area-second p {
        color: #fff;
    }
    .banner-area-second::before {
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, .7);
    }
    .menu-bg {
        background-image: url(/images/menu-bg.jpg.webp);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
        padding: 210px 0 160px;
    }
</style>