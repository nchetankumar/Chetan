<template>
    <div v-if="videoList && category && category.length > 0">
        <h1>Video Gallery</h1>
        <Category v-on:onChange="filterVideos($event)"/>
        <div class='c-container'>
            <div class="c-item"  v-for="(item, index) in videoList" v-bind:key="'key_'+index" v-on:click="openPlayer(item, $event, index)">
                <VideoRenderer :data="item"/>
            </div>
        </div>
    </div>
</template>
<style type="sass">
.c-container {
    display: flex;
    flex-wrap: wrap;
}
.c-item {
    width: 150px;
    height: auto;
    margin: 5px;
}
.c-item:hover {
    cursor:hand
}
</style>
<script>
import VideoRenderer from './../components/VideoRenderer.vue';
import Category from "./../components/Category.vue";
import {mapState} from 'vuex';
export default {
    name: 'gallery',
    state: ()=> {
        return {
            seletedCategory:'all'
        }
    },
    computed: mapState({
        videoList: state =>state.video.listByCategory,
        category: state =>state.video.category
    }),
    components :{
        VideoRenderer, Category
    },
    methods: {
        openPlayer(data, event, index){
            event.preventDefault();
            //eslint-disable-next-line
            console.log(data.URL);
            this.$router.push({path:`/player/${index}`, query: {id:data.T}});
        },
        filterVideos (arg){
            //eslint-disable-next-line
            console.log(arg);
            this.$store.dispatch({type:'filter', category:arg});
        }
    },
    mounted (){
        //eslint-disable-next-line
        var self = this;
        this.$store.dispatch('loadGallery').then((video)=> {
            //eslint-disable-next-line
            console.log(video);
            this.$store.dispatch('getCategory');
            this.$store.dispatch({type:'filter', category:'all'});

        }, 
        (err)=>{
            //eslint-disable-next-line
            console.log(err)
        });
        /*this.$store.dispatch('video/loadGallery').then(()=>{

        }, ()=>{
            //eslint-disable-next-line
            console.log('Getting error load videos');
        });*/
    }
}
</script>
