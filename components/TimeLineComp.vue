<template>
  <section>
    <div class="main-time-line">
      <div class="main-time-line-container">
        <div class="main-time-line-block">
          <p>Week -3</p>
        </div>
        <div class="popup-items">
          <button class="popup-item" @click="toggleModal($event, index)">
            Afstuurdeervaardigheden
          </button>
        </div>
      </div>
      <div class="main-time-line-container">
        <div class="main-time-line-block">
          <p>Week -2</p>
        </div>
        <div class="popup-items">
          <button class="popup-item" @click="toggleModal($event, index)">
            Projectvoorstel
          </button>
        </div>
      </div>
      <div class="main-time-line-container">
        <div class="main-time-line-block">
          <p>Week -1</p>
        </div>
      </div>
      <div class="main-time-line-container">
        <div class="main-time-line-block">
          <p>Week 0</p>
        </div>
      </div>
      <div class="main-time-line-container">
        <div class="main-time-line-block">
          <p>Week 1</p>
        </div>
      </div>
      <div class="main-time-line-container">
        <div class="main-time-line-block">
          <p>Week 2</p>
        </div>
      </div>
      <div class="main-time-line-container">
        <div class="main-time-line-block">
          <p>Week 3</p>
        </div>
      </div>
    </div>
    <generalModal :is-visible="visible" :title="title" @clicked="closeModal">
      <p>{{ content }}</p>
    </generalModal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      subjects: [
        'Afstuurdeervaardigheden',
        'Projectvoorstel',
        'Speeddaten',
        'Kick Off',
        'Design Briefing',
      ],
      content: '',
      title: '',
      contents: 'Leuke text :)',
    }
  },
  mounted() {},
  methods: {
    toggleModal(e, index) {
      // console.log(e, index)
      this.visible = !this.visible
      this.content = this.contents
      this.title = this.subjects[index]
    },
    closeModal() {
      this.visible = false
    },
  },
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap'); */

@media only screen and (max-device-width: 1200px) {
  section {
    overflow-x: scroll;
  }
}

section {
  margin-top: 10em;
  margin-bottom: 10em;
}

.main-time-line {
  display: flex;
  /* justify-content: center; */
}

.main-time-line-container {
  display: flex;
  margin-left: 2em;
  align-items: center;
  position: relative;
}

.main-time-line-block {
  font-size: 1em;
  /* font-family: 'Open Sans'; */
  padding: 1em;
  background-color: #fff021;
  border: solid black 3px;
  width: 9em;
  text-align: center;
}

/* To overlap lines  */
.main-time-line-container:not(:first-child) {
  margin-left: -0.2em;
}

.popup {
  padding: 2rem;
  gap: 4rem;
  width: 100%;
  max-width: 1400px;
}

.popup-items {
  z-index: 12;
  margin-left: -10.5em;
}

.main-time-line-container:nth-of-type(odd) .popup-item {
  position: absolute;
  bottom: 6em;
}

.main-time-line-container:nth-of-type(even) .popup-item {
  position: absolute;
  bottom: -6em;
  margin-left: 12em;
}

.popup-item {
  background: black;
  color: white;
  padding: 0.75rem 1rem;
  min-width: min-content;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  position: relative;
  cursor: pointer;
}

.popup-item::after {
  content: 'i';
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  text-align: center;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  background: white;
  padding: 0.5rem;
  border-radius: 50%;
}

.card {
  border: 3px solid black;
  border-radius: 1rem;
  top: 0;
  left: 0;
  width: 350px;
  position: absolute;
}
</style>