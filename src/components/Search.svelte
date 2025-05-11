<!-- src/components/Search.svelte -->
<script>
  import Fuse from 'fuse.js';
  import SveltePostPreview from './SveltePostPreview.svelte';

  export let posts = [];  // Array of { slug, title }
  let query = '';
  let results = [];

  // 1. Log initial posts
  console.log('[Search] component mounted. posts prop:', posts);

  // 2. Initialize Fuse and log it
  const fuse = new Fuse(posts, {
    keys: ['title'],
    threshold: 0.3,    // typo tolerance
  });
  console.log('[Search] Fuse.js instance created with options:', fuse.options);

  // 3. Watch for changes to `query`
  $: console.log('[Search] query updated to:', query);

  // 4. Reactive search logic with logs
  $: if (query.trim()) {
    console.log(`[Search] running fuse.search("${query}")`);
    const fuseResults = fuse.search(query);
    console.log('[Search] raw Fuse results:', fuseResults);

    results = fuseResults.map(r => r.item);
    console.log('[Search] mapped results items:', results);
  } else {
    results = [];
    console.log('[Search] query is empty, results cleared');
  }
</script>

<div class="my-6">
  <input
    type="search"
    placeholder="Search by title…"
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
