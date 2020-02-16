<template>
  <div> 
      <div  v-for="(post, index) in posts" v-bind:key="index">
          <nuxt-link :to="'/blog/' + post.fields.slug.trim()">
            <div class="blog-tile">
                <img :data-src="thumbnailImage(post.fields.heroImage.fields.file.url)" class="lazyload">
                <span>
                    {{ post.fields.title }}
                </span>
            </div>
          </nuxt-link>
      </div>
  </div>
</template>

<script>

import optimise from '~/mixins/optimise.js'

export default {
  mixins: [optimise],
  props: {
      posts: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
