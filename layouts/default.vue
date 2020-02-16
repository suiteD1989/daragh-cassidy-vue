<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">

  @import "node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";

  body {
    margin: 0;
    font-family: 'Cabin', sans-serif;
    color: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  // Global
  .blur {
    transition: all .25s ease-in-out;
    filter: blur(5px);
  }
  // Overrides
  .row {
    margin-left: 0;
    margin-right: 0;
  }
</style>
