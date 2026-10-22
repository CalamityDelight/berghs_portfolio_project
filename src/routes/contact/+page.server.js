import { fail } from '@sveltejs/kit';
import { messages } from '$lib/server/messages.js';

// This page needs a running server to receive the form,
// so it can't be turned into a static HTML file.
export const prerender = false;

export const actions = {
  // runs on the server when the form is submitted
  default: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    // check all three fields on the server too, not only in the browser
    if (!name || !email || !message) {
      return fail(400, { error: 'Please fill in all three fields.', name, email, message });
    }

    const newMessage = {
      name,
      email,
      message,
      date: new Date().toLocaleString('sv-SE')
    };

    messages.push(newMessage);

    // shows up in the terminal where `npm run dev` is running
    console.log('New message received:', newMessage);
    console.log('Total messages:', messages.length);

    return { success: true };
  }
};
