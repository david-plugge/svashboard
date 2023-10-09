<script lang="ts">
	import '../app.css';

	import LightSwitch from '$lib/LightSwitch.svelte';
</script>

<nav class="flex px-8 py-4 border-b border-surface-500/30 gap-4 items-center justify-between">
	<a
		href="/"
		class="text-3xl bg-clip-text bg-gradient-to-br variant-gradient-primary-secondary text-transparent font-bold"
	>
		Svashboard
	</a>

	<LightSwitch />
</nav>

<slot />
