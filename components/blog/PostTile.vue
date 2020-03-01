<template>
  <div class="flex-items"> 
    <div  v-for="(post, index) in posts" v-bind:key="index" class="col-lg-4 col-xs-12 tile-container">
      <nuxt-link
        :to="'/blog/' + post.fields.slug.trim()" 
        class="blog-link d-flex" 
        v-if="isPublished(post.fields.published)">
        <div class="blog-tile">
          <client-only>
            <img 
              :data-src="returnThumbnail(post.fields.heroImage.fields.file.url)" 
              :alt="post.fields.heroImage.fields.description"
              class="lazyload">
          </client-only>
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

import {thumbnailImage, setFixedWidth} from 'contentful-image-optimiser'

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
      return setFixedWidth(url, 650)
    }
  }
}
</script>

<style lang="scss" scoped>
  $blue-1: #598381;
  $blue-2: #177E89;
  $blue-3: #08605F;
  $black: #443d47;

  .flex-items {
    display: flex;
  }
  .tile-container {
    padding-left: 0;
    align-items: stretch;
    display: flex;
    flex: 1;
    justify-content: stretch;
    .blog-tile {
      border: solid 1px #177E89;
      margin-bottom: 1em;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      &:hover {
        .title {
          color: $blue-3;
        }
      }
      img {
        width: 100%;
        padding: 1em;
      }
      border: solid 1px $blue-2;
      margin-bottom: 1em;
      .tileText {
        padding: 0 .5em;
        span {
          color: $blue-1;
          text-decoration: none;
          margin: 1em 0;
          font-size: 1.2em;
          letter-spacing: .8px;
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
  @media only screen and (max-width: 768px) {
    .flex-items {
      display: block;
    }
  }
</style>
