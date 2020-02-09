<template>
    <header>
		<nav class="navbar fixed-top">
	 		<span class="navbar-brand nav-title">
  				<a section-target="main" class="return-top">DC</a>
  			</span>
		  	<button class="hamburger hamburger--spin" type="button" v-on:click="toggleNavigation">
		  		<span class="hamburger-box">
			    	<span class="hamburger-inner"></span>
			  	</span>
			</button>
			<div class="dropdown-content">
				<a v-on:click="scrollToSection('about')" data-target="about" class="section-link">About</a>
				<a v-on:click="scrollToSection('niche')" data-target="niche" class="section-link">Optimisation</a>
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
            links: Object
        }
    },
    mounted () {
        this.hamburger = document.getElementsByClassName('hamburger')[0];
        this.dropdown = document.getElementsByClassName('dropdown-content')[0];
        this.links = document.getElementsByClassName('section-link');
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
            })
        },
        /**
         * scrollToSection bring user to section from clicking nav item
         */
        scrollToSection (target) {
            const section = document.getElementById(target)
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
        background: #fbfbfb;
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
            a {
                transition: all 1s;
                float: none;
                text-transform: uppercase;
                text-align: right !important;
                padding: 12px 16px;
                text-decoration: none;
                display: none;
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