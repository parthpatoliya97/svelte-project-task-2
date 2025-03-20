<script>
    export let data;
    console.log(data)
    const {
      hero,
      logos,
      services,
      products,
      tech,
      stats,
      worldDominance,
      showcase,
      whyChooseUs,
      testimonials,
      coreValues,
      compliance,
      faq,
      catchyLine,
      ctas,
    } = data.data;
  
  </script>
  
  <!-- HERO SECTION -->
 
  <!-- END OF HERO SECTION -->

  <div class=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
    <div class="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
      <div class="space-y-8">
        <h2 class="text-2xl md:text-4xl font-bold">
          {hero.title}
        </h2>
        <p class="text-sm md:text-xl">
          {hero.description}
        </p>
      </div>
      <div class="space-x-4">
        {#each hero.ctas as cta}
            <button class="btn my-6 btn-secondary"><a href={cta.link} >{cta.title}</a></button>
      {/each}
      </div>
       
    </div>
    <div class=" order-1 w-full mt-20 md:w-1/2">
      <img
        src={hero.image}
        class="md:w-[550px] md:h-[460px] md:ml-12"
        alt=""
      />
    </div>
  </div>

  
  <!-- LOGO SECTION -->
  <div class="text-center p-10 bg-gray-50">
    <!-- Section Title -->
    <h1 class="text-4xl font-bold text-black mb-2">{logos.title}</h1>
  
    <!-- Section Description -->
    <p class="text-2xl text-black mb-6">{logos.description}</p>
  
    <!-- Logos Grid -->
    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
      {#each logos.images as image}
        <li class="flex justify-center">
          <img class="w-80 h-80 sm:w-28 sm:h-28 object-contain" src={image} alt="Logo pic" loading="lazy" />
        </li>
      {/each}
    </ul>
  </div>
  <!-- END OF LOGO SECTION -->

  
  <!-- SERVICE SECTION -->
  <div class="p-10 bg-gray-50 ">
    <!-- Section Title -->
    <h1 class="text-4xl font-bold text-gray-900 text-center mb-2">{services.title}</h1>
  
    <!-- Section Description -->
    <p class="text-2xl text-gray-600 text-center mb-8">{services.description}</p>
  
    <hr class="border-gray-300 my-6" />
  
    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each services.data as data}
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <!-- Service Image -->
          <img 
            class="w-full h-48 object-cover rounded-md mb-4" 
            src={data.image} 
            alt="services pic" 
            loading="lazy" 
          />
          
          <!-- Service Title -->
          <h3 class="text-xl font-semibold text-black mb-2">{data.title}</h3>
          
          <!-- Service Description -->
          <p class="text-black">{data.description}</p>
        </div>
      {/each}
    </div>
  </div>
  <!-- END OF SERVICE SECTION -->

  
  <!-- PRODUCTS SECTION -->
  <div class="p-10 bg-gray-50">
    <!-- Section Title -->
    <h1 class="text-4xl font-bold text-gray-900 text-center mb-2">{products.title}</h1>
  
    <!-- Section Description -->
    <p class="text-2xl text-black text-center mb-8">{products.description}</p>
  
    <hr class="border-gray-300 my-6" />
  
    <!-- Products Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
      {#each products.data as data}
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <!-- Product Image -->
          <img 
            class="w-full h-48 object-cover rounded-md mb-4" 
            src={data.image} 
            alt="Product pic" 
            loading="lazy" 
          />
  
          <!-- Product Title -->
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            <a href={`/product/${data.ctaLink2}`} class="hover:text-blue-600 transition">{data.title}</a>
          </h3>
  
          <!-- Product Description -->
          <p class="text-black mb-4">{data.description}</p>
  
          <!-- CTA Button -->
          <a 
            href={data.ctaLink1} 
            class="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {data.ctaText}
          </a>
        </div>
      {/each}
    </div>
  </div>

   <!-- END OF PRODUCT SECTION -->


  
  <!--THIS IS TECH SECTION -->
  <div class="p-10 bg-gray-100">
    <!-- Section Title -->
    <h1 class="text-4xl font-bold text-gray-900 text-center mb-6">{tech.title}</h1>
  
    <hr class="border-gray-300 mb-8" />
  
    <!-- Tech Logos Grid -->
    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
      {#each tech.images as image}
        <li class="flex justify-center">
          <img 
            class="w-500 h-500 object-contain" 
            src={image} 
            alt="Tech Logo" 
            loading="lazy"
          />
        </li>
      {/each}
    </ul>
  </div>
  <!-- END OF TECH SECTION -->

  
  
<!-- Stats Section -->
<div class="container mx-auto px-6 py-12 text-center">
  <!-- Main Title & Description -->
  <h1 class="text-4xl font-bold text-white">{stats.title}</h1>
  <p class="mt-2 text-white text-lg">{stats.description}</p>

  <!-- Stats Grid -->
  <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      {#each stats.data as item}
          <div class="flex flex-col items-center rounded-lg bg-white shadow-lg p-6 hover:shadow-xl transition">
              <!-- Stat Image -->
              <img class="w-20 h-20 rounded-full object-cover" src={item.image} alt="stat icon" loading="lazy"/>

              <!-- Stat Number -->
              <h2 class="mt-4 text-3xl font-extrabold text-blue-600">{item.descriptipon}</h2>

              <!-- Stat Title -->
              <p class="mt-2 text-gray-700 text-lg">{item.title}</p>
          </div>
      {/each}
  </div>
</div>

  <!-- END OF STATS SECTION -->
  

  <!-- THIS IS WORLDDOMINANCE SECTION -->
  <div class="p-10 bg-gray-50 text-center">
    <!-- Section Title -->
    <h1 class="text-4xl font-bold text-gray-900 mb-4">{worldDominance.title}</h1>
  
    <!-- Section Description -->
    <p class="text-lg text-gray-600 mb-6">{worldDominance.description}</p>
  
    <!-- World Dominance Image -->
    <img 
      class="w-full max-w-3xl mx-auto rounded-lg shadow-md object-cover"
      src={worldDominance.image} 
      alt="World Dominance Pic" 
      loading="lazy" 
    />
  </div>
  <!-- END OF WORLDDOMINANCE SECTION -->

  
  <!-- THIS IS SHOWCASE SECTION -->
  <div class="p-10 bg-gray-100 text-center">
    <!-- Showcase Images Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {#each showcase.images as image}
        <div class="flex justify-center">
          <img 
            class="w-60 h-40  object-cover rounded-lg shadow-md" 
            src={image} 
            alt="Showcase pic" 
            loading="lazy"
          />
        </div>
      {/each}
    </div>
  
    <!-- Showcase Content -->
    <h1 class="text-2xl sm:text-3xl font-semibold text-gray-800 mt-8">{showcase.content}</h1>
  </div>
  <!-- END OF SHOWCAASE SECTION -->

  
  
  <div class="p-10 bg-white text-center">
   
    <!-- Section Description -->
    <p class="text-4xl text-black mb-8">{whyChooseUs.description}</p>
  
    <hr class="border-gray-300 my-6" />
  
    <!-- images Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      {#each whyChooseUs.demoImages as picture}
        <div class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img 
              class="w-150 h-100 mx-auto" 
              src={picture} 
              alt="Feature Icon" 
              loading="lazy" 
            />
        </div>
      {/each}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      {#each whyChooseUs.features as feature}
        <div class="text-black text-2xl p-6 rounded-lg shadow-md hover:shadow-lg transition">
           <h1>{feature}</h1>
        </div>
      {/each}
    </div>
  </div>
  <!-- THIS END OF WHYTOCHOOSEUS SECTION -->
  
  
  <!-- this is corevalues page -->
<!-- Hero Section -->
<div class="bg-gray-100 py-16">
  <div class="container mx-auto flex flex-col items-center px-6 text-center lg:flex-row lg:text-left lg:justify-between">
      <!-- Hero Image -->
      <img class="w-full max-w-md rounded-lg shadow-lg lg:max-w-lg" src={coreValues.image} alt="Core Values" loading="lazy"/>

      <!-- Hero Content -->
      <div class="mt-8 lg:mt-0 lg:w-1/2">
          <h1 class="text-5xl font-bold text-gray-900">{coreValues.title}</h1>
          <p class="mt-4 text-lg text-gray-600">{coreValues.description}</p>
      </div>
  </div>
</div>

<!-- Core Values Grid -->
<div class="container mx-auto grid grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
  {#each coreValues.data.values as value}
      <div class="rounded-lg bg-white shadow-lg transition hover:shadow-xl p-6 text-center">
          <!-- Image -->
          <img class="h-32 w-32 mx-auto  object-cover shadow-md" src={value.image} alt="Core Value" loading="lazy"/>

          <!-- Card Content -->
          <h2 class="mt-6 text-xl font-semibold text-gray-900">{value.title}</h2>
          <p class="mt-3 text-gray-600">{value.description}</p>
      </div>
  {/each}
</div>
  <!-- end of corevalues page -->
  

  <!-- this is compliance page -->
  <h1 class="text-4xl text-black bg-gray-100 text-center" >{compliance.gdpr}</h1><br>
  <!-- end of compliance page -->
  

  <!-- THIS IS TESTIMONIALS SECTION -->
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
  <!-- END OF TESTIMONIALS SECTION -->


  <!-- this is faq page -->
  <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <!-- FAQ Icon -->
    <img class="w-100 h-100 mx-auto mb-4" src={faq.icon} alt="FAQ Icon" loading="lazy" />

    <!-- FAQ Title -->
    <h1 class="text-xl font-semibold text-gray-800 text-center">{faq.title}</h1>

    <!-- FAQ Description -->
    <p class="text-gray-600 mt-2 text-center">{faq.description}</p>

    <!-- Sample Question -->
    <h2 class="mt-4 text-lg font-medium text-blue-600 text-center">{faq.qa.samplequestion}</h2>
</div>
<!-- end of faq page -->


  <!-- this is catchyline section -->
    <div class="flex justify-center items-center h-80">
      <div class="text-center max-w-md">
          <p class="py-6 text-2xl">{catchyLine.text}</p>
      </div>
  </div>
  <!-- end of catchyline section -->
  

  <!-- this is ctas page -->
  <ul class="flex justify-center gap-4 flex-wrap">
    {#each ctas as cta}
        <li>
            <a href={cta.link} class="btn btn-active btn-secondary">
                {cta.title}
            </a>
        </li>
    {/each}
</ul>
  <!-- end of ctas page -->
  
