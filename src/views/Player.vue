<template>
  <div class="video__popup">
    <div class="overlay" v-on:click="closeOverlay"/>
    <div class="overlay__popup">
      <div class="overlay__popup__header">
        <span class="overlay__popup__close" v-on:click="closeOverlay">X</span>
      </div>
      <VideoPlayer :source="source" />
    </div>
  </div>
</template>
<style lang="scss">
.video__popup {
  position: absolute;
  display: flex;
  align-content: center;
  width: 100%;
  height: 100%;
  top:0;
}
.overlay {
  position: absolute;
  top:0;
  width: 100%;
  height: 100%;
  background-color: #c1bebe7a;
  &__popup {
    position:relative;
    width:400px;
    height:auto;
    background-color: white;
    margin: auto;
    &__header {
      display: none;
      width:100%;
      height:15px;
      border-bottom: 1px solid gray;
      height: 24px;
    }
    &__close {
      position: relative;
      float:right;
      padding: 5px 10px;
      font-size: 0.8em;
    }

  }
}

</style>

<script>
import VideoPlayer from './../components/VideoPlayer.vue';
export default {
  components :{
    VideoPlayer
  },
  computed: {
    source : function() {
      const id =this.$router.currentRoute.params.id;
      return this.$store.getters.getList[id];
    }
  },
  methods :{
    closeOverlay(){
      this.$router.back();
    }
  }
}
</script>
