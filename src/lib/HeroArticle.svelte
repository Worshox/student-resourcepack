<script>
	export let href;
	export let src;
	export let alt;
</script>

<article>
	<a {href}>
		<img {src} {alt} />
	</a>
</article>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		aspect-ratio: 9/10;
		border-radius: 50px;
		box-shadow: 5px 5px 10px 0px #f7921e80;
	}
</style>
