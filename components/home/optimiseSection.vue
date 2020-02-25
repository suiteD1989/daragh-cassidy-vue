<template>
    <section class="content-piece">
		<div class="container-fluid section-animate niche" id="niche">
			<div class="container">
				<div class="row">
					<div class="col-12 top">
						<h2>
                            <span>{{ this.skills.title }}</span>
                        </h2>
					</div>	
					<div class="col-md-8 col-xs-12 col-sm-12 d-flex align-items-center">
                        <p v-for="text in (skills.text)" v-bind:key="text">
                            {{ text }}
                        </p>
					</div>
					<div class="col-md-4 col-xs-12 col-sm-12 niche-icon text-center">
                        <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.daraghcassidy.com%2F&tab=desktop" target="_blank">
                            <font-awesome-icon :icon="['fas', 'tachometer-alt']"/>
                        </a>
					</div>
				</div>
                <br>
                <br>
                <br>
				<div class="row">	
					<div class="col-md-4 col-xs-12 col-sm-12 niche-icon text-center">
                        <font-awesome-icon :icon="['fas', 'mobile']"/>
					</div>
					<div class="col-md-6 col-xs-12 col-sm-12 d-flex align-items-center">
                        <p v-for="text in (responsive.text)" v-bind:key="text">
                            {{ text }}
                        </p>
					</div>
				</div>
			</div>	
		</div>
	</section>
</template>

<script>
export default {
    name: 'OptimiseSection',
    data () {
        return {
            skills: {
                title: 'Things I\'m Good At',
                text: [
                    'Less is more when it comes to building performent web apps and sites. I keep overheads to a minimum by reducing third party dependencies, this keeps pages light and fast. Run this page through Google\'s lighthouse and see for yourself.'
                ]
            },
            responsive: {
                text: [
                    'What good is a site that doesn\'t look fantastic on all devices? All my sites look great at every screen size to ensure that every user has the same enjoyable experience.'
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $brown: #8E936D;
    $blue-1: #598381;
    $blue-2: #177E89;
    $white: #fbfbfb;

    .niche {
        display: flex;
        align-items: center !important;
        color: $blue-1;
        height: 100vh;
        background-color: $white;
        h2 {
            text-transform: uppercase;
            font-size: 3em;
            font-weight: 900;
            color: $blue-2;
        }
        a {
            color: $blue-2;
            font-weight: bold;
        }
        p {
            font-size: 1.2em;
            letter-spacing: .8px;
        }
        .top {
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            span {
                border-bottom: 6px solid $brown;
            }
        }
        .niche-icon {
            font-size: 7em;
        }
    }
    @media (max-width: 767px) {
		.niche {
            h2 {
                font-size: 1.4em;
            }
            height: 100%;
            padding-top: 2em;
            padding-bottom: 2em;
            .niche-icon {
                display: flex;
                order: 2;
                justify-content: center;
            }
        }
	}
	@media (max-width: 767px) and (orientation: landscape) {
		.niche {
            height: 45em;
            font-size: 0.7em;
            padding-top: 0.75em;
            padding-bottom: 0.75em;
        }
	}
</style>