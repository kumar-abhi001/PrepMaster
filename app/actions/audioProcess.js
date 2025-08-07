"use server";

import { generateSpeech } from "@/lib/elevenlabs";

export async function processAudio(text) {

    // Convert to speech with ElevenLabs
    const ttsBuffer = await generateSpeech(aiAnswer);

    // Return as Base64 playable audio URL
    return `data:audio/mpeg;base64,${ttsBuffer.toString("base64")}`;
}
