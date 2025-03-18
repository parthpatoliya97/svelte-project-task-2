<script>
	export let data;
	const { hero, products, logos, features, pricing, howItWorks, gallery, testimonials, faq, ctas } =
		data.data;
</script>

<!-- hero section -->
<div class="hero bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img class="h-auto w-1/2" src={hero.image} alt="product pic" />
		<div>
			<h1 class="text-5xl font-bold">{hero.title}</h1>
			<p class="py-6">
				{hero.description}
			</p>
			<div class="space-x-4">
				{#each hero.ctas as cta}
					<button class="btn btn-primary"><a href="cta.title">{cta.title}</a></button>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- product section -->
<div class="bg-gray-50 p-10">
	<!-- Section Title -->
	<h1 class="mb-2 text-center text-4xl font-bold text-gray-900">{products.title}</h1>

	<!-- Section Description -->
	<p class="mb-8 text-center text-2xl text-black">{products.description}</p>

	<hr class="my-6 border-gray-300" />

	<!-- Products Grid -->
	<div class="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each products as product}
			<div class="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
				<!-- Product Image -->
				<img
					class="mb-4 h-48 w-full rounded-md object-cover"
					src={product.image}
					alt="Product pic"
					loading="lazy"
				/>

				<!-- Product Title -->
				<h3 class="mb-2 text-xl font-semibold text-gray-800">
					<a href="/product" class="transition hover:text-blue-600">{product.title}</a>
				</h3>

				<!-- Product Description -->
				<p class="mb-4 text-black">{product.description}</p>

				<!-- CTA Button -->
				<a
				    href={`/product/${product.ctaLink}`}
					class="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition duration-300 hover:bg-blue-700"
				>
					{product.ctaText}
				</a>
			</div>
		{/each}
	</div>
</div>

<!-- logos section -->
<div class="bg-gray-50 p-10 text-center">
	<div class="text-center">
		<h1 class="text-4xl text-black">{logos.title}</h1>
		<h1 class="text-2xl text-black">{logos.description}</h1>
		<div class="mt-3 flex justify-center">
			<span class="inline-block h-1 w-28 rounded bg-indigo-500"></span>
		</div>
	</div>

	<div class="mt-8 grid grid-cols-1 gap-8 p-8 md:grid-cols-3 lg:grid-cols-4">
		{#each logos.data as data}
			<img
				class="h-100 w-100 m-3 object-contain p-3"
				src={data.image}
				alt="logo pic"
				loading="lazy"
			/>
		{/each}
	</div>
</div>

<!-- features section -->
<div class="mb-5 mt-10">
	<h1 class="text-center text-4xl font-bold">{features.title}</h1>
	<h1 class="text-center text-2xl font-bold">{features.description}</h1>
	<div class="mt-3 flex justify-center">
		<span class="inline-block h-1 w-28 rounded bg-indigo-500"></span>
	</div>
</div>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each features.data as data}
		<div class="rounded-md bg-slate-50 p-6 shadow-md duration-300 hover:shadow-lg">
			<li class="list-none">
				<div class="mb-3 inline-block p-4">
					<img src={data.image} alt="features pic" loading="lazy" />
				</div>
				<h1 class="mb-3 text-2xl font-bold text-slate-800">{data.title}</h1>
				<h1 class="text-lg text-black">{data.description}</h1>
			</li>
		</div>
	{/each}
</div>

<!-- pricing section -->
<div class="mt-5 text-center">
	<h1 class="text-4xl font-bold text-white">{pricing.title}</h1>
	<h2 class="mt-2 text-2xl font-bold text-white">{pricing.description}</h2>
	<div class="mt-3 flex justify-center">
		<span class="inline-block h-1 w-28 rounded bg-indigo-500"></span>
	</div>
</div>

<div class="container mx-auto px-8 py-36">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each pricing.data as data}
			<div class="rounded-lg bg-white px-8 py-12 text-center shadow-lg">
				<span class="mb-3 inline-block text-lg font-semibold uppercase tracking-widest text-black"
					>{data.title}</span
				>
				<h3 class="mb-6 text-6xl font-bold text-black">{data.price}</h3>
				<ul>
					<li class="mb-3 pb-3 text-lg">{data.description}</li>
					<li class="mb-3 pb-3 text-lg">1 year hosting</li>
					<li class="mb-3 pb-3 text-lg">One free domain</li>
					<li class="mb-3 pb-3 text-lg">100GB bandwidth</li>
				</ul>
				<a
					class="mt-5 inline-block rounded-lg bg-blue-500 px-8 py-3 text-white duration-300 hover:bg-blue-900"
					href={data.ctaLink}>{data.ctaText}</a
				>
			</div>
		{/each}
	</div>
</div>

<!-- how-it-works section -->
<section>
	<div class="container mx-auto p-10">
		<!-- Title & Description -->
		<div class="mb-8 text-center">
			<h1 class="text-3xl font-bold">{howItWorks.title}</h1>
			<p class="text-gray mt-2 text-lg">{howItWorks.description}</p>
			<span class="mt-3 inline-block h-1 w-28 rounded bg-indigo-500"></span>
		</div>

		<!-- Steps Section (Grid Layout) -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
			{#each howItWorks.data as data}
				<div class="rounded-lg bg-gray-100 p-6 text-center shadow-lg">
					<img
						class="mx-auto mb-4 h-16 w-16"
						src={data.icon}
						alt="how it works icon pic"
						loading="lazy"
					/>
					<h2 class="text-xl font-semibold text-black">{data.title}</h2>
					<p class="mt-2 text-black">{data.description}</p>
				</div>
			{/each}
		</div>

		<!-- Demo & Guide Links -->
		<div class="mt-10 text-center">
			<button class="btn btn-secondary"><a href={howItWorks.demoVideo}>DemoVideo</a></button>

			<button class="btn btn-secondary"><a href={howItWorks.setupGuides}>setUpGuide</a></button>
		</div>
	</div>
</section>

<!-- gallery section -->
<section>
	<div class="container mx-auto p-10">
		<div class="mb-8 text-center">
			<h1 class="text-3xl font-bold">{gallery.title}</h1>
			<h1 class="text-3xl font-bold">{gallery.description}</h1>

			<span class="mt-3 inline-block h-1 w-28 rounded bg-indigo-500"></span>
		</div>

		<!-- Responsive Image Gallery -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each gallery.images as image}
				<div class="p-4">
					<img
						class="h-auto w-full rounded-lg object-cover shadow-lg"
						src={image}
						alt="app screenshot pic"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- testimonials section -->
<section>
	<div class="container mx-auto p-10">
		<!-- Main Title & Description -->
		<div class="mb-8 text-center">
			<h1 class="text-gray text-3xl font-bold">{testimonials.title}</h1>
			<p class="text-gray mt-2 text-lg">{testimonials.description}</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
			{#each testimonials.data as data}
				<div class="h-full rounded-2xl bg-gray-200 p-5 text-center shadow-lg">
					<img
						class="inline-block h-24 w-24 rounded-full border-2 border-gray-700 bg-opacity-10 object-cover"
						src={data.image}
						alt="testimonials pic"
						loading="lazy"
					/>

					<h2 class="mt-4 text-xl font-semibold text-black">{data.title}</h2>
					<p class="mt-2 text-black">{data.description}</p>

					<span class="mb-2 mt-4 inline-block h-1 w-14 rounded bg-indigo-500"></span>

					<h2 class="text-lg font-medium text-gray-900">Rating: {data.rating} ⭐</h2>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- faq section -->
<section class="container mx-auto p-10">
	<!-- FAQ Image -->
	<div class="text-center">
		<img
			class="mx-auto h-auto w-48 rounded-lg shadow-lg"
			src={faq.image}
			alt="FAQ pic"
			loading="lazy"
		/>
	</div>

	<!-- FAQ Title & Description -->
	<div class="mt-6 text-center">
		<h1 class="text-gray text-4xl font-bold">{faq.title}</h1>
		<p class="text-gray mt-2 text-lg">{faq.description}</p>
		<div class="mt-3 flex justify-center">
			<span class="inline-block h-1 w-28 rounded bg-indigo-500"></span>
		</div>
	</div>

	<!-- FAQ List -->
	<div class="mt-8 space-y-6">
		{#each faq.data as data}
			<div class="rounded-lg bg-gray-100 p-6 shadow-md">
				<h2 class="text-xl font-semibold text-gray-800">{data.title}</h2>
				<p class="mt-2 text-gray-600">{data.description}</p>
			</div>
		{/each}
	</div>
	<hr class="mt-8 border-gray-300" />
</section>

<!-- CTA section -->
<ul class="flex flex-wrap justify-center gap-4">
	{#each ctas as cta}
		<li>
			<a href={cta.link} class="btn btn-active btn-secondary">
				{cta.title}
			</a>
		</li>
	{/each}
</ul>
