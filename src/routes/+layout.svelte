<svelte:head>
  <link rel="stylesheet" href="/css/bootstrap.min.css" media="screen">
		<link rel="stylesheet" href="/css/style.css" media="screen">
</svelte:head>
<header class="u-clearfix u-header u-header naf" id="sec-079d">
    <div class="u-clearfix u-sheet u-sheet-1">
      <h1 class="u-text u-text-default u-text-palette-1-base u-text-1">Gabar rest​ourant</h1>
      <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
        <li class="u-nav-item"><a class="u-button-style u-nav-link" href="/home">Главная</a></li>
        <li class="u-nav-item"><a class="u-button-style u-nav-link" href="/menu">Меню</a></li>
        <li class="u-nav-item"><a class="u-button-style u-nav-link" href="/info">Корзина</a></li>
        <li class="u-nav-item"><a class="u-button-style u-nav-link" href="/order">Заказ</a></li>
      </ul>
    </div>
  </header>
<style>
    .u-nav{
        color: #fdd935 !important
    }
    .u-nav-item{
        margin: 0 15px;
    }
    .naf{
        display: flex;
    }
    :global(.u-header){
        background-color: #000000;
    }
    :global(.u-header .u-text-1) {
    margin: 8px auto 0 auto;
}
:global(.padd) {
padding: 0 0 0 15%;
}

</style>
<slot></slot>