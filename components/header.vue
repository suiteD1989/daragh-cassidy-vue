<template>
    <section>
		<div class="container-fluid main" id="main">
			<div class="container h-100">
				<div class="row">
					<div class="fixed-to-top">
						<div class="main-title">
							<h1>
                                <span>Daragh Cassidy | Web Development</span>
                            </h1>
						</div>
					</div>
				</div>
				<div class="row">	
					<div class="fixed-to-bottom">
						<div class="main-message">
							<span>I like to build things</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
    name: 'HeaderSection'
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
		color: $blue-2;
		h1 {
			text-align: left;
			font-family: 'Cabin', sans-serif;
			text-transform: uppercase;
			font-size: 2.5em;
			font-weight: 900;
		}
		.main-message {
			font-size: 2.5em;
			font-family: 'Cabin', sans-serif;
			text-transform: capitalize;
			span {
				border-bottom: 6px solid $brown;
			}
		}
	}
</style>