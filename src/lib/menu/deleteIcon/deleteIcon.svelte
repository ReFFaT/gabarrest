<script>
export let btnClick=()=>{}
</script>
<div
    class="food-img-delete"
    on:click={btnClick}
></div>

<style>
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
</style>