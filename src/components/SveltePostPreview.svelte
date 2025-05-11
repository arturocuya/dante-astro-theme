<script>
  export let post; // { slug, title }
</script>

<article class="mb-8 p-4 border rounded">
  <h2 class="text-xl font-semibold">
    <a href={`/blog/${post.slug}/`}>{post.title}</a>
  </h2>
</article>
