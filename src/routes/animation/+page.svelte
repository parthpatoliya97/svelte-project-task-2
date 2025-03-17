<script>
    import Meteors from "$lib/component/Meteors.svelte";
    import Marquee from "$lib/component/Marquee.svelte";
    import Reviewcard from "$lib/component/Reviewcard.svelte";
    import NumberTicker from "$lib/component/NumberTicker.svelte";
    import Features from "$lib/component/Features.svelte";
    import { Eye, PackageSearch, Settings } from "lucide-svelte";

   
  

    // marque data
    const reviews = [
      {
        name: "Bhide",
        username: "@Bhide",
        body: "Noicee work. I love it. Keep it up.",
        img: "https://avatar.vercel.sh/jack",
      },
      {
        name: "Jodd",
        username: "@Jodd",
        body: "Wooww, this is what I was looking for. Great work.",
        img: "https://avatar.vercel.sh/jill",
      },
      {
        name: "Pokie",
        username: "@Pokie",
        body: "Svelte is Amazing and so are you. Keep it up.",
        img: "https://avatar.vercel.sh/john",
      },
      {
        name: "pablo",
        username: "@pablo",
        body: "Remarkable Stuff broooo. Added to my favourites.",
        img: "https://avatar.vercel.sh/jane",
      },
      {
        name: "Saloni",
        username: "@Saloni",
        body: "Acche hai, Chal mera Portfolio banade.",
        img: "https://avatar.vercel.sh/jenny",
      },
      {
        name: "Bhai",
        username: "@Bhai",
        body: "Svelte made easy with these components. Great work.",
        img: "https://avatar.vercel.sh/james",
      },
    ];
  
    let firstRow = reviews.slice(0, reviews.length / 2);
    let secondRow = reviews.slice(reviews.length / 2);

    // feature data
    let data = [
    {
      id: 1,
      title: "1. Choose a Component",
      content:
        "Select the component that best suits your needs from Eldora UI's versatile collection, designed to simplify and enhance your development process.",
      image:
        "https://i.pinimg.com/736x/ca/aa/49/caaa49d386d84f2d037d0abcc919778f.jpg",
      icon: PackageSearch,
    },
    {
      id: 2,
      title: "2. Add Utility Helpers",
      content:
        "Enhance functionality by incorporating utility helpers that align with the selected component, ensuring seamless integration and customization.",
      image:
        "https://i.pinimg.com/736x/a5/dc/0a/a5dc0af50d185b7f9111949b17e17e1a.jpg",
      icon: Settings,
    },
    {
      id: 3,
      title: "3. Copy and Paste the Code",
      content:
        "Simply copy and paste the provided code into your project, making the process quick and hassle-free. You're now ready to see the magic in action!",
      image:
        "https://i.pinimg.com/736x/b1/b9/c2/b1b9c230143fb0d8540eabe5b74adf27.jpg",
      icon: Eye,
    },
  ];

  </script>
  

  <!-- meteors component -->
  <div
    class="relative flex h-fit w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
  >
    <Meteors number={30} />
    <p
      class="z-10 whitespace-pre-wrap text-center text-5xl tracking-tight font-semibold bg-gradient-to-br from-white to-blue-900/40 text-transparent bg-clip-text"
    >
      Meteors
    </p>
  </div>

  <br><br><br>

  <!-- marquee component -->
  <div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl"
  >
    <Marquee pauseOnHover class="[--duration:20s]">
      {#each firstRow as item}
        <Reviewcard {...item} />
      {/each}
    </Marquee>
    <Marquee reverse pauseOnHover class="[--duration:20s]">
      {#each secondRow as item}
        <Reviewcard {...item} />
      {/each}
    </Marquee>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"
    ></div>
  </div>
  <br><br><br>


  <!-- numberticker component -->
  <!-- <div class="flex justify-center items-center h-fit">
    <p
      class="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
    >
      <NumberTicker value={100} />
    </p>
  </div>
-->


<!-- feature section -->
<Features {data}/>
<br><br><br>


<!-- bento grid data -->




  