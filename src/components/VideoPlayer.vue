<template>
    <div v-if="source">
        <video ref="video"
           width="100%"
           poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
           controls autoplay></video>
    </div>
</template>
<script>
import ShakaPlayer from 'shaka-player';
export default {
    props:['source'],
    mounted(){
        this.init();
    },
    methods: {
        init (){
            //eslint-disable-next-line
            console.log('Player initiated');
            // Install built-in polyfills to patch browser incompatibilities.
            ShakaPlayer.polyfill.installAll();

            // Check to see if the browser supports the basic APIs Shaka needs.
            if (ShakaPlayer.Player.isBrowserSupported()) {
                // Everything looks good!
                this.initPlayer();
            } else {
                // This browser does not have the minimum set of APIs we need.
                //eslint-disable-next-line
                console.error('Browser not supported!');
            }
        },
        initPlayer() {
            // Create a Player instance.
            var video = this.$refs.video;
            var player = new ShakaPlayer.Player(video);

            // Attach player to the window to make it easy to access in the JS console.
            window.player = player;

            // Listen for error events.
            player.addEventListener('error', this.onErrorEvent);

            // Try to load a manifest.
            // This is an asynchronous process.
            player.load(this.source.manifestUri).then(function() {
                // This runs if the asynchronous load is suvueccessful.
                //eslint-disable-next-line
                console.log('The video has now been loaded!');
            }).catch(this.onError);  // onError is executed if the asynchronous load fails.
        },
        onErrorEvent(event){
            // Extract the shaka.util.Error object from the event.
            this.onError(event.detail);
        },
        onError(error){
            // Log the error.
            //eslint-disable-next-line
            console.error('Error code', error.code, 'object', error);
        }
        
    }
}
</script>