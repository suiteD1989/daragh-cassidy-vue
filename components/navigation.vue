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
				<a section-target="about" class="section-link">About</a>
				<a section-target="niche" class="section-link">Optimisation</a>
				<a section-target="contact" class="section-link">Contact</a>
		    </div>
		</nav>	
	</header>
</template>

<script>
export default {
    name: 'Navigation',
    methods: {
        /**
         * toggleNavigation click listen to show/hide nav items
         */
        toggleNavigation () {
            const hamburger = document.getElementsByClassName('hamburger')[0];
            const dropdown = document.getElementsByClassName('dropdown-content')[0];
            const links = document.getElementsByClassName('section-link');
            hamburger.classList.toggle('is-active');
            dropdown.classList.toggle('show-hide');
            
            [].forEach.call(links, (item, index) => {
                item.classList.toggle('show-hide');
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    $green: #A2AD59;
    $brown: #8E936D;
    $blue-1: #598381;
    $blue-2: #177E89;
    $blue-3: #08605F;
    $white: #fbfbfb;
    $black: #202020;
    $red: #b71212;
    
    .navbar {
        position: relative;
        background: none;
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
        .toggle-visibilty {
            height: 145px;
        }
    }
</style>