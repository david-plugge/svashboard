<script lang="ts">
	import { favs } from '$lib/data';
</script>

<div class="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 p-8">
	{#each favs as item}
		{@const image =
			item.type === 'item'
				? `https://www.google.com/s2/favicons?domain=${item.url}&sz=64`
				: item.image}

		<a class="card p-4" href={item.url}>
			{#if image}
				<img width="64" height="64" loading="lazy" src={image} alt={item.name} />
			{/if}

			<div>{item.name}</div>
		</a>
	{/each}
</div>
