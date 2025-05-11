<!-- src/components/Search.svelte -->
<script>
  import Fuse from 'fuse.js';
  import SveltePostPreview from './SveltePostPreview.svelte';

  export let posts = [];  // Array of { slug, title }
  let query = '';
  let results = [];

  // 2. Initialize Fuse and log it
  const fuse = new Fuse(posts, {
    keys: ['title'],
    threshold: 0.3,    // typo tolerance
  });

  // 4. Reactive search logic with logs
  $: if (query.trim()) {
    const fuseResults = fuse.search(query);

    results = fuseResults.map(r => r.item);
  } else {
    results = [];
  }
</script>

<div class="my-6">
  <input
    type="search"
    placeholder="Buscar artículo"
    bind:value={query}
    class="w-full p-2 border rounded"
  />

  {#if query.trim()}
    {#if results.length}
      {#each results as post}
        <SveltePostPreview {post} />
      {/each}
    {:else}
      <p class="mt-4 text-gray-600">No results found.</p>
    {/if}
  {/if}
</div>
