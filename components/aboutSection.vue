<template>
    <section>
		<div class="container-fluid section-animate about" id="about">
			<div class="container">
				<div class="row">
					<div class="col-md-6 padding-0">
						<div class="col-md-12 top">
							<h2><span>About</span></h2>
						</div>
						<div class="col-md-12 bottom">
							<p>My Name is Daragh. I'm a developer based in Dublin, Ireland.</p>
							<p>If I'm not building something for the web, I'm probably in the gym or making dreadfull music.</p>
						</div>
					</div>
					<div class="col-md-6 padding-0">
						<div class="col-md-12 text-right top">
							<h2><span>Work</span></h2>
						</div>
						<div class="col-md-12 text-right bottom">
							<p>Howeya</p>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</section>
</template>

<script>
export default {
    name: 'AboutSection'
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
    }
</style>