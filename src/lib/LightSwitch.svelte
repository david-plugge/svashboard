<script lang="ts">
	import {
		setInitialClassState,
		modeCurrent,
		setModeUserPrefers,
		setModeCurrent
	} from '@skeletonlabs/skeleton';
	import { Moon, Sun } from 'lucide-svelte';

	function update() {
		$modeCurrent = !$modeCurrent;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}
</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>

<div>
	<button
		type="button"
		class="w-16 h-8 bg-surface-400/25 text-on-surface-token border border-surface-400 border-opacity-50 hover:border-opacity-75 rounded-full transition-colors"
		on:click={update}
	>
		<div
			class="stack place-items-center h-full aspect-square scale-[0.8] transition bg relative dark:translate-x-full rounded-full bg-surface-50-900-token"
		>
			<span class="moon transition-opacity opacity-0 dark:opacity-100 text-surface-50">
				<Moon />
			</span>
			<span class="sun transition-opacity dark:opacity-0 text-surface-900"><Sun /></span>
		</div>
	</button>
</div>
