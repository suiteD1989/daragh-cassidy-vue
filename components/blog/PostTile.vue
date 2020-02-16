<template>
  <div class="row"> 
      <div  v-for="(post, index) in posts" v-bind:key="index" class="col-lg-4">
          <nuxt-link
            :to="'/blog/' + post.fields.slug.trim()" 
            class="blog-link" 
            v-if="isPublished(post.published)">
            <div class="blog-tile">
              <img 
                :data-src="thumbnailImage(post.fields.heroImage.fields.file.url)" 
                :alt="post.fields.heroImage.fields.description"
                class="lazyload">
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
  },
  methods: {
    /**
    * The status param is a boolean set in contentful. This function forces it to true for staging and returns its
    * actually value for prod to prevent posts going live before they're ready
    */
    isPublished (status) {
      if (process.env.WORK_ENV === 'development') {
        return true
      } else {
        return status
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $blue-2: #177E89;
  
  .blog-tile {
    img {
      width: 100%;
    }
    span {
      color: $blue-2;
      text-decoration: none;
      margin: 1em 0;
      display: block;
      text-align: center;
    }
    border: solid 1px $blue-2;
    .blog-link {
      text-decoration: none;
    }
  }
</style>
