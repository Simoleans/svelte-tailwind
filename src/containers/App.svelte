<script>
	import Global from '../components/Global.svelte';
	export let name;
</script>


<main>
	<div class="container-svelte">
		<Global />
		<h1 class="text-green-500">Hello {name}!</h1>
		<p>Svelte + Tailwind 2.0.2</p>
	  </div>
</main>
