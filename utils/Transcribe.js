import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({
    apiKey: process.env.NEXT_PUBLIC_ASSEMBELY_API,
});

const Transcribe = async (audio) => {
    const transCribedText = await client.transcripts.transcribe({
        audio: audio,
        speech_model: 'universal'
    })

    return transCribedText.text;
}

export default Transcribe;