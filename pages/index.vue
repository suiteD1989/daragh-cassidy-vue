<template>
  <div>
    <Navigation/>
    <HeaderSection/>
  </div>
</template>

<script>

import Navigation from '~/components/navigation.vue'
import HeaderSection from '~/components/header.vue'
import AboutSection from '~/components/aboutSection.vue'
import OptimiseSection from '~/components/optimiseSection.vue'

export default {
  components: {
    Navigation,
    HeaderSection,
    AboutSection,
    OptimiseSection
  }
}
</script>

<style>

</style>
