import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css'; // Optional: Add CSS for styling the video player

const VideoPlayer = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Start playing the video when the component mounts
        if (videoRef.current) {
            videoRef.current.play();
        }

        // Clean up: Pause the video when the component unmounts
        return () => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        };
    }, []);

    return (
        <div className="video-container">
            <video ref={videoRef} className="video-player" controls autoPlay>
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;