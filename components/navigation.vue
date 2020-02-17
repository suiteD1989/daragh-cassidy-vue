<template>
    <header class="container-fluid">
		<nav class="container navbar fixed-top">
	 		<span class="navbar-brand nav-title">
  				<nuxt-link :to="'/'">
                  DC
                </nuxt-link>
  			</span>
		  	<button class="hamburger hamburger--spin" type="button" v-on:click="toggleNavigation">
		  		<span class="hamburger-box">
			    	<span class="hamburger-inner"></span>
			  	</span>
			</button>
			<div class="dropdown-content">
                <div
                    v-for="item in (navLinks)" 
                    v-bind:key="item.title"
                    class="section-link"
                >
                    <nuxt-link 
                        v-if="item.link"
                        :to="item.link" prefetch>
                        <span>
                            {{ item.title }}
                        </span>
                    </nuxt-link>
                    <span 
                        v-else 
                        v-on:click="scrollToSection(item.config)">
                        {{ item.title }}
                    </span>
                </div>
		    </div>
		</nav>	
	</header>
</template>

<script>
export default {
    name: 'Navigation',
    data () {
        return {
            hamburger: Object,
            dropdown: Object,
            links: Object,
            content: Object
        }
    },
    props: {
        navLinks: {
            required: true,
            type: Array
        }
    },
    mounted () {
        this.hamburger = document.getElementsByClassName('hamburger')[0];
        this.dropdown = document.getElementsByClassName('dropdown-content')[0];
        this.links = document.getElementsByClassName('section-link');
        this.content = document.getElementsByClassName('content-piece');
    },
    methods: {
        /**
         * toggleNavigation click listen to show/hide nav items
         */
        toggleNavigation () {
            this.hamburger.classList.toggle('is-active');
            this.dropdown.classList.toggle('show-hide');
            
            [].forEach.call(this.links, (item, index) => {
                item.classList.toggle('show-hide');
            });

            [].forEach.call(this.content, (item, index) => {
                item.classList.toggle('blur');
            });
        },
        /**
         * scrollToSection bring user to section from clicking nav item
         */
        scrollToSection (target) {
            const section = document.getElementById(target)
            this.toggleNavigation()
            section.scrollIntoView({
                behavior: "smooth", 
                block: "end", 
                inline: "nearest"
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    $green: #A2AD59;
    $blue-1: #598381;

    .navbar {
        position: relative;
        .hamburger-inner {
            background-color: $blue-1;
        }
        .hamburger-inner::after {
            background-color: $blue-1;
        }
        .hamburger-inner::before {
            background-color: $blue-1;
        }
        button {
            outline: 0;
            position: absolute;
            right: 0;
        }
        .navbar-brand {
            font-size: 4em;
            a {
                color: $blue-1;
                text-decoration: none;
            }
        }
        .nav-title {
            color: $blue-1;
            &:hover {
                cursor: pointer;
                color: $green;
            }
        }	
        .dropdown-content {
            display: none;
            transition: all 0.5s;
            position: absolute;
            width: 250px;
            height: 0;
            top: 4.8em;
            z-index: 1030;
            right: 0;
            span {
                transition: all .25s;
                float: none;
                text-transform: uppercase;
                text-align: right !important;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                color: $blue-1;
                &:hover {
                    color: $green;
                    text-decoration: underline;
                }
            }
        }
        .show-hide {
            display: block !important;
        }
    }
</style>