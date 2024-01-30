<script lang="ts">
	import type { PageData } from './$types'
	import RegisterForm from '$lib/components/form/register.svelte'

	export let data: PageData
	$: ({ form } = data)
</script>

<h1>Register</h1>

<RegisterForm {form} />
