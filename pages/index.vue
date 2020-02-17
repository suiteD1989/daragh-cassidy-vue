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
import HeaderSection from '~/components/home/header.vue'
import AboutSection from '~/components/home/aboutSection.vue'
import OptimiseSection from '~/components/home/optimiseSection.vue'
import Footer from '~/components/footer.vue'

import robots from '~/mixins/robots.js';

export default {
  components: {
    Navigation,
    HeaderSection,
    AboutSection,
    OptimiseSection,
    Footer
  },
  mixins: [robots],
  head () {
    return {
      title: 'Daragh Cassidy | Web Development',
      meta: [
        {
          hid: 'robots', 
          name: 'robots', 
          content: this.setRobotsTag(process.env.SET_ENVIRONMENT)
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Daragh Cassidy | Web Development'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Dublin Based Web Developer | Available For Freelance Work'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Dublin Based Web Developer | Available For Freelance Work'
        }
      ]
    }
  }
}
</script>

<style>

</style>
