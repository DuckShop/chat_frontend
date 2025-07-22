import React, { useState, useRef, useEffect } from 'react'
import Play from "@/assets/play.svg";
import Pause from "@/assets/pause.svg";

const AudioPlayer: React.FC<{ audio: Blob }> = ({ audio }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [audioUrl, setAudioUrl] = useState<string>('');

    // Create audio URL from blob
    useEffect(() => {
        if (audio) {
            const url = URL.createObjectURL(audio);
            setAudioUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [audio]);

    // Handle audio metadata loaded
    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    // Handle time update
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    // Handle play/pause
    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Format time to MM:SS
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Generate progress bars based on current time
    const generateProgressBars = () => {
        const bars = [];
        const barCount = 20;
        const progress = duration > 0 ? currentTime / duration : 0;
        const activeBars = Math.floor(progress * barCount);
        
        for (let i = 0; i < barCount; i++) {
            const isActive = i < activeBars;
            const height = Math.random() * 60 + 20; // Random height between 20-80px
            bars.push(
                <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-200 ${
                        isActive 
                            ? 'bg-purple-500' 
                            : 'bg-gray-300'
                    }`}
                    style={{ height: `${height}%` }}
                />
            );
        }
        return bars;
    };

    return (
        <div className='flex items-center gap-3 pr-8 pl-1 pb-1'>
            {/* Audio element */}
            <audio
                ref={audioRef}
                src={audioUrl}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
            />
            <button 
                onClick={togglePlayPause}
                className='flex items-center justify-center'
            >
                <img 
                    src={isPlaying ? Pause : Play} 
                    className='w-5 h-5 filter cursor-pointer' 
                    alt={isPlaying ? 'Pause' : 'Play'}
                />
            </button>
            
            {/* Progress visualization bars */}
            <div className='flex items-end gap-1 h-3 flex-1'>
                {generateProgressBars()}
            </div>
            
            {/* Duration display */}
            <span className="text-[12px] absolute left-3 bottom-[-20px] font-normal leading-normal text-[#7C7C7C]">
                {formatTime(duration)}
            </span>
        </div>
    )
}

export default AudioPlayer