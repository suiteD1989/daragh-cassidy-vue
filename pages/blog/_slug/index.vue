<template>
  <div>
    <Navigation :navLinks="this.navItems"/>
    <article class="container-fluid blog-post content-piece">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="intro">
              <h1>{{ page.fields.title }}</h1>
              <span>{{ page.fields.author.fields.name }}</span>
            </div>
            <client-only>
              <img 
              :data-src="setAutoWidth(page.fields.heroImage.fields.file.url)"
              :alt="page.fields.heroImage.fields.description"
              class="lazyload header-img">
            </client-only>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              {{ page.fields.body }}
            </p>
          </div>
        </div>
      </div>
    </article>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '~/components/navigation.vue';
import Footer from '~/components/footer.vue';

import robots from '~/mixins/robots.js';
import optimise from '~/mixins/optimise.js';

import {createClient} from '~/plugins/contentful';
const contentfulClient = createClient();

export default {
  name: 'index',
  mixins: [robots, optimise],
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
    $blue-1: #598381;
    $blue-2: #177E89;
    $blue-3: #08605F;

    .intro {
      h1 {
        font-size: 2em;
        color: $blue-2;
        text-transform: uppercase;
      }
      span {
        color: $blue-1;
        font-size: .9em;
        padding-bottom: 1em;
        display: block;
      }
    }
    .header-img {
      width: 100%;
    }
  }
</style>
