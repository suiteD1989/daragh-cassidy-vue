<template>
    <footer>
        <div class="container-fluid footer">
			<div class="col-md-12">
				<div class="row social-links">
					<ul>
						<li>
							<a href="https://github.com/suiteD1989" target="_blank">
								<font-awesome-icon class="icons github" :icon="['fab', 'github']"/>
							</a>
							<a href="https://www.instagram.com/daragh_cassidy/" target="_blank">
								<font-awesome-icon class="icons instagram" :icon="['fab', 'instagram']"/>
							</a>
							<a href="https://soundcloud.com/thesweetd" target="_blank">
								<font-awesome-icon class="icons soundcloud" :icon="['fab', 'soundcloud']"/>
							</a>
						</li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-12">
						<p>&#169;<span class="date"></span> Daragh Cassidy Web Development</p>
					</div>		
				</div>
			</div>
		</div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    $green: #A2AD59;
    $brown: #8E936D;
    $blue-1: #598381;
    $blue-2: #177E89;
    $blue-3: #08605F;

    .footer {
        background-color: $blue-3;
        padding-top: 1em;
        padding-bottom: 1em;
        ul, li {
            list-style: none;
        }
        ul {
            margin: 0;
            padding: 0;
        }
        p {
            text-align: center;
            font-size: 0.7em;
        }
        .icons {
            font-size: 4em;
            color: #fff;
            padding: 0.1em;
        }
        .github {
            &:hover {
            color: #24292e;
            -webkit-transition: color 0.5s ease-out;
            -moz-transition: color 0.5s ease-out;
            -o-transition: color 0.5s ease-out;
            transition: color 0.5s ease-out;
            }
        }
        .instagram {
            &:hover {
            color: #8a3ab9;
            -webkit-transition: color 0.5s ease-out;
            -moz-transition: color 0.5s ease-out;
            -o-transition: color 0.5s ease-out;
            transition: color 0.5s ease-out;
            }
        }
        .soundcloud {
            &:hover {
            color: #f50;
            -webkit-transition: color 0.5s ease-out;
            -moz-transition: color 0.5s ease-out;
            -o-transition: color 0.5s ease-out;
            transition: color 0.5s ease-out;
            }
        }
        .social-links {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

</style>