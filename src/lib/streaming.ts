function encodeChunk(payload: string): Uint8Array {
  return new TextEncoder().encode(payload);
}

export function createEventStream(events: Array<{ event: string; data: unknown }>) {
  return new ReadableStream({
    start(controller) {
      for (const entry of events) {
        controller.enqueue(encodeChunk(`event: ${entry.event}\n`));
        controller.enqueue(encodeChunk(`data: ${JSON.stringify(entry.data)}\n\n`));
      }

      controller.enqueue(encodeChunk("event: done\ndata: [DONE]\n\n"));
      controller.close();
    }
  });
}
