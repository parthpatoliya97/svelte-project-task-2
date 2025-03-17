<script>
	export let data;
	const {
		pageMetadata,
		hero,
		whyJupiterMeet,
		keyFeatures,
		comparisonTable,
		versionRecommendations,
		comparisonWithOthers,
		testimonial,
		callToAction
	} = data;
</script>

<!-- pagemetadata section -->
<div class="mx-auto max-w-2xl space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
	<h1 class="text-3xl font-bold text-gray-800">{pageMetadata.pageTitle}</h1>

	<h2 class="text-xl text-blue-600 hover:underline">
		<a href={pageMetadata.urlSlug} target="_blank">{pageMetadata.urlSlug}</a>
	</h2>

	<p class="text-lg text-gray-600">{pageMetadata.metaDescription}</p>

	<span class="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
		{pageMetadata.compare_app_name}
	</span>
</div>

<!-- hero section -->
<div class="pt-24">
	<div class="container mx-auto flex flex-col flex-wrap items-center px-3 md:flex-row">
		<!-- Left Column -->
		<div class="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
			<h1 class="my-4 text-5xl font-bold leading-tight">{hero.title}</h1>
			<p class="mb-8 text-2xl leading-normal">{hero.description}</p>

			<div class="flex flex-wrap gap-4">
				{#each hero.ctas as cta}
					<a
						href={cta.link}
						class="rounded-full bg-white px-8 py-4 font-bold text-gray-800 shadow-lg hover:underline"
					>
						{cta.title}
					</a>
				{/each}
			</div>
		</div>

		<!-- Right Column -->
		<div class="w-full py-6 text-center md:w-3/5">
			<img
				class="z-50 w-full md:w-4/5"
				src="https://thertclabs.com/jupitermeet-pro/images/hero/1-2.png"
				alt="hero pic"
			/>
		</div>
	</div>
</div>
<br /><br />

<!-- whyJupiterMeet section -->
<div class="mb-5 mt-10">
	<h1 class="text-center text-4xl font-bold">{whyJupiterMeet.title}</h1>
	<h1 class="text-center text-2xl font-bold">{whyJupiterMeet.description}</h1>
	<div class="mt-3 flex justify-center">
		<span class="inline-block h-1 w-28 rounded bg-indigo-500"></span>
	</div>
</div>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each whyJupiterMeet.data as data}
		<div class="rounded-md bg-slate-50 p-6 shadow-md duration-300 hover:shadow-lg">
			<li class="list-none">
				<div class="mb-3 inline-block p-4">
					<img src={data.icon} alt="features pic" loading="lazy" />
				</div>
				<h1 class="mb-3 text-2xl font-bold text-slate-800">{data.title}</h1>
				<h1 class="text-lg text-black">{data.description}</h1>
			</li>
		</div>
	{/each}
</div>
<br /><br />

<!-- keyFeatures section -->
<div class="mb-5 mt-10">
	<h1 class="text-center text-4xl font-bold">{keyFeatures.title}</h1>
	<!-- <img src={keyFeatures.icon} alt="keyFeatures pic" loading="lazy" /> -->
	<div class="mt-3 flex justify-center">
		<span class="inline-block h-1 w-28 rounded bg-indigo-500"></span>
	</div>
</div>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each keyFeatures.data as data}
		<div class="rounded-md bg-slate-50 p-6 shadow-md duration-300 hover:shadow-lg">
			<li class="list-none">
				<div class="mb-3 inline-block p-4">
					<img src={data.icon} alt="features pic" loading="lazy" />
				</div>
				<h1 class="mb-3 text-2xl font-bold text-slate-800">{data.title}</h1>
				<h1 class="text-lg text-black">{data.description}</h1>
			</li>
		</div>
	{/each}
</div>
<br><br>


<!-- comparisontable section -->
<div class="mt-10 overflow-x-auto px-4">
	<h1 class="text-center text-4xl font-bold text-white">{comparisonTable.title}</h1>
	<p class="mt-2 text-center text-2xl text-white">{comparisonTable.description}</p>

	<div class="mt-6">
		<table class="w-full border-collapse border border-gray-300 shadow-lg">
			<!-- Table Head -->
			<thead>
				<tr class="bg-indigo-500 text-white">
					<th class="p-4 text-left text-lg">Features</th>
					<th class="p-4 text-center text-lg">JupiterMeet</th>
					<th class="p-4 text-center text-lg">Zoom</th>
					<th class="p-4 text-center text-lg">Remarks</th>
				</tr>
			</thead>

			<!-- Table Body -->
			<tbody>
				{#each comparisonTable.data as feature}
					<tr class="border-b border-gray-300">
						<td class="p-4 text-white">{feature.title}</td>
						<td class="p-4 text-center font-semibold">{feature.description_1}</td>
						<td class="p-4 text-center font-semibold">{feature.description_2}</td>
						<td class="p-4 text-center">{feature.description_3}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
<br /><br />
<br><br>

<!-- versionRecommendations section -->
<div class="hero bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img
			src={versionRecommendations.image}
			class="max-w-sm rounded-lg shadow-2xl"
			alt="version-conteol-pic"
			loading="lazy"
		/>
		<div>
			<h1 class="text-5xl font-bold">{versionRecommendations.title}</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
	</div>
</div>

<div class="container mx-auto p-6">
	<section class="rounded-lg p-8 text-center shadow-md">
		<div class="mt-8 grid gap-6 md:grid-cols-2">
			{#each versionRecommendations.data as option}
				<div
					class="rounded-xl border-l-8 border-blue-500 bg-white p-6 shadow-lg transition hover:scale-105"
				>
					<h2 class="text-2xl font-semibold text-gray-700">{option.title}</h2>
					<p class="mt-2 text-lg text-gray-500">{option.description}</p>
				</div>
			{/each}
		</div>
	</section>
</div>

<!-- comparisonWithOthers section -->
<div class="mb-5 mt-10">
	<h1 class="text-center text-4xl font-bold">{comparisonWithOthers.title}</h1>
	<!-- <img src={keyFeatures.icon} alt="keyFeatures pic" loading="lazy" /> -->
	<div class="mt-3 flex justify-center">
		<span class="inline-block h-1 w-28 rounded bg-indigo-500"></span>
	</div>
</div>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each comparisonWithOthers.data as data}
		<div class="rounded-md bg-slate-50 p-6 shadow-md duration-300 hover:shadow-lg">
			<li class="list-none">
				<div class="mb-3 inline-block pl-8">
					<img src={data.image} alt="features pic" loading="lazy" />
				</div>
				<h1 class="mb-3 text-2xl font-bold text-slate-800">{data.title}</h1>
			</li>
		</div>
	{/each}
</div>
<br /><br />

<!-- testimonial section -->
<section>
	<div class="container mx-auto p-10">
		<!-- Main Title & Description -->
		<div class="mb-8 text-center">
			<h1 class="text-gray text-3xl font-bold">{testimonial.title}</h1>
			<!-- <p class="text-gray mt-2 text-lg">{testimonials.description}</p> -->
		</div>

		<!-- Testimonials Grid -->
		<div class="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
			{#each testimonial.data as data}
				<div class="h-full rounded-2xl bg-gray-200 p-5 text-center shadow-lg">
					<img
						class="inline-block h-24 w-24 rounded-full border-2 border-gray-700 bg-opacity-10 object-cover"
						src={data.image}
						alt="testimonials pic"
						loading="lazy"
					/>

					<!-- <h2 class="mt-4 text-xl font-semibold text-black">{data.title}</h2> -->
					<p class="mt-2 text-black">{data.description}</p>

					<span class="mb-2 mt-4 inline-block h-1 w-14 rounded bg-indigo-500"></span>

					<h2 class="text-lg font-medium text-gray-900">Rating: {data.rating} ⭐</h2>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- callToAction section -->
<ul class="flex flex-wrap justify-center gap-4">
	{#each callToAction.ctas as cta}
		<li>
			<a href={cta.link} class="btn btn-active btn-secondary">
				{cta.title}
			</a>
		</li>
	{/each}
</ul>
