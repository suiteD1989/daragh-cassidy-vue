<template>
    <div class="row about-author">
        <div class="col-12">
            <h2>About Daragh</h2>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 my-auto profile-parent">
            <img :data-src="this.details.fields.image.fields.file.url" class="lazyload profile" alt="Hi, my name is Daragh!">
        </div>
        <div class="col-md-9 col-lg-9 col-sm-12">
            <div class="col-12">
                <p>{{ this.details.fields.shortBio }}</p>
            </div>  
            <div class="col-12">
                <h2>Links / Social</h2>
            </div>
            <div class="col-12">
                <ul>
                    <li v-for="(link, index) in socialArray" v-bind:key="index">
                        <a :href="link.link" target="_blank">
                            {{link.title}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Author',
    props: {
        details: Object
    },
    data () {
        return {
            socialArray: []
        }
    },
    mounted () {
        this.combineSocial(this.details)
    },
    methods: {
        /**
        * Push all social links into array for easy access
        */
        combineSocial (items) {
            this.socialArray.push(
                {
                    'link': items.fields.github,
                    'title': 'Github'
                }, 
                {
                    'link':items.fields.instagram,
                    'title': 'Instagram'
                }, 
                {   
                    'link': items.fields.soundCloud,
                    'title': 'SoundCloud'
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
    .about-author {
        padding: 2em 0;
        ul, li {
            list-style: none;
            padding: 0;
            margin-bottom: .25em;
        }
        .profile {
            width: 100%;
        }
    }
    @media only screen and (max-width: 768px) {
        .about-author {
            .profile-parent {
                display: flex;
                justify-content: center;
                align-content: center;
            }
            .profile {
                width: 60%;
                height: 100%;
            }
        }
    }
</style>