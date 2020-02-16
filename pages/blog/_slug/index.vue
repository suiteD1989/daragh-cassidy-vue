<template>
  <div>
    <Navigation/>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '~/components/navigation.vue';
import Footer from '~/components/footer.vue';

import {createClient} from '~/plugins/contentful';
const contentfulClient = createClient();

export default {
  name: 'index',
  components: {
    Navigation,
    Footer
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
        'content_type': 'blogPost',
        'fields.slug': params.id
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

<style>

</style>
