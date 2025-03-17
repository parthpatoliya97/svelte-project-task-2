<script>
    export let data
    const {hero,industryOverview,industrySpecificSolutions,featuresAndServices,eventCategories,testimonials,caseStudies, cta}=data
</script>

<!-- hero section -->
 <h1>{hero.title}</h1>
 <h1>{hero.description}</h1>
 <img src={hero.image} alt="hero pic" loading="lazy"/>
 {#each hero.ctas as cta }
 
 <a href={cta.link}>{cta.title}</a>
    
 {/each}


 <!-- industryoverview section -->
 <h1>{industryOverview.title}</h1>
 <h1>{industryOverview.description}</h1>
 {#each industryOverview.images as image }
 <h1>{image.title}</h1>
 <img src={image.icon} alt="industryOverview pic" loading="lazy"/>
    
 {/each}


 <!-- industryspecific solution -->
 <h1>{industrySpecificSolutions.title}</h1>
 {#each industrySpecificSolutions.data as data}
 <h1>{data.title}</h1>
 <h1>{data.description}</h1>
 <img src={data.image} alt="industrySpecificSolutions pic" loading="lazy"/>
    
 {/each}

 <!-- features and services section -->
 <h1>{featuresAndServices.title}</h1>
 <img src={featuresAndServices.image} alt="featuresAndServices pic" loading="lazy"/>
 {#each featuresAndServices.data as data }
 <h1>{data.title}</h1>
 <h1>{data.description}</h1>
 <img src={data.image} alt="featuresAndServices pic" loading="lazy"/>
    
 {/each}


 <!-- eventcategories section -->
 <h1>{eventCategories.title}</h1>
 {#each eventCategories.data as data }
 <h1>{data.title}</h1>
 <h1>{data.description}</h1>
 <img src={data.image} alt="eventCategories pic" loading="lazy"/>
    
 {/each}


 <!-- testimonials section -->
 <h1>{testimonials.title}</h1>
 {#each testimonials.data as data }
 <h1>{data.title}</h1>
 <h1>{data.description}</h1>
 <img src={data.avatar} alt="testimonials pic" loading="lazy"/>
 <h1>{data.rating}</h1>
    
 {/each}


 <!-- casestudies section -->
  <h1>{caseStudies.title}</h1>
  <h1>{caseStudies.description}</h1>
  {#each caseStudies.data as data }
  <h1>{data.client}</h1>
  <h1>{data.description}</h1>
  <img src={data.image} alt="casestudies pic" loading="lazy"/>
    
  {/each}


  <!-- cta section -->
   <h1>{cta.title}</h1>
   <img src={cta.image} alt="cta pic" loading="lazy"/>
   {#each cta.ctas as cta }
   <a href={cta.link}>{cta.title}</a>
    
   {/each}