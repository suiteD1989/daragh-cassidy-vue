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

import { createClient } from '~/plugins/contentful';
const contentfulClient = createClient();

export default {
  components: {
    Navigation,
    Footer,
    PostTile
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
    }
</style>
