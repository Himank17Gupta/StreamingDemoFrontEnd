import React from 'react';
import 'shaka-player/dist/controls.css';
const shaka = require('shaka-player/dist/shaka-player.ui.js');

//Creating class component
class VideoPlayer extends React.PureComponent{

	constructor(props){

		super(props);

		//Creating reference to store video component on DOM
		this.videoComponent = React.createRef();

		//Creating reference to store video container on DOM
		this.videoContainer = React.createRef();

		//Initializing reference to error handlers
		this.onErrorEvent = this.onErrorEvent.bind(this);
		this.onError = this.onError.bind(this);
	}

	onErrorEvent(event) {
	  // Extract the shaka.util.Error object from the event.
	  this.onError(event.detail);
	}

	onError(error) {
	  // Log the error.
	  console.error('Error code', error.code, 'object', error);
	}

	componentDidMount(){

		//Link to MPEG-DASH video
        var manifestUri = 'http://localhost:4000/user/stream';
        // 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

		//Getting reference to video and video container on DOM
		const video = this.videoComponent.current;
        const videoContainer = this.videoContainer.current;

        //Initialize shaka player
		var player = new shaka.Player(video);
        
        // Install built-in polyfills to patch browser incompatibilities.
        shaka.polyfill.installAll();

        if (shaka.Player.isBrowserSupported()) {
            // Everything looks good!
            console.log('everything good');
          //  initPlayer();

          } else {
            // This browser does not have the minimum set of APIs we need.
            console.error('Browser not supported!');
          }
        
          player.configure({
            drm: {
             clearKeys:{
      
              'f3c5e0361e6654b28f8049c778b23946': 'a4631a153a443df9eed0593043db7519',
              'abba271e8bcf552bbd2e86a434a9a5d9': '69eaa802a6763af979e8d1940fb88392', 
              '6d76f25cb17f5e16b8eaef6bbf582d8e': 'cb541084c99731aef4fff74500c12ead'
              
              }
            
           } 
        });

          console.log(player.getConfiguration());
          
		//Setting up shaka player UI
      	const ui = new shaka.ui.Overlay(player, videoContainer, video);
      	ui.getControls();

		// Listen for error events.
  		player.addEventListener('error', this.onErrorEvent);

  		// Try to load a manifest.
	  	// This is an asynchronous process.
	  	player.load(manifestUri).then(function() {
		    // This runs if the asynchronous load is successful.
		    console.log('The video has now been loaded!');
	  	}).catch(this.onError);  // onError is executed if the asynchronous load fails.

	}

	render(){

		/*
		Returning video with a container which is required to load shaka player UI.
		*/
		return(
			<div className="video-container" ref={this.videoContainer}>
                <video 
                autoPlay
					className="shaka-video"
                    ref={this.videoComponent}
                    style={{width:"640"}}
					poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
				/>
			</div>
		);
	}
}

export default VideoPlayer;