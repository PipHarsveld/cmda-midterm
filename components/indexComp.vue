<!-- 
- footer 
-->
<template>
  <main>
    <header>
      <div class="header-content">
        <h1>Communicatie & Multimedia design</h1>
        <p id="header-block-h1">Midterm</p>
        <p id="header-block-last">Curriculum 2022-2024</p>
      </div>
    </header>

    <body>
      <div class="yellow-container">
        <div class="text">
          <h2>Voorwoord</h2>
          <p>Hier komt een voorwoord voor de mid term accreditatie.</p>
        </div>
        <img
          src="https://images.prismic.io/cmd-midterm/131455d4-d639-44b2-afc4-019646b25f60_laptop.png?auto=compress,format"
        />
      </div>
      <div class="links">
        <div class="link-container">
          <a class="heading" href="/standaard/standaard-1"
            >1.0 <br>
             Beoogde leerresultaten</a
          >

          <hr />
          <div class="heading-1">
            <a href="/standaard/standaard-1">1.1 Humanity-centered ontwerpers van digitale, interactieve producten</a>
            <a href="/standaard/standaard-1"> 1.2 Competenties</a>
            <a href="/standaard/standaard-1">1.3 Werkveld en maatschappij</a>
            <a href="/standaard/standaard-1">1.4 Ontwikkelingen</a>
            <a href="/standaard/standaard-1">1.5Ambities en dilemma's</a>
          </div>
        </div>
        <div class="link-container">
          <a class="heading" href="/standaard/standaard-2"
            >2.0 <br>
             Onderwijsleeromgeving</a
          >

          <hr />
          <div class="heading-1">
            <a href="/standaard/standaard-2">2.1 Onderwijsvisie </a> 
            <a href="/standaard/standaard-2">2.2Curriculum opbouw</a>
            <a href="/standaard/standaard-2">2.3 Onderwijs en praktijk</a>
            <a href="/standaard/standaard-2">2.4 Onderwijs en onderzoek</a>
            <a href="/standaard/standaard-2">2.5 Internationalisering</a>
            <a href="/standaard/standaard-2">2.6 Studenten begeleiden</a>
            <a href="/standaard/standaard-2">2.7 Digitale en analoge voorzieningen</a>
            <a href="/standaard/standaard-2">2.8 Borging onderwijskwaliteit</a>
            <a href="/standaard/standaard-2">2.9 Ambities en dilemma's</a>
            

          </div>
        </div>
        <div class="link-container">
          <a class="heading" href="/standaard/standaard-3"
          >3.0 <br> 
          Toetsing</a>
          <hr />
          <div class="heading-1">
            <a href="/standaard/standaard-3">3.1 Toetsbeleid en -plan</a>
            <a href="/standaard/standaard-3">3.2 Toetsprogramma en praktijk</a>
            <a href="/standaard/standaard-3">3.3 Toetsing en feedback</a>
            <a href="/standaard/standaard-3">3.4 Borging en kwaliteit</a>
            <a href="/standaard/standaard-3"> 3.5 Ambities en dilemma's</a>
          </div>
        </div>
        <div class="link-container">
          <a class="heading" href="/standaard/standaard-4"
            >4.0 <br>
            Gerealiseerde resultaten</a
          >
          <hr />
          <div class="heading-1">
            <a href="/standaard/standaard-4">4.1 Afstudeerproces</a>
            <a href="/standaard/standaard-4">4.2 Borging afstudeerniveau vanuit examencommissie</a>
            <a href="/standaard/standaard-4">4.3 Ambities en dilemma's</a>
          </div>
        </div>
      </div>
    </body>
  </main>
</template>

<script>
export default {
  name: 'IndexComp',
  layout: 'default',
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

header {
  height: 50vw;
  background: url(https://images.prismic.io/cmd-midterm/c619d173-a2f3-4150-aafa-a773364cd720_hva-cmd-idex-header.jpeg?auto=compress,format);
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: relative;
}

.header-content {
  margin-left: 5em;
}

h1 {
  position: absolute;
  font-size: 4vw;
  color: white;
  width: 40%;
  margin-top: 2em;
}

#header-block-h1 {
  position: absolute;
  font-size: 1.5vw;
  color: white;
  width: 40%;
  margin-top: 16em;
  background-color: rgba(0, 0, 0, 0.553);
  padding: 1em;
  width: 10%;
  text-align: center;
}

#header-block-last {
  position: absolute;
  font-size: 1.5vw;
  color: white;
  width: 40%;
  margin-top: 23em;
  background-color: rgb(0, 0, 0);
  padding: 1em;
  width: 20%;
  text-align: center;
}

.yellow-container {
  background-color: #fff021;
  display: flex;
  flex-direction: row;
  width: 100vw;
}

h2 {
  margin: 0;
  font-size: 3rem;
  width: 40%;
  margin-top: 1em;
  
}

.text {
  margin: 0;
  font-size: 1rem;
  width: 40%;
  margin-left: 5em;
  margin-top: 2em;
}

.yellow-container img {
  height: 20em;
  width: 20em;
  margin-left: 15em;
}

@media only screen and (max-device-width: 1100px) {
  .yellow-container img {
    margin-left: 5em;
  }
}



.links {
  
  display: flex;
  margin-bottom: 0;
}

.link-container {
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}
div.link-container {
  margin: 0;
  display: flex;
  align-items: flex-start;
  padding: 0 1rem;
  margin-left: 2rem;
  margin-right:2rem;
}
a.heading {
  margin: 5em 0 0;
  font-size: 1.3rem;
  flex-direction: column;
  width: 100%;
  
  
}
.heading {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  width: 40%;
  margin-top: 2em;
}

a {
  margin-top: 1em;
  font-size: 1em;
  color: black;
  text-decoration: none;

}

hr {
  width: 100%;
  border-top: 5px solid #fff021;
  border-radius: 5px;
  border-bottom: none;
}

.heading-1 {
  display: flex;
  flex-direction: column;
  margin: 0;
  font-weight: 200;
  width: 80%;
}




a:hover {
  text-decoration: underline;
}

@media only screen and (max-device-width: 720px) {
  .yellow-container img {
    margin-left: 2em;
  }

  .links {
    flex-wrap: wrap;
  }

  hr {
    margin-left: 30%;
  }

  .yellow-container {
    flex-direction: column;
  }
}
</style>