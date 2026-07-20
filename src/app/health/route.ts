export async function GET() {
  return Response.json({
    status: "ok",
    service: "goub-web",
    date: new Date().toISOString()
  });
}
