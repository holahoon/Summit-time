<script lang="ts">
	import { z } from 'zod';

	export const formSchema = z.object({
		firstName: z.string(),
		lastName: z.string(),
		email: z.string().email()
	});
</script>

<h1>Register</h1>
