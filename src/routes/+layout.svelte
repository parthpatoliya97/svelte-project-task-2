<script>
	import '../app.css';
	import Navbar from '$lib/component/Navbar.svelte';
	import Footer from '$lib/component/Footer.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />
