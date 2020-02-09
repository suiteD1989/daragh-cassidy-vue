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
            hamburger.classList.toggle('is-active');
            dropdown.classList.toggle('is-active');
        }
    }
}
</script>