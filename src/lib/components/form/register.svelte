<script lang="ts">
	import * as Form from '$lib/components/ui/form'
	import { registerSchema, type RegisterSchema } from '$lib/utils/form-schema'
	import type { SuperValidated } from 'sveltekit-superforms'

	export let form: SuperValidated<RegisterSchema>
</script>

<Form.Root action="?/register" method="POST" {form} schema={registerSchema} let:config>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="password">
		<Form.Item>
			<Form.Label>Password</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="confirmPassword">
		<Form.Item>
			<Form.Label>Confirm Password</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<Form.Button>Register</Form.Button>
</Form.Root>
