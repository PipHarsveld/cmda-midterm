<!-- - Before icon wachten op design
- Border img nog niet goed gexporteerd
- Content uit json halen  -->
<template> 
<div class="CardCon" :class="[ isChecked ? 'bgBlack' : 'bgYellow']">
    <div>
    <h2>Principes</h2>
    <h1 v-if="isChecked">Nieuw</h1>
	<h1 v-else>Oud</h1>
      <ul v-if="isChecked">
        <li>Nieuwe principe</li>
        <li>Nieuwe principe</li>
        <li>Nieuwe principe</li>
        <li>Nieuwe principe</li>
    </ul>
    <ul v-else>
        <li>oude principe</li>
        <li>oude principe</li>
        <li>oude principe</li>
        <li>oude principe</li>
    </ul>
    <label class="switch">
    <input type="checkbox" @click="CardConColor">
    <span class="slider" :class="[ isChecked ? 'CBlack' : 'CBlack']"></span>
</label>
</div>
<img src="https://images.prismic.io/cmd-midterm/663bf539-c574-417c-97e6-7b35177b4144_CardCon-Border.png?auto=compress,format" class="cardBorder"/>
</div>
</template>

<script>
  export default {
      name: 'CardSwitch',
      data () {
          return {
              isChecked : false
          }
      },
      methods: {
        CardConColor () {
            this.isChecked = !this.isChecked
        }
      }
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');

.CardCon {
    font-family: 'Open Sans';
    font-weight: 500;
    background-color: #FFF021;
    height: 21em;
    width: 15em;
    margin-left: 2em;
}

.cardBorder {
    height: 22.2em;
    width: 16.2em;
    margin-left: -0.6em;
    margin-top: -22em;
}

.bgYellow {
    background-color: #FFF021;
    border: 2px solid #000000;
}

.bgBlack {
    background-color: #000000;
    color: #ffffff;
    border: 2px solid #000000;
}

.CBlack {
    color:#000000;
}

.CardCon div {
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1em;
    padding: 1em;
}

.CardCon h1 {
    font-weight: 700;
    font-size: 2rem;
    margin: 0.2em 0 0.2em 0;
}

.CardCon h2 {
    font-weight: 400;
    margin: 0;
    margin-top: 0.5em;
}

.CardCon ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1.8em;
}

.CardCon ul li {
    margin-bottom: 0.5em;
}

.CardCon ul li:before {
    content: "";
    /* background: url("") no-repeat; */
    display: block;
    background-size: 0.9vw;
    width: 1vh;
    height: 1vh;
    float: left;
    margin: 0.4em 0 0 0;
    }

.switch {
  position: relative;
  display: inline-block;
  width: 5.5em;
  height: 2em;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 3px;
}

.slider:before {
  position: absolute;
  content: "Nieuw";
  font-size: 0.8em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 2.5px;
}

input:checked + .slider {
  background-color: #ffffff;
}

input:checked + .slider:before {
  background-color: #FFF021;
}

input:checked + .CardCon {
  background-color: #000000;
}

input:checked + .slider:before {
  content: "Oud";
  -webkit-transform: translateX(68%);
  -ms-transform: translateX(68%);
  transform: translateX(68%);
}
</style>