<template>
    <section>
		<div class="container-fluid section-animate niche" id="niche">
			<div class="container">
				<div class="row">
					<div class="col-12 top">
						<h2><span>Page Speed</span></h2>
					</div>
					
					<div class="col-md-8 col-xs-12 col-sm-12 d-flex align-items-center">
						<p>Years of experience building web sites that are lightning fast and top the <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.daraghcassidy.com%2F&tab=desktop" target="_blank"> Google PageSpeed Insights charts</a>.</p>
					</div>

					<div class="col-md-4 col-xs-12 col-sm-12 niche-icon text-center">
                        <font-awesome-icon :icon="['fas', 'tachometer-alt']"/>
					</div>
				</div>
				<div class="row">	
					<div class="col-12 top">
						<h2><span>Responsiveness</span></h2>
					</div>

					<div class="col-md-4 col-xs-12 col-sm-12 niche-icon text-center">
                        <font-awesome-icon :icon="['fas', 'mobile']"/>
					</div>

					<div class="col-md-6 col-xs-12 col-sm-12 d-flex align-items-center">
						<p>More than half of all internet traffic is mobile based. I pride myself on building quality repsonisve sites that look great on all devices.</p>
					</div>
				</div>
			</div>	
		</div>
	</section>
</template>

<script>
export default {
    name: 'OptimiseSection'
}
</script>

<style lang="scss" scoped>

</style>