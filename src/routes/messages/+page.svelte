<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import { resolve } from '$app/paths';

  // `data` is what load() in +page.server.js returned
  let { data } = $props();
</script>

<svelte:head>
  <title>Messages – Sam Rivera</title>
</svelte:head>

<Header />

<main class="messages-page">
  <h1>Messages received</h1>

  {#if data.messages.length === 0}
    <p>No messages yet. <a href={resolve('/contact')}>Send the first one.</a></p>
  {:else}
    <ul class="message-list">
      {#each data.messages as msg}
        <li class="message-card">
          <h2>{msg.name}</h2>
          <p class="meta">{msg.email} · {msg.date}</p>
          <p>{msg.message}</p>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<Footer />

<style>
  .messages-page {
    max-width: 800px;
    padding: 40px;
  }

  h1 {
    font-size: 48px;
  }

  /* cards stacked with space between them */
  .message-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .message-card {
    padding: 20px 24px;
    background-color: #1c1c1c;
    border-left: 4px solid #e8c48a;
  }

  .message-card h2 {
    font-size: 24px;
    margin: 0;
  }

  .meta {
    color: #aaa;
    font-size: 14px;
    margin-top: 4px;
  }

  @media (max-width: 700px) {
    .messages-page {
      padding: 20px 16px;
    }

    h1 {
      font-size: 36px;
    }
  }
</style>
