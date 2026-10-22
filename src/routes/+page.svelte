<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  // asset() and resolve() add the right start of the address,
  // so images and links also work on GitHub Pages
  import { asset, resolve } from '$app/paths';
</script>

<svelte:head>
  <title>Sam Rivera – Set & spatial designer</title>
</svelte:head>

<div class="page">

  <Header />

  <main>

  <!-- hero -->
  <section class="hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('{asset('/bilder/hero.png')}');">
    <p class="small">Set & spatial designer - Stockholm</p>
    <h1>Sam Rivera</h1>
    <p>I design theatre sets, festival installations and exhibitions using reused materials.</p>
  </section>

  <!-- about -->
  <section id="about" class="about">
    <img src="bilder/sam.png" alt="Portrait of Sam Rivera outdoors in a dusty work t-shirt">
    <div>
      <h2>About Sam</h2>
      <p>Sam is a set and spatial designer from Stockholm. He worked as a carpenter before he started studying scenography, and he still builds most things himself in his workshop.</p>
      <p>He works with theatres, festivals and exhibition organisers. Almost everything he builds is made from old materials like floorboards, sails and window frames.</p>
    </div>
    
  </section>

  <!-- work -->
  <section id="work">
    <h2>Selected work</h2>

    <div class="project">
      <img class="big-img" src="bilder/salt-house.png" alt="The Salt House set on stage: a wooden room lit by warm lamps">
      <h3>The Salt House</h3>
      <p class="small">Theatre set - 2026</p>

      <div class="project-info">
        <img src="bilder/salt-house-sketch.png" alt="Sketch of The Salt House">
        <div>
          <p>A set for a family drama in a fishing village. The room slowly gets taken apart during the play until only the floor is left.</p>
          <ul>
            <li>Floor: old oak boards from a school</li>
            <li>Walls: old window frames</li>
            <li>Curtains: leftover linen</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="project">
      <img class="big-img" src="bilder/pavilion.png" alt="Driftwood Pavilion at a festival, with a roof made of old sails">
      <h3>Driftwood Pavilion</h3>
      <p class="small">Festival installation - 2025</p>

      <div class="project-info">
        <img src="bilder/pavilion-sketch.png" alt="Sketch of Driftwood Pavilion">
        <div>
          <p>A place for festival guests to sit in the shade. The roof is made of old sails that move in the wind.</p>
          <ul>
            <li>Frame: pallets and scaffolding</li>
            <li>Roof: old sail canvas</li>
            <li>Joints: rope from fishing boats</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="project">
      <img class="big-img" src="bilder/second-life.png" alt="Second Life exhibition with cardboard columns holding objects">
      <h3>Second Life</h3>
      <p class="small">Pop-up exhibition - 2025</p>

      <div class="project-info">
        <img src="bilder/second-life-sketch.png" alt="Sketch of Second Life">
        <div>
          <p>A pop-up exhibition in an empty shop. Visitors walk through a maze of cardboard columns with objects on them.</p>
          <ul>
            <li>Columns: cardboard tubes</li>
            <li>Stands: old museum plinths</li>
            <li>Walls: panels from another exhibition</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- contact -->
  <section id="contact" class="contact">
    <h2>Want to work together?</h2>
    <p>Sam is open for projects with theatres, festivals and exhibitions.</p>
    <a class="button" href={resolve('/contact')}>Send Sam a message</a>
  </section>

  </main>

  <Footer />

</div>

<style>
  h2 {
    font-size: 40px;
  }

  .small {
    color: #999;
    font-size: 14px;
    text-transform: uppercase;
  }

  /* make images fit the screen */
  img {
    max-width: 100%;
  }

  /* spacing */
  section {
    padding: 80px 40px;
  }

  /* hero: big background image (set in the HTML), text at the bottom */
  .hero {
    min-height: 80vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .hero h1 {
    font-size: 72px;
    margin: 0;
  }

  .hero p {
    max-width: 500px;
  }

  /* about: image to the left, text to the right */
  .about {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .about img {
    width: 40%;
  }

  /* projects */
  .project {
    margin-bottom: 80px;
  }

  .big-img {
    width: 100%;
  }

  .project h3 {
    font-size: 32px;
    margin-bottom: 0;
  }

  /* project info: sketch to the left, text to the right */
  .project-info {
    display: flex;
    align-items: flex-start;
    gap: 40px;
  }

  .project-info img {
    width: 40%;
  }

  /* contact */
  .contact {
    text-align: center;
    background-color: #1c1c1c;
  }

  .button {
    display: inline-block;
    padding: 14px 32px;
    font-size: 18px;
    color: #111;
    background-color: #e8c48a;
    text-decoration: none;
    border-radius: 4px;
  }

  .button:hover {
    background-color: #f3d9ab;
  }

  /* small screens: put things on top of each other */
  @media (max-width: 700px) {
    section {
      padding-left: 16px;
      padding-right: 16px;
    }

    .hero h1 {
      font-size: 48px;
    }

    .about,
    .project-info {
      flex-direction: column;
    }

    .about img,
    .project-info img {
      width: 100%;
    }
  }
</style>
