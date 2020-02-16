<template>
  <div> 
      <div  v-for="(post, index) in posts" v-bind:key="index">
          <nuxt-link :to="'/blog/' + post.fields.slug.trim()">
             {{ post.fields.title }}
          </nuxt-link>
      </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
      posts: Array
  }
}
</script>

<style>

</style>
