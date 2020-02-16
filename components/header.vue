<template>
    <section class="content-piece">
		<div class="container-fluid main" id="main">
			<div class="container h-100">
				<div class="row">
					<div class="fixed-to-top">
						<div class="main-title">
							<h1>
                                {{ this.title }}
                            </h1>
							<span>
								{{ this.subTitle }}
							</span>
						</div>
					</div>
				</div>
				<div class="row">	
					<div class="fixed-to-bottom">
						<div class="main-message">
							<span>{{ this.bottomText }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HeaderSection',
	data () {
		return {
			title: 'Daragh Cassidy',
			subTitle: 'Web Development',
			bottomText: 'I like to build things'
		}
	}
}
</script>

<style lang="scss" scoped>
	$brown: #8E936D;
	$blue-2: #177E89;

	.main {
		display: flex;
		align-items: center !important;
		height: 100vh;
		background-color: #fff;
		position: relative;
		color: $blue-2;
		.main-title {
			text-align: left;
			font-family: 'Cabin', sans-serif;
			text-transform: uppercase;
			font-weight: 900;
			font-size: 2em;
				h1 {
					margin-bottom: 0;
				}

		}
		.main-message {
			font-size: 2.5em;
			font-family: 'Cabin', sans-serif;
			text-transform: capitalize;
			span {
				border-bottom: 6px solid $brown;
			}
		}
		.fixed-to-bottom {
			position: absolute;
			bottom: 100px;
			right: 10%;
		}
	}
	@media (max-width: 480px) {
		.main {
			.main-title {
				font-size: 1.8em;
			}
			.main-message {
				font-size: 1.8em;
			}
		}
	}
	@media (max-width: 767px) and (orientation: landscape) {
		.main {
			height: 35em;
			font-size: 0.7em;
			padding-top: 0.75em;
			padding-bottom: 0.75em;
		}
	}
</style>