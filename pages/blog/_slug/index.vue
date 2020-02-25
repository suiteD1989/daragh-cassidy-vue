<template>
  <div>
    <Navigation :navLinks="this.navItems"/>
    <div class="container-fluid">
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
              <span>{{ this.publishDate }}</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12"> 
            <img 
              :data-src="returnAutoWidth(page.fields.heroImage.fields.file.url)"
              :alt="page.fields.heroImage.fields.description"
              class="lazyload header-img">
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
    </div>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '~/components/navigation.vue';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import Author from '~/components/blog/Author'
import Footer from '~/components/footer.vue';
import robots from '~/mixins/robots.js';
import {createClient} from '~/plugins/contentful';
import {setAutoWidth} from 'contentful-image-optimiser'

const contentfulClient = createClient();

export default {
  name: 'index',
  mixins: [robots],
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
      author: Object,
      publishDate: String
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
          property: 'og:title',
          content: this.page.fields.title
        },
        {
          hid: 'description',
          property: 'description',
          content: this.page.fields.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.fields.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.page.fields.heroImage.fields.file.url
        }
      ]
    }
  },
  methods: {
    /**
    * 
    * @param {*} url 
    * takes an image url to process for autowidth optimising
    */
    returnAutoWidth (url) {
      return setAutoWidth(url)
    }
  },
  created () {
    this.richTextField = this.page.fields.postBody
    this.author = this.page.fields.author
    this.publishDate = this.page.fields.publishDate
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
        'content_type': 'blogPost',
        'fields.slug': params.slug
    })
    .then(res => {
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
      font-size: 1.2em;
      letter-spacing: .8px;
    }
    a {
      color: $blue-1;
        &:hover {
          color: $blue-3;
        }
    }
    code {
      background: #ececec;
      display: block;
      white-space: pre-wrap;
      padding: 1em;
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
