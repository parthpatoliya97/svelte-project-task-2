<script>
    export let data
    console.log(data)
    const {hero,blogArticles,knowMore,newsletter,}=data
</script>

<!-- hero section -->
<h1>{hero.title}</h1>
<h1>{hero.description}</h1>
<img src={hero.image} alt="hero-pic" loading="lazy"/>
<img src={hero.backgroundImage} alt="backgroundImage pic" loading="lazy"/>
{#each hero.ctas as cta }
   <a href={cta.link}>{cta.title}</a>
{/each}
<br><br>

<!-- blogarticles section -->
 <h1>{blogArticles.title}</h1>
 <h1>{blogArticles.description}</h1>
 {#each blogArticles.data as data }
  <img src={data.thumbnail} alt="thumbnail pic" loading="lazy"/>
  <h1>{data.title}</h1>
  <h1>{data.description}</h1>
  <h1>{data.postedOn}</h1>
  <h1>{data.author}</h1>
  <a href={data.readMoreLink}>Read More</a>
    
 {/each}
 <br><br>


 <!-- knowmore section -->
  <h1>{knowMore.title}</h1>
  <h1>{knowMore.description}</h1>
  {#each knowMore.links as link }
    <h1>{link.description}</h1>
    <a href={link.link}>{link.title}</a>
    
  {/each}
  <br><br>


  <!-- newsletter section -->
   <h1>{newsletter.title}</h1>
   <h1>{newsletter.description}</h1>
   <button>{newsletter.ctaButton}</button>