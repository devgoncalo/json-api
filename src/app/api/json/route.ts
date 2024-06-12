import { NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  return new Response(JSON.stringify(body))
}