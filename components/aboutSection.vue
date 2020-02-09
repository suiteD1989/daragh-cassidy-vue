<template>
    <section>
		<div class="container-fluid section-animate about" id="about">
			<div class="container">
				<div class="row">
					<div class="col-md-6 padding-0">
						<div class="col-md-12 top">
							<h2>
                                <span>{{ this.sectionLeft.title }}</span>
                            </h2>
						</div>
						<div class="col-md-12 bottom">
							<p v-for="text in (sectionLeft.text)" v-bind:key="text">
                                {{ text }}
                            </p>
						</div>
					</div>
					<div class="col-md-6 padding-0">
						<div class="col-md-12 text-right top">
							<h2>
                                <span>{{ this.sectionRight.title }}</span>
                            </h2>
						</div>
						<div class="col-md-12 text-right bottom">
							<p v-for="text in (sectionRight.text)" v-bind:key="text">
                                {{ text }}
                            </p>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</section>
</template>

<script>
export default {
    name: 'AboutSection',
    data () {
        return {
            sectionLeft: {
                title: 'title',
                text: [
                    'first paragraph',
                    'second paragraph'
                ]
            },
            sectionRight: {
                title: 'title',
                text: [
                    'first paragraph',
                    'second paragraph'
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $green: #A2AD59;
    $brown: #8E936D;
    $blue-1: #598381;

    .about {
        display: flex;
        align-items: center !important;
        color: $blue-1;
        height: 100vh;
        background: rgba(142,147,109, .3);
        h2 {
            font-size: 3em;
            font-weight: 900;
            text-transform: uppercase;
        }
        a {
            color: $green;
        }
        p {
            font-size: 1.2em;
            font-weight: 100;
        }
        .top {
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            span {
                border-bottom: 6px solid $brown;
            }
        }
        .bottom {
            padding-top: 0.5em;
            padding-bottom: 0.5em;
        }
        .profile {
            img {
                width: 50%;
            }
        }
        .text-right {
            text-align: right;
        }
        .padding-0{
            padding-right :0;
            padding-left: 0;
        }
    }
    @media (max-width: 480px) {
		.about {
            h2 {
                font-size: 1.4em;
            }
            height: 100%;
            padding-top: 2em;
            padding-bottom: 2em;
        }
	}
	@media (max-width: 767px) and (orientation: landscape) {
		.about {
            height: 35em;
            font-size: 0.7em;
            padding-top: 0.75em;
            padding-bottom: 0.75em;
        }
	}
</style>