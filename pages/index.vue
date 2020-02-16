<template>
  <div>
    <Navigation/>
    <HeaderSection/>
    <AboutSection/>
    <OptimiseSection/>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '~/components/navigation.vue'
import HeaderSection from '~/components/header.vue'
import AboutSection from '~/components/aboutSection.vue'
import OptimiseSection from '~/components/optimiseSection.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Navigation,
    HeaderSection,
    AboutSection,
    OptimiseSection,
    Footer
  }
}
</script>

<style>

</style>
