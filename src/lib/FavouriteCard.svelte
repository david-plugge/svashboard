<script lang="ts">
	import type { Favourite } from './types';

	export let item: Favourite;
</script>

<a class="card p-4" href={item.url}>
	<img
		width="64"
		height="64"
		loading="lazy"
		src={item.image ?? `https://www.google.com/s2/favicons?domain=${item.url}&sz=64`}
		alt={item.name}
	/>

	<div>{item.name}</div>
</a>
