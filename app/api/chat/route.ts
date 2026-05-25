import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {

    const body = await req.json()

    const userMessage = body.message

    // SIMPLE FAKE AI RESPONSE
    // Replace later with Gemini if needed

    const responses = [
      "A major positive shift is coming soon.",
      "Your chart shows financial growth ahead.",
      "Strong spiritual energy surrounds your future.",
      "A new opportunity will appear very soon.",
      "This is the right time for transformation.",
    ]

    const random =
      responses[Math.floor(Math.random() * responses.length)]

    return NextResponse.json({
      reply: random,
    })

  } catch (error) {

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    )

  }
}