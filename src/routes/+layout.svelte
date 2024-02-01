<script lang="ts">
	import '$styles/app.pcss'
	import Logo from '$lib/components/logo/logo-ipsum.svelte'
</script>

<nav>
	<a href="/"><Logo /></a>

	<ul>
		<li>
			<a href="/login">Login</a>
		</li>
	</ul>
</nav>

<slot />
