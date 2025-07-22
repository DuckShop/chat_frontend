import React, { useEffect, useState, useRef } from "react";

interface VoiceVisualizerProps {
    isRecording: boolean;
    isListening: boolean;
    recordingTime: number; // Add recording time prop
    onAudioData?: (audioBlob: Blob) => void; // Callback for recorded audio
    setAudioChunks: (value: Blob[]) => void;
    isAudioRecording: { status: string, time: number };
}

const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({ isRecording, isListening, recordingTime, onAudioData, setAudioChunks, isAudioRecording }) => {
    const [bars, setBars] = useState<number[]>([]);
    const [listenedBars, setListenedBars] = useState<number[]>([]);
    const [isRecordingAudio, setIsRecordingAudio] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const [recordedAudioBlob, setRecordedAudioBlob] = useState<Blob | null>(null);
    const [volumeData, setVolumeData] = useState<number[]>([]); // Store volume data per second

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const audioElementRef = useRef<HTMLAudioElement | null>(null);
    const volumeIntervalRef = useRef<number | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const listeningIndexRef = useRef<number>(0);

    const TOTAL_BARS = 120; // Total number of bars for full width
    const FILL_TIME = 60; // 1 minute to fill all bars

    // Generate bar height based on volume data or fallback to random
    const generateBarHeight = (index: number) => {
        if (volumeData[index] !== undefined) {
            // Use actual volume data
            const volume = volumeData[index];
            const height = (volume / 100) * 20 + 5; // Scale volume (0-100) to 5-25px
            const centerHeight = 12.5;
            return centerHeight + (height - centerHeight) * 2; // Mirror around center
        } else {
            return 2;
        }
    };

    const getFilledBarsCount = () => {
        const progress = Math.min(recordingTime / FILL_TIME, 1);
        return Math.floor(progress * TOTAL_BARS);
    };

    const startAudioRecording = async () => {
        try {
            console.log('Starting audio recording...');
            // Clean up any existing resources first
            await stopAudioRecording();

            console.log('Requesting microphone permission...');
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log('Microphone permission granted:', stream);
            streamRef.current = stream;

            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            const chunks: Blob[] = [];
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(chunks, { type: 'audio/wav' });
                setAudioChunks(chunks);
                setRecordedAudioBlob(audioBlob);
                if (onAudioData) {
                    onAudioData(audioBlob);
                }
            };

            // Set up AudioContext for real-time visualization
            const audioContext = new AudioContext();
            audioContextRef.current = audioContext;

            const analyser = audioContext.createAnalyser();
            analyserRef.current = analyser;
            analyser.fftSize = 256;
            analyser.smoothingTimeConstant = 0.8;

            const microphone = audioContext.createMediaStreamSource(stream);
            microphoneRef.current = microphone;
            microphone.connect(analyser);

            // Start recording
            console.log('Starting MediaRecorder...');
            mediaRecorder.start();
            setIsRecordingAudio(true);
            console.log('MediaRecorder started successfully');

            // Start real-time visualization
            updateVisualization();

            // Start volume data collection
            startVolumeCollection();

        } catch (error) {
            console.error('Error accessing microphone:', error);
            if (error instanceof Error) {
                console.error('Error details:', {
                    name: error.name,
                    message: error.message
                });
            }
        }
    };

    // Stop audio recording
    const stopAudioRecording = async () => {
        // Stop media recorder
        if (mediaRecorderRef.current && isRecordingAudio) {
            mediaRecorderRef.current.stop();
            setIsRecordingAudio(false);
        }

        // Close audio context
        if (audioContextRef.current) {
            await audioContextRef.current.close();
            audioContextRef.current = null;
        }

        // Cancel animation frame
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }

        // Stop volume collection
        stopVolumeCollection();

        // Stop all tracks
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }

        // Reset refs
        mediaRecorderRef.current = null;
        analyserRef.current = null;
        microphoneRef.current = null;
    };

    // Update visualization with real audio data
    const updateVisualization = () => {
        if (!analyserRef.current || !isRecordingAudio) return;

        const analyser = analyserRef.current;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBars = () => {
            analyser.getByteFrequencyData(dataArray);

            // Convert frequency data to bar heights
            const newBars: number[] = [];
            const samplesPerBar = Math.ceil(bufferLength / TOTAL_BARS);

            for (let i = 0; i < TOTAL_BARS; i++) {
                const startIndex = i * samplesPerBar;
                const endIndex = Math.min(startIndex + samplesPerBar, bufferLength);
                let sum = 0;

                for (let j = startIndex; j < endIndex; j++) {
                    sum += dataArray[j];
                }

                const average = sum / (endIndex - startIndex);
                const height = (average / 255) * 20 + 5; // Scale to 5-25px range
                newBars.push(height);
            }
            
            // Update bars with real-time data
            setBars(newBars);
            
            if (isRecordingAudio) {
                animationFrameRef.current = requestAnimationFrame(updateBars);
            }
        };

        updateBars();
    };

    // Collect volume data per second during recording
    const startVolumeCollection = () => {
        if (!analyserRef.current) return;

        volumeIntervalRef.current = setInterval(() => {
            const analyser = analyserRef.current;
            if (!analyser) return;

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            analyser.getByteFrequencyData(dataArray);

            // Calculate average volume for this second
            const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
            const volume = (average / 255) * 100; // Convert to 0-100 scale

            setVolumeData(prev => [...prev, volume]);
        }, 500); // Collect every second
    };

    // Stop volume collection
    const stopVolumeCollection = () => {
        if (volumeIntervalRef.current) {
            clearInterval(volumeIntervalRef.current);
            volumeIntervalRef.current = null;
        }
    };

    // Play recorded audio
    const playRecordedAudio = () => {
        if (!recordedAudioBlob) return;

        const audioUrl = URL.createObjectURL(recordedAudioBlob);
        const audio = new Audio(audioUrl);
        audioElementRef.current = audio;

        // Reset listening time when starting playback
        listeningIndexRef.current = 0;

        audio.onended = () => {
            setIsPlayingAudio(false);
            URL.revokeObjectURL(audioUrl);
        };

        audio.onerror = () => {
            setIsPlayingAudio(false);
            URL.revokeObjectURL(audioUrl);
        };

        audio.play().then(() => {
            setIsPlayingAudio(true);
        }).catch((error) => {
            console.error('Error playing audio:', error);
            setIsPlayingAudio(false);
        });
    };

    // Stop playing audio
    const stopPlayingAudio = () => {
        if (audioElementRef.current) {
            audioElementRef.current.pause();
            audioElementRef.current.currentTime = 0;
            setIsPlayingAudio(false);
        }
    };

    // Effect for recording visualization
    useEffect(() => {
        let interval: number | null = null;

        if (isRecording && !isRecordingAudio) {
            // Reset state when starting new recording
            setBars([]);
            setVolumeData([]);
            setListenedBars([]);
            listeningIndexRef.current = 0;
            
            // Start actual audio recording
            startAudioRecording();
        } else if (!isRecording && isRecordingAudio) {
            // Stop actual audio recording
            stopAudioRecording();
        }

        if (isListening && !isPlayingAudio && recordedAudioBlob) {
            // Reset listening state
            setListenedBars([]);
            listeningIndexRef.current = 0;
            
            // Start playing recorded audio
            playRecordedAudio();
        } else if (!isListening && isPlayingAudio) {
            // Stop playing audio
            stopPlayingAudio();
        }

        if (isRecording && !isListening) {
            setListenedBars([]);
            // Fallback to simulated bars if audio recording fails
            interval = setInterval(() => {
                const filledCount = getFilledBarsCount();
                setBars(prev => {
                    let newBars = [...prev];
                    if (recordingTime <= FILL_TIME) {
                        // Fill bars up to the current time position (first minute)
                        while (newBars.length < filledCount) {
                            newBars.push(generateBarHeight(newBars.length));
                        }
                        return newBars.slice(0, filledCount);
                    } else {
                        // After 1 minute, maintain full bars and add new ones
                        while (newBars.length < TOTAL_BARS + filledCount) {
                            newBars.push(generateBarHeight(newBars.length));
                        }
                        // Keep only the last TOTAL_BARS for scrolling effect
                        return newBars.slice(-TOTAL_BARS);
                    }
                });
            }, 500);
        } else if (isListening) {
            // For listening, show all bars and mark as listened progressively
            interval = setInterval(() => {
                listeningIndexRef.current += 1;
                // Update listened bars - mark current index as listened
                setListenedBars(prev => {
                    if (listeningIndexRef.current < getFilledBarsCount()) {
                        return [...prev, generateBarHeight(listeningIndexRef.current)];
                    }
                    return prev;
                });

                // Stop the interval when we reach the end
                if (listeningIndexRef.current >= getFilledBarsCount()) {
                    if (interval) {
                        clearInterval(interval);
                    }
                    return;
                }
            }, 500); // Update every 0.5 seconds
        } else if (!isRecording && !isListening) {
            // Clear bars when not recording or listening
            setBars([]);
            setListenedBars([]);
            setVolumeData([]);
            listeningIndexRef.current = 0;
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRecording, isListening, recordingTime, isRecordingAudio]);

    if (!isRecording && !isListening) {
        return null;
    }

    return (
        <div className="flex items-center gap-[4px] h-6 ml-2 w-full overflow-hidden">
            {(isRecording||isAudioRecording.status === "pause") && Array.from({ length: TOTAL_BARS }, (_, index) => {
                const barHeight = bars[index] || 2; 
                const barColor = bars[index] ? "bg-[#7A58D0]" : "bg-gray-200";

                return (
                    <div
                        key={index}
                        className="rounded-full transition-all duration-150"
                        style={{
                            height: `${barHeight}px`,
                            width: `calc(100% / ${TOTAL_BARS})`,
                            backgroundColor: barColor === "bg-[#7A58D0]" ? "#7A58D0" :
                                barColor === "bg-gray-200" ? "#fff" : "#9CA3AF"
                        }}
                    />
                );
            })}
            {isListening && Array.from({ length: TOTAL_BARS }, (_, i) => {
                const barHeight = listenedBars[i] || 2;
                const barColor = listenedBars[i] ? "bg-[#7A58D0]" : "bg-gray-400";
                
                return (
                    <div key={i}
                        className="rounded-full transition-all duration-150"
                        style={{
                            height: `${barHeight}px`,
                            width: `calc(100% / ${TOTAL_BARS})`,
                            backgroundColor: barColor === "bg-[#7A58D0]" ? "#7A58D0" : "#9CA3AF"
                        }} />
                );
            })}
        </div>
    );
};

export default VoiceVisualizer; 