
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import Transcribe from "@/utils/Transcribe.js";
import TextToAudio from "@/utils/TextToAudio.js"



const RecordAnswer = () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);

  const startRecording = async () => {
    try {
      //make audio stream
      
      const stream = await navigator.mediaDevices
        .getUserMedia({ audio: true })
      streamRef.current = stream;
      //start recording and give reference to mediaRecorder 
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        const text = await Transcribe(audioBlob);
        console.log(text);
      }

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error.message);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      // ✅ Stop microphone stream to free resources
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    }
  };

  return (
    <div>
      <Button
        variant={isRecording ? "destructive" : "outline"}
        size="sm"
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? (
          <MicOff className="h-4 w-4 mr-2" />
        ) : (
          <Mic className="h-4 w-4 mr-2" />
        )}
        {isRecording ? "Recording Your Answer" : "Start Recording"}
      </Button>
    </div>
  );
};

export default RecordAnswer;
