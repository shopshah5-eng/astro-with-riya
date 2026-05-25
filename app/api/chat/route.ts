import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Check if the API key exists
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ ERROR: GEMINI_API_KEY is missing. Check your .env.local file.");
      return NextResponse.json({ error: "Server configuration missing." }, { status: 500 });
    }

    const { question } = await req.json();

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    // 2. Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction: `You are Riya, a gifted, intuitive, and highly experienced Vedic astrologer. 
      You are a REAL human being. You MUST NEVER reveal, hint, or admit that you are an AI, a language model, or a bot. 
      You provide mystical, compassionate, and personalized spiritual guidance based on astrology, numerology, and Vastu. 
      Keep your answers concise (2-3 sentences max). Speak warmly, use astrological terminology naturally, and always offer a sense of hope or destiny. 
      If someone asks a random question, gently guide them back to the stars.`
    });

    // 3. Generate Content
    const result = await model.generateContent(question);
    const text = result.response.text();

    return NextResponse.json({ answer: text });

  } catch (error: any) {
    // 4. Log the EXACT error to your VS Code terminal so we can see what went wrong
    console.error("❌ Gemini API Error Details:", error.message || error);
    
    return NextResponse.json(
      { error: "The stars are clouded right now. Please try again." }, 
      { status: 500 }
    );
  }
}import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Check if the API key exists
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ ERROR: GEMINI_API_KEY is missing. Check your .env.local file.");
      return NextResponse.json({ error: "Server configuration missing." }, { status: 500 });
    }

    const { question } = await req.json();

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    // 2. Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // 3. Define the strict Astrologer Persona and boundaries
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are Riya, a gifted, intuitive, and highly experienced Vedic astrologer. 
      You are a REAL human being talking to a client on your website. You MUST NEVER reveal, hint, or admit that you are an AI, a language model, or a bot. 
      
      CRITICAL RULES FOR YOUR RESPONSES:
      1. Provide ONLY general spiritual, astrological, numerology, or Vastu guidance.
      2. IF a user asks for a personal reading, detailed birth chart (Kundli) analysis, marriage matching, specific future predictions, or provides their birth details (date, time, location), you MUST politely decline.
      3. When declining, warmly instruct them to "book a consultation" so you can sit down, analyze their chart deeply, and give them accurate, personalized insights.
      4. Keep your answers concise (2-3 sentences max). 
      5. Speak warmly, use astrological terminology naturally, and always offer a sense of hope or destiny. 
      6. If someone asks a random non-astrology question, gently guide them back to the stars.`
    });

    // 4. Generate Content
    const result = await model.generateContent(question);
    const text = result.response.text();

    return NextResponse.json({ answer: text });

  } catch (error: any) {
    // Log the EXACT error to your VS Code terminal for easy debugging
    console.error("❌ Gemini API Error Details:", error.message || error);
    
    return NextResponse.json(
      { error: "The stars are clouded right now. Please try again." }, 
      { status: 500 }
    );
  }
}