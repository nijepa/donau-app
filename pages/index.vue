<template>
  <section class="">
    <nuxt-link tag="button" to="/meetings" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="50px"
          height="50px"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <circle style="fill: var(--blue-dark)" cx="256" cy="256" r="256" />
          <path
            style="fill: var(--blue-dark)"
            d="M275.939,511.233c101.693-7.833,186.742-75.085,220.482-167.091L339.573,186.939l-44.197,43.501
              l-80.748-80.748l-35.5,35.164L150.99,213.94l57.31,58.14L89.385,324.677L275.939,511.233z"
          />
          <circle style="fill: #ffd300" cx="182.82" cy="181.7" r="45.304" />
          <path
            style="fill: #f4a200"
            d="M182.813,136.406c-0.219,0-0.434,0.014-0.653,0.017v90.565c0.219,0.003,0.434,0.017,0.653,0.017
              c25.017,0,45.299-20.282,45.299-45.299S207.831,136.406,182.813,136.406z"
          />
          <path
            style="fill: #fc6f58"
            d="M89.385,324.679c0-51.6,41.829-93.429,93.429-93.429s93.429,41.829,93.429,93.429H89.385z"
          />
          <path
            style="fill: #f1543f"
            d="M182.813,231.25c-0.219,0-0.434,0.016-0.653,0.017v93.412h94.082
              C276.242,273.079,234.413,231.25,182.813,231.25z"
          />
          <circle style="fill: #ffd15d" cx="304.787" cy="215.971" r="45.304" />
          <path
            style="fill: #f9b54c"
            d="M304.793,170.667c-0.079,0-0.157,0.005-0.236,0.005v90.586c0.079,0,0.157,0.005,0.236,0.005
              c25.017,0,45.299-20.282,45.299-45.299C350.092,190.948,329.812,170.667,304.793,170.667z"
          />
          <path
            style="fill: #31bafd"
            d="M211.365,358.94c0-51.6,41.829-93.429,93.429-93.429s93.429,41.831,93.429,93.429H211.365z"
          />
          <path
            style="fill: #2b9ed8"
            d="M304.793,265.511c-0.079,0-0.157,0.005-0.236,0.005v93.424h93.665
              C398.222,307.341,356.393,265.511,304.793,265.511z"
          />
        </svg>
        <div>Sastanci</div>
      </button>
    </nuxt-link>
    <nuxt-link tag="button" to="/companies" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          height="50px"
          width="50px"
          viewBox="0 0 1000 1000"
          enable-background="new 0 0 1000 1000"
          xml:space="preserve"
          fill="var(--blue-dark)"
        >
          <path d="M479.6,214h117.9v24.2H479.6V214z" />
          <path d="M556.6,667.3h59v72.9h-59V667.3z" />
          <path d="M332.9,366.5h117.9v24.2H332.9V366.5z" />
          <path
            d="M300.9,415.2v325.1h154.3V415.2H308.4H300.9z M325.7,462.6h104.5v24.5H325.7V462.6z M325.7,529.8h104.5v24.5H325.7V529.8z M325.7,599.1h104.5v24.5H325.7V599.1z M325.7,668.4h104.5v24.5H325.7V668.4z"
          />
          <path
            d="M479.6,262.7v127.9v349.6h52.4v-97.4h108v97.4h59.1V262.7h-77.1H479.6z M672.9,515h-167v-24.5h167V515z M672.9,434.4h-167v-24.5h167V434.4z M672.9,353.8h-167v-24.5h167V353.8z"
          />
          <path
            d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490s490-219.4,490-490C990,229.4,770.6,10,500,10z M826.7,764.7h-103h-83.6h-108h-52.4h-24.5H276.4h-103v-24.5h103V390.7h32V342h146.7v-79.3v-24.5v-48.7h166.9v48.7h101.6v502h103V764.7L826.7,764.7z"
          />
        </svg>
        <div>Kompanije</div>
      </button>
    </nuxt-link>
    <h3>{{ $nuxt.$fire.auth.currentUser.email }}</h3>
    <button @click="signout"><div>Odjavi se</div></button>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    signout() {
      $nuxt.$fire.auth.signOut()
    },
    select() {},
    selectChild() {},
  },
}
</script>
<style lang="scss" scoped>
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    padding: 1em;
  }
</style>
