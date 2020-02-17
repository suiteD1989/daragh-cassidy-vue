<template>
  <div>
    <Navigation :navLinks="this.navItems"/>
    <article class="container blog-post content-piece">
      {{ page.fields.body }}
    </article>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '~/components/navigation.vue';
import Footer from '~/components/footer.vue';

import robots from '~/mixins/robots.js';

import {createClient} from '~/plugins/contentful';
const contentfulClient = createClient();

export default {
  name: 'index',
  mixins: [robots],
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
      navItems: [
        {
          title: 'Home',
          config: 'home',
          link: '/'
        },
        {
          title: 'Blog',
          config: 'blog',
          link: '/blog'
        }
      ],
      pageData: Object
    }
  },
  head () {
    return {
      title: this.page.fields.title,
      meta: [
        {
          hid: 'robots', 
          name: 'robots', 
          content: this.setRobotsTag(process.env.SET_ENVIRONMENT)
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page.fields.title
        },
        {
          hid: 'description',
          name: 'description',
          content: this.page.fields.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.page.fields.description
        }
      ]
    }
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
        'content_type': 'blogPost',
        'fields.slug': params.slug
    })
    .then(page => {
        return {
            page: page.items[0]
        }
    }).catch(err => {
        console.log(err)
    })
    }
}
</script>

<style lang="scss" scoped>
  .blog-post {
    color: black;
  }
</style>
