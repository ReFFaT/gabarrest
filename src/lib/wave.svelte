<script>
    export let type ="top"
</script>


{#if type=="top"}
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
{/if}
{#if type=="bottom"}
<section class="banner bottom">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewbox="0 25 160 40" class="waves bottom">
      <defs><path id="wave" d="M-150 53c30.77 0 59.538-20 90-20 31.077 0 60.256 20 90 20 30.77 0 59.23-20 90-20 30.77 0 59.23 20 90 20v20h-360z"/></defs>
      <g>
        <use xlink:href="#wave"   x="50" y="0" fill="#7986cb"/>
        <use xlink:href="#wave"   x="50" y="2" fill="#5c6bc0"/>
        <use xlink:href="#wave"   x="50" y="4" fill="#fff"/>
      </g>
    </svg>
</section>
{/if}


<style>
.waves.bottom{
  transform: rotateX(180deg);
  margin-bottom: -100px;
}
.banner{
    margin-top: -115px;
}
.banner.bottom{
  position: relative;
  z-index: 1;
    margin-top: 20px;
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
  fill: #7987cb88;
}

.banner svg>g>use:nth-child(2) {
  animation-delay: -2s;
  animation-duration: 17s;
  fill: #9ba7ee93;
}

.banner svg>g>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 10s;
  /* fill: #ffffff; */
}
</style>




