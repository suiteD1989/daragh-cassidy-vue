<template>
  <div>
    <Navigation :navLinks="this.navItems"/>
    <article class="container blog-post content-piece">
      <div class="row">
        <div class="col-12">
          <div class="intro">
            <h1>{{ page.fields.title }}</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-auto">
          <div class="author">
            <span>{{ page.fields.author.fields.name }}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12"> 
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
          <RichTextRenderer :document="this.richTextField" />
        </div>
      </div>
      <hr>
      <Author :details="this.author"/>
    </article>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '~/components/navigation.vue';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import Author from '~/components/blog/Author'
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
    RichTextRenderer,
    Author,
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
      richTextField: Object,
      author: Object
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
  created () {
    this.richTextField = this.page.fields.postBody
    this.author = this.page.fields.author
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
        'content_type': 'blogPost',
        'fields.slug': params.slug
    })
    .then(res => {
        console.log(res.items[0].fields.author.fields.image.fields.file.url)
        return {
            page: res.items[0]
        }
    })
    .catch(err => {
        console.log(err)
    })
    }
}
</script>

<style lang="scss" scoped>
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  hr {
    color: #598381;
    height: 1px;
    background-color: #598381;
    border: none;
  }
  /deep/ .blog-post {
    color: #423f3f;
    $blue-1: #598381;
    $blue-2: #177E89;
    $blue-3: #08605F;
    h2 {
      color: $blue-2;
      text-transform: uppercase;
    }
    p {
      padding: .75em 0;
      font-size: 1.1em;
      letter-spacing: .8px;
    }
    a {
      color: $blue-1;
        &:hover {
          color: $blue-3;
        }
    }
    .intro {
      h1 {
        font-size: 2em;
        color: $blue-2;
        text-transform: uppercase;
      }
    }
    .author {
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
