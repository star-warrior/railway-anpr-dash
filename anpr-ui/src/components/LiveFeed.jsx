import React, { useRef, useEffect, useState } from 'react';
import { Maximize2, Video, VideoOff } from 'lucide-react';

const LiveFeed = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let currentStream = null;

    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        currentStream = mediaStream;
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
        setError("Camera access denied or unavailable");
      }
    };

    startCamera();

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="group bg-black rounded-lg overflow-hidden relative h-full min-h-[250px] cursor-pointer shadow-card hover:shadow-lg">
      <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white/20 gap-4 relative">
        {stream ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            {error ? <VideoOff size={48} className="text-red-500/50" /> : <Video size={48} />}
            <span>{error || "Initializing Camera..."}</span>
          </>
        )}
      </div>
      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-md animate-pulse">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        LIVE
      </div>
      <div className="absolute bottom-4 left-4 text-white font-medium drop-shadow-md">Gate 1 - Main Entry</div>
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 transition-opacity duration-300 text-white group-hover:opacity-100">
        <Maximize2 size={32} />
      </div>
    </div>
  );
};

export default LiveFeed;
