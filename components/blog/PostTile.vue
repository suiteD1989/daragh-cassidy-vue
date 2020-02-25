<template>
  <div> 
    <div  v-for="(post, index) in posts" v-bind:key="index" class="col-lg-4 tile-container">
      <nuxt-link
        :to="'/blog/' + post.fields.slug.trim()" 
        class="blog-link" 
        v-if="isPublished(post.fields.published)">
        <div class="blog-tile">
          <img 
            :data-src="returnThumbnail(post.fields.heroImage.fields.file.url)" 
            :alt="post.fields.heroImage.fields.description"
            class="lazyload">
          <div class="tileText">
            <span class="title">
                {{ post.fields.title }}
            </span>
            <span class="description">
                {{ post.fields.description }}
            </span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

import {thumbnailImage} from 'contentful-image-optimiser'

export default {
  props: {
      posts: Array
  },
  methods: {
    /**
    * The status param is a boolean set in contentful. This function forces it to true for staging and returns its
    * actually value for prod to prevent posts going live before they're ready
    */
    isPublished (status) {
      if (process.env.SET_ENVIRONMENT === 'development') {
        return true
      } else {
        return status
      }
    },
    /**
    * 
    * @param {*} url 
    * takes an image url to process for autowidth optimising
    */
    returnThumbnail (url) {
      return thumbnailImage(url)
    }
  }
}
</script>

<style lang="scss" scoped>
  $blue-1: #598381;
  $blue-2: #177E89;
  $blue-3: #08605F;
  $black: #443d47;

  .tile-container {
    padding-left: 0;
    .blog-tile {
      &:hover {
        .title {
          color: $blue-3;
        }
      }
      img {
        width: 100%;
      }
      border: solid 1px $blue-2;
      margin-bottom: 1em;
      .tileText {
        padding: 0 .5em;
        span {
          color: $blue-1;
          text-decoration: none;
          margin: 1em 0;
          display: block;
        }
        .title {
          font-weight: 800;
          text-transform: uppercase;
          font-size: 1.1em;
        }
        .description {
          font-size: .9em;
          font-weight: 400;
          color: $black;
        }
      }
    }
  }
</style>
