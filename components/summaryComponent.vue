<template>
  <section>
    <div class="bubble">1.5</div>
    <div class="backBubble">Ambities en dilemma&#39;s</div>
    <div class="summary-container">
      <div class="summary-list-left">
        <ul>
          <li>
            <p class="number">1</p>
            <p>
              Een ambitie bij CMD Amsterdam is al enkele jaren om de
              zelfstandigheid van studenten te vergroten. Studenten hebben vaak
              de ambitie om aan te sluiten op de wensen van de docent en dit
              leidt vaak tot veilige keuzes. Wij zijn op zoek naar manieren om
              dit te veranderen en ze te stimuleren buiten de lijntjes te
              kleuren en minder “af te vinken”. Meer eigen invulling hoe te
              werken aan competenties en programmatisch toetsen (zie ook
              standaard 3) zijn hier voorbeelden van.
            </p>
          </li>
          <li>
            <p class="number">1</p>
            <p>
              De Studieloopbaan Begeleiding (SLB) in het eerste jaar heeft in
              2021/2022 een grondige update gehad. Dit programma is erop gericht
              om zowel praktische schoolzaken te bespreken als ook zelfregulatie
              bij de student te ontwikkelen. Dit SLB programma zal ook
              doorgetrokken worden naar jaar 2 en 3 met name om de student
              inzicht te geven in zijn/haar unieke rol als ontwerper.
            </p>
          </li>
          <li>
            <p class="number">1</p>
            <p>
              We merken dat niet alleen wij ons curriculum verbreden en
              veranderen. Wij moeten ons verhouden tot andere opleidingen zowel
              binnen onze faculteit (CO/CB, ICT, AD-frontend, master digital
              design) als landelijk (CMD-opleidingen, product
              designopleidingen). De laatste jaren is het lastiger om de
              verschillen tussen de opleidingen goed duidelijk te maken naar
              onze werkveldpartners (voor stages en afstudeeropdrachten) maar
              ook naar studiekiezers. Hierover zouden we graag in gesprek gaan
              met het panel.
            </p>
          </li>
        </ul>
      </div>
      <div class="summary-list-right">
        <img
          src="https://images.prismic.io/midtermacc/b1579387-6a77-4c31-aa49-1377cbb3b341_cmd_daantjebons_0019.png?auto=compress,format"
          alt="Ondersteunende afbeelding"
        />
        <ul>
          <li>
            <p class="number">1</p>
            <p>
              In de visie hebben we de human centred designer veranderd naar
              Humanity-centred designer. In het nieuwe competentieprofiel hebben
              we meer aandacht voor de maatschappelijke impact. Daarnaast
              organiseren we studie-ochtenden waar docenten werkvormen m.b.t.
              meta-thema's uitwisselen en presentaties zien en geven over
              diversiteit en inclusie. Op deze manier hebben we een eerste stap
              in de "humanity centredness" van onze studenten en medewerkers
              gezet.
            </p>
          </li>
          <li>
            <p class="number">1</p>
            <p>
              Een goede inventarisatie van de BoKS(A) ontbreekt: hier zijn wel
              pogingen toe gedaan, maar de balans tussen volledigheid en
              werkbaarheid is een uitdaging. Voor de accreditatie in 2025 zijn
              we van plan hier een monitor voor te gebruiken om inzichtelijk te
              krijgen wat we waar doen en of belangrijke thema&#39;s aan bod
              komen.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
body {
  margin: 0;
}

section {
  background-color: var(--lavendel);
  padding: 3em;
}

.summary-container {
  display: flex;
  margin-top: 3em;
}

.summary-list-left {
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
}

li {
  width: 23em;
  margin-bottom: 3em;
}

p {
  overflow: hidden;
}

.number {
  position: absolute;
  z-index: 10;
  font-size: 1.4em;
  font-weight: 700;
  margin-left: -1.8em;
  margin-top: 0.1em;
}

li:before {
  content: '';
  display: block;
  background-image: url('https://images.prismic.io/midtermacc/2e4fc24f-2b7c-461c-8be0-a4b38e5242d8_sticky-note.png?auto=compress,format');
  float: left;
  height: 3em;
  width: 3em;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 1em;
}

.summary-list-right {
  display: flex;
  flex-direction: column;
  margin-left: 3em;
}

img {
  /* Height en width veranderen als de goede afbeelding  */
  width: 100%;
  margin-bottom: 7em;
}

section ul li p {
  margin: 0;
}

section ul li img {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.bubble {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  width: fit-content;
  padding: 0.5rem 2rem;
  font-family: 'Open Sans';
  font-size: 3vw;
  font-weight: 600;
  text-align: center;
  background: var(--geel);
  color: var(--black);
  border: var(--black) solid 0.3rem;
  border-radius: 5px;
}

/* Pijltje van textbubble */
.bubble:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -30px;
  left: 25%;
  z-index: 1;
  width: 0;
  margin-left: -16px;
  border-style: solid;
  border-color: var(--geel) transparent;
  border-width: 31px 16px 0;
  transform: skewX(-25deg);
}

/* Border om pijltje */
.bubble:before {
  content: '';
  display: block;
  position: absolute;
  bottom: -38px;
  left: 24.5%;
  z-index: 0;
  width: 0;
  margin-left: -19px;
  border-style: solid;
  border-color: #000000 transparent;
  border-width: 33px 18px 0;
  transform: skewX(-25deg);
}

.backBubble {
  position: relative;
  top: -1.7rem;
  left: 4rem;
  width: fit-content;
  padding: 1rem 2rem;
  /* font-family: 'Open Sans'; */
  font-size: 3vw;
  font-weight: 600;
  text-align: center;
  background: var(--black);
  color: var(--white);
  border-radius: 5px;
}

.backBubble:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -30px;
  left: 90%;
  z-index: 1;
  width: 0;
  margin-left: -16px;
  border-style: solid;
  border-color: var(--black) transparent;
  border-width: 31px 16px 0;
  transform: skewX(25deg);
}

@media only screen and (max-device-width: 820px) {
  .summary-container {
    flex-wrap: wrap;
  }

  .summary-list-right {
    margin-top: 5em;
  }

  .section {
    padding: 0rem 0rem;
  }

  li {
    width: 80vw;
  }
}
</style>
