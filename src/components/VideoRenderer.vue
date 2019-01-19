<template>
    <div>
        <div class="image_container" v-lazy:background-image="data.imgURL"></div>
        <div class="font-style" v-html="data.name"></div>
    </div>
</template>
<script>
export default  {
    name:'VideoRenderer',
    props:['data']
}
</script>
<style>
.image_container {
    width: 100%;
    height:100px;
    background-color: #dadada;
}
.font-style {
    font-size: 1em;
}
</style>
