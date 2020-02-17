<template>
  <div>
    <Navigation/>
        <section class="container blog content-piece">
          <PostTile :posts="blogPosts"/>
        </section>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '~/components/navigation.vue';
import Footer from '~/components/footer.vue';
import PostTile from '~/components/blog/PostTile.vue';

import robots from '~/mixins/robots.js';

import { createClient } from '~/plugins/contentful';
const contentfulClient = createClient();

export default {
  components: {
    Navigation,
    Footer,
    PostTile
  },
  mixins: [robots],
  head () {
    return {
      title: 'Daragh Cassidy | Web Development | Blog',
      meta: [
        {
          hid: 'robots', 
          name: 'robots', 
          content: this.setRobotsTag(process.env.SET_ENVIRONMENT)
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Daragh Cassidy | Web Development | Blog'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Daragh Cassidy\'s Personal Blog'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Daragh Cassidy\'s Personal Blog'
        }
      ]
    }
  },
  asyncData ({env}) {
    return Promise.all([
      contentfulClient.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      })
    ])
    .then(([post]) => {
        return {
            blogPosts: post.items
        }
    }).catch(err => {
        console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
    $brown: #8E936D;
	  $blue-2: #177E89;

    .blog {
        color: $blue-2;
        padding: 2.5em 0;
    }
</style>
