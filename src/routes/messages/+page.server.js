import { messages } from '#lib/server/messages.js';

// runs on the server every time someone opens /messages
export function load() {
  return { messages };
}
