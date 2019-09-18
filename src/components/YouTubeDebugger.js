// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
                errors: [],
                user: null,
                settings: {
                    bitrate: 8,
                    video: {
                        resolution: '1080p'
                    }
                }   
        };
    }

 
    handleClick = () => {
        
        let newSettings = { ...this.state.settings, bitrate: 12}

        this.setState({
                settings: newSettings
        })
    };

    handleSecondClick = () => {
        // let newSettings = { ...this.state.settings}
        // let newRes = {...newSettings.video, resolution: '720p'}

        this.setState({
                settings: {
                    ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                        resolution: '720p'
                    }
            }
    });
}
    
    render() {
        
        return (
            <div>
            <button className='bitrate' onClick={this.handleClick}></button>
            <button className='resolution' onClick={this.handleSecondClick}></button>
            </div>
        );
    }
}

export default YouTubeDebugger;