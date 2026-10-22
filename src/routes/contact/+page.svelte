<script>
  import Header from '#lib/Header.svelte';
  import Footer from '#lib/Footer.svelte';

  // `form` holds what the server action returned (success or an error)
  let { form } = $props();
</script>

<svelte:head>
  <title>Contact – Sam Rivera</title>
</svelte:head>

<Header />

<main class="contact-page">
  <h1>Contact Sam</h1>
  <p>Sam is open for projects with theatres, festivals and exhibitions. Tell him a bit about your idea.</p>

  {#if form?.success}
    <p class="note success" role="status">Thank you! Your message has been sent.</p>
  {/if}

  {#if form?.error}
    <p class="note error" role="alert">{form.error}</p>
  {/if}

  <form method="POST">
    <label for="name">Name</label>
    <input id="name" name="name" type="text" autocomplete="name" required value={form?.name ?? ''}>

    <label for="email">Email address</label>
    <input id="email" name="email" type="email" autocomplete="email" required value={form?.email ?? ''}>

    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required>{form?.message ?? ''}</textarea>

    <button type="submit">Send message</button>
  </form>

  <p class="small-text">Or email directly: <a href="mailto:hello@samrivera.se">hello@samrivera.se</a></p>
</main>

<Footer />

<style>
  .contact-page {
    max-width: 600px;
    padding: 40px;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 0;
  }

  /* form fields stacked on top of each other */
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 30px;
  }

  label {
    font-weight: bold;
    margin-top: 12px;
  }

  input,
  textarea {
    padding: 12px;
    font: inherit;
    color: #eee;
    background-color: #1c1c1c;
    border: 1px solid #666;
    border-radius: 4px;
  }

  button {
    align-self: flex-start;
    margin-top: 20px;
    padding: 12px 28px;
    font: inherit;
    color: #111;
    background-color: #e8c48a;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #f3d9ab;
  }

  .note {
    padding: 12px 16px;
    border-radius: 4px;
  }

  .success {
    background-color: #1f3a24;
  }

  .error {
    background-color: #4a1f1f;
  }

  .small-text {
    margin-top: 30px;
    color: #aaa;
  }

  @media (max-width: 700px) {
    .contact-page {
      padding: 20px 16px;
    }

    h1 {
      font-size: 36px;
    }
  }
</style>
