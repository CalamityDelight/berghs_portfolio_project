<script>
  // resolve() adds the right start of the address, so links work
  // both locally (/contact) and on GitHub Pages (/berghs_portfolio_project/contact)
  import { resolve } from '$app/paths';
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
</svelte:head>

<header>
  <a class="logo" href={resolve('/')}>Sam Rivera</a>
  <nav aria-label="Main menu">
    <a href="{resolve('/')}#about">About</a>
    <a href="{resolve('/')}#work">Work</a>
    <a href={resolve('/contact')}>Contact</a>
    <a href={resolve('/messages')}>Messages</a>
  </nav>
</header>

<style>
  /* header: logo to the left, menu to the right */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px 40px;
  }

  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: 20px;
  }

  nav a {
    text-decoration: none;
  }

  nav a:hover {
    text-decoration: underline;
  }

  /* base styles for every page (the header is on every page) */
  :global(body) {
    margin: 0;
    background-color: #111;
    color: #eee;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  :global(h1),
  :global(h2),
  :global(h3) {
    font-family: 'Playfair Display', serif;
    font-weight: normal;
  }

  :global(a) {
    color: #eee;
  }

  /* visible keyboard focus: shows when you move around with Tab */
  :global(:focus-visible) {
    outline: 3px solid #e8c48a;
    outline-offset: 3px;
  }

  @media (max-width: 700px) {
    header {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
</style>
