<template>
    <div class="category-combo" >
        <select v-model="selected" v-on:change="onChange">
            <option selected value='all'>All</option>

                <option v-for="item in category" :key="item" :value="item">{{item}}</option>
       
        </select>   
    </div>
</template>
<style lang='scss'>
.category-combo {
    display: flex;
    widows: 200px;
    select {
        width:100%;
    }
} 
</style>

<script>
import {mapState} from 'vuex';
export default {
    data:() =>{
        return {
            selected:'all'
        }
    },
    methods:{
        onChange(){
            //eslint-disable-next-line
            console.log(this.selected);
            this.$emit('onChange', this.selected);
        }
    },
    computed: mapState({
        category : (state) => state.video.category
    }),
    mounted (){
        //eslint-disable-next-line
        //debugger;
       this.$store.dispatch('getCategory');
    }
}
</script>