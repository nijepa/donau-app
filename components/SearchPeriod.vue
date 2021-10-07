<template>
  <div class="period">
    period od 
    <date-picker
      input-class="date__input"
      placeholder="Izaberi datum"
      format="dd MMM yyyy"
      v-model="period.searchDateStart" />
    do
    <date-picker
      input-class="date__input"
      placeholder="Izaberi datum"
      format="dd MMM yyyy"
      v-model="period.searchDateEnd" />
    <button @click="setPeriod">traži</button>
  </div>
</template>

<script>
export default {
  name: 'SearchPeriod',
  data() {
    return {
      period: {
        searchDateStart: new Date(new Date().getFullYear(), 0, 1),
        searchDateEnd: new Date(),
      }
    }
  },
  methods: {
    setPeriod() {
      this.$emit('periodSeted', this.period)
    }
  }
}
</script>

<style lang="scss" >
  .period {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid var(--blue-dark);
    border-radius: .2em;
    font-variant: small-caps;
    padding: 0 .2em !important;
    button {
      font-variant: small-caps;
      font-size: 1em;
      border: none;
      border-radius: .2em;
      cursor: pointer;
    }
    button:hover {
      background-color: var(--blue-dark) !important;
      color: whitesmoke !important;
    }
  }
  .date__input {
     width: 100px;
     padding: .2em;
     cursor: pointer;
     border-bottom: 2px solid transparent;
  } 
</style>