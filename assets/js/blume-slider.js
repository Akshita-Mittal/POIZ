let data = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0003/4580/0755/files/82296250_2574777799513813_7954295093746275490_n_600x.jpg?v=1581370173",
      description:
        "Everything changed once I discovered Hug Me! Honestly, wholeheartedly, I can say it works! I have worn Hug Me while I’m just watching Netflix, and while doing intense workout classes, and I didn’t smell for any of it! It also holds up SO WELL! I’m so excited, I’ll never go back to what I was using ever again!",
      author: "Claire (@clairee.nicole)",
    //   signature:
    //     "//cdn.shopify.com/s/files/1/0003/4580/0755/files/squiggle_2_600x_a306eb23-facf-4d14-8f92-2252432f4233_600x.png?v=1562241156",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0003/4580/0755/files/94896027_2374284032869209_2183482614930311887_n_600x.jpg?v=1589325590",
      description: "The skin care products were awesome!!",
      author: "Chiara (@chilucchetta)",
    //   signature:
    //     "//cdn.shopify.com/s/files/1/0003/4580/0755/files/squiggle_1_600x_f4445f53-d6cb-4fdf-9478-1f3e6a8ef788_600x.png?v=1562240908",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0003/4580/0755/files/93029882_664858637670978_5743038920365665301_n_600x.jpg?v=1589325683",
      description:
        "Excited to have incorporated these two babies in my routine thanks to the @blume team!! Ingredients in their products are all natural and proudly made in North America. I love that they focus on de-stigmatizing periods and empowering women to love their bodies with things that don’t harm you!  I’ve had some trouble areas on my cheek which this has helped managed significantly! 10/10 rec",
      author: "Dorothy (@dskyeung)",
    //   signature:
    //     "//cdn.shopify.com/s/files/1/0003/4580/0755/files/squiggle_1_600x.png?v=1558048869",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0003/4580/0755/files/88228386_201953984230565_8582798885680177491_n_600x.jpg?v=1589325850",
      description:
        "I’m obsessed with this #cleanbeauty trio to nourish my self care needs!  Waking up to healthy and hydrated skin every day is still the best feeling. Meltdown’s anti-bacterial and anti-inflammatory properties target size and redness overnight with a simple spot treatment, while Daydreamer’s creamy texture helps add extra plump and hydration.",
      author: "Amber (@amber__roman)",
    //   signature:
    //     "//cdn.shopify.com/s/files/1/0003/4580/0755/files/squiggle_2_600x_a306eb23-facf-4d14-8f92-2252432f4233_600x.png?v=1562241156",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0003/4580/0755/files/83264698_169330861091058_5083648156897615669_n_600x.jpg?v=1581370436",
      description:
        "I have a combination of sensitive skin and extremely stubborn blemishes, and finding a product that clears my face without drying it out has always been very difficult.  Meltdown has helped my skin stay clear and hydrated, and I love that the products are all natural and good for the environment!",
      author: "Dani (@danichangg)",
    //   signature:
    //     "//cdn.shopify.com/s/files/1/0003/4580/0755/files/squiggle_2_600x.png?v=1558048918",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0003/4580/0755/files/79378285_2503851126549692_6850136613680632848_n_600x.jpg?v=1582054470",
      description:
        "I have very sensitive skin so always prefer to find and use products with natural ingredients that I can trust and aren’t too harsh. I had been trying to find a good natural spot treatment and then I discovered Meltdown! I’ve been loving it and even got my boyfriend hooked.",
      author: "Author (@author.me)",
    //   signature:
    //     "//cdn.shopify.com/s/files/1/0003/4580/0755/files/squiggle_1_600x_f4445f53-d6cb-4fdf-9478-1f3e6a8ef788_600x.png?v=1562240908",
    },
  ];
  
  let index = 0;
  
  let main_image = document.getElementById("main-image");
  let secondary_image = document.getElementById("secondary-image");
  let description = document.getElementById("blume-para");
  let author = document.getElementById("blume-author");
  let signature = document.getElementById("blume-signature");
  main_image.style.backgroundImage = `url(${data[0].image})`;
  secondary_image.style.backgroundImage = `url(${data[1].image})`;
  description.innerText = data[0].description;
  author.innerText = data[0].author;
  signature.src = data[0].signature;
  
  function show_image(direction) {
    if (direction == "left") {
      index--;
    } else {
      index++;
      index %= data.length;
    }
  
    if (index < 0) {
      index = data.length - 1;
    }
  
    main_image.style.backgroundImage = `url(${data[index].image})`;
    if (index === data.length - 1) {
      secondary_image.style.backgroundImage = `url(${data[1].image})`;
    } else {
      secondary_image.style.backgroundImage = `url(${data[index + 1].image})`;
    }
    description.innerText = data[index].description;
    author.innerText = data[index].author;
    signature.src = data[index].signature;
  }
  