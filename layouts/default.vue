<template>
  <div class="">
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.uno {
  display: grid;
}
:root {
  --blue-darkest: #050b22;
  --blue-darker: #081542;
  --blue-dark: #102a83;
  --blue: #173dbb;
  --blue-light: #58c1e0;
  --blue-lighter: #86cde9; 
}
* {
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');
  font-family: 'Ubuntu Condensed', sans-serif;
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: radial-gradient(
    circle,
    rgb(160, 228, 245),
    rgb(228, 243, 247) 40%
  );
  background-repeat: no-repeat;
  background-size: cover; */
  
}
body {
  margin: 0;
  height: 100vh;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--blue-dark);

    &.router-link-exact-active {
      color: var(--blue-light);
    }
  }
}





:root {
  /* --yellow: #ffc600; */
  --yellow:  #00aeff;
  --black: #272727;
  --orange: #ffb515;
  --yel: #ffc600;
  /* --blue: #3456c7; */
  --red: #9b0707;
  --green: #309209;
}

html {
  /* border-box box model allows us to add padding and border to our elements without increasing their size */
  box-sizing: border-box;
  /* A system font stack so things load nice and quick! */
  //font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //font-weight: 900;
  /* font-size: 10px; */
  color: var(--black);
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  scroll-behavior: smooth;
  /* overflow: hidden;  */
}

/*
  WAT IS THIS?!
  We inherit box-sizing: border-box; from our <html> selector
  Apparently this is a bit better than applying box-sizing: border-box; directly to the * selector
*/
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  /* background-image: url("../images/ContourLine.svg"),
                    linear-gradient(210deg, var(--orange), #1247f7); */
  //background-size: 340px, auto;
  /* min-height: calc(100vh - 100px); */
  //margin: 50px;
  //background-attachment: fixed;
  //letter-spacing: -1px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 5px 0;
}

h1 {
  font-size: 24px;
}


h2 {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 20px;
  align-items: center;
  margin-top: 30px;
  fill: var(--black);
  font-size: 16px;
  color: var(--orange);
}

h2:before, h2:after {
  display: block;
  content: '';
  height: 10px;
  background: linear-gradient(to var(--direction, left), var(--yellow), transparent); 
  -webkit-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
  box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
}

h2:after {
  --direction: right;
  -webkit-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
  box-shadow: 9px -9px 9px -7px rgba(0,0,0,0.75);
}


@media (min-width: 1000px) {

  [aria-controls="menu-list"] {
    display: none;
  }
  .about {
    height: 500px;
  }
}

@media (max-width: 800px) {
  .about {
    height: 500px;
  }
}

@media (max-width: 1000px) {
  .menu {
    order: -1;
    perspective: 800px;
    background: transparent;
    border-bottom: 0;
    box-shadow: 0;
  }
  [aria-controls="menu-list"] {
    display: block;
  }
  .menu ul {
    max-height: 0;
    overflow: hidden;
    transform: rotateX(90deg);
    transition: all 0.5s;
  }
  .menu a {
    color: var(--blue) !important;
  }
  [aria-expanded="true"] ~ ul {
    display: grid;
    max-height: 500px;
    transform: rotateX(0);
    background: linear-gradient(to right, var(--blue-lighter),  var(--blue-light));
  }
  [aria-expanded="false"] .close {
    display: none;
  }
  [aria-expanded="true"] .close {
    display: inline-block;
  }
  [aria-expanded="true"] .open {
    display: none;
  }
  body {
    overflow-x: hidden;
  }
  .slides {
    display: block;
  }
}

@media (max-width: 762px) {
  .top {
    grid-template-areas: 
    "hero hero"
    "cta1 cta2"
  }
  .about {
    grid-template-columns: 1fr;
    height: unset;
  }
  body {
    overflow-x: hidden;
  }
  .cover-wrapper__inner {
    display: grid;
  }
  .cover-wrapper__container {
    align-self: end;
  }
  .music__btn {
    justify-self: center;
  }
}

@media (max-width: 682px) {
  .top {
    justify-content: center;
    grid-template-areas: 
    "hero"
    "cta1" 
    "cta2"
  }
  .gallery {
    grid-template-columns: 1fr;
  }
  #menu-list {
    grid-template-columns: 1fr;
  }
  .tools__used {
    display: grid;
    grid-template-columns: auto auto;
  }
}







.cont {
  display: grid;
  height: 100vh;
}
h1 {
  font-size: 3.6em;
  margin: 0 0 1em 0;
  color: var(--blue-dark);;
  z-index: 10;
  margin-bottom: -1.2em;
  cursor: pointer;
  width: 230px;
}
svg {
  width: 240px;
  height: 240px;
}
.invalid-feedback {
  margin: 0;
  margin-top: -1em;
  //background: #cf5252;
  color: #cf5252;
  //box-shadow: 0 0 5px 1px #cf5252 inset;
  border: 1px solid #cf5252;
  border-top: none;
  border-bottom: none;
  border-bottom-left-radius: .5em;
  border-bottom-right-radius: .5em;
  padding: .2em;
}
.hello {
  display: grid;
  align-self: center;
  justify-self: center;
  padding: 2em;
  border: 1px solid var(--blue-dark);
  border-radius: 2em;
  width: 300px;
  height: 500px;
  box-shadow: 0 0 1px 1px var(--blue-dark);
}
.inputs {
  display: grid;
  grid-row-gap: 1em;
  margin-top: -2.4em;
}
.inputse {
  height: 290px;
  font-size: 2.4em;
  color: var(--blue-dark);
  margin-top: -1em;
}

label {
  margin: 20px 0 0 0;
  position: relative;
  display: inline-block;
}

label > span {
  padding: 1em 1.2em;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  letter-spacing: 1px;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0.5;
}
input {
  padding: 10px;
  background: transparent !important;
  //background: var(--blue-grey-dark);
  //border: 2px solid var(--blue-grey-dark);
  color: var(--blue-darker) !important;
  border: 2px solid transparent;
  border-bottom: 2px solid var(--blue-dark);
  border-radius: 0.2em;
  font-size: 1.2em;
  font-weight: 600;
  transition: all 0.4s ease-in-out;
  //border: 2px solid transparent;
}
input:hover {
  border: 2px solid var(--blue-dark);
}
input:focus {
  background: var(--blue-lighter);
  border: 2px solid var(--blue-dark) !important;
  box-shadow: 0 0 3px 2px var(--blue-dark) inset;
  outline: none;
  //box-shadow: 0 0 0px 1000px #000 inset;
  //background-color: var(--blue-lighter) !important;
}
input:focus + span,
input:not(:placeholder-shown) + span {
  opacity: 1;
  color: var(--blue-dark);
  transform: scale(0.9) translateY(-80%) translateX(-10px);
}
/* For IE Browsers*/
input:focus + span,
input:not(:-ms-input-placeholder) + span {
  opacity: 1;
  transform: scale(0.75) translateY(-100%) translateX(-30px);
}


/* Change autocomplete styles in WebKit */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  //border: 1px solid var(--blue-dark);
  -webkit-text-fill-color: var(--blue-dark);
  //-webkit-box-shadow: 0 0 0px 2px var(--blue-dark) inset;
  transition: background-color 5000s ease-in-out 0s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>