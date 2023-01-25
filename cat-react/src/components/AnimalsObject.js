//function AnimalList() {

  const animals = [
    {
      name: 'Gary',
      image: 'puppy1.jpg',
      age: '2 years',
      toy: 'Chew bone',
      title: 'Most photogenic dog of 2023',
      description: `Gary, our 2 years old cutie has won the "Most Photogenic Dog" award of 2023. Such a victory has only been possible due to all the love and professional care of our workers. Find out more about how diet and routine can affect your dog's looks...`
    },
    {
      name: 'Lizzie',
      image: 'puppy2.jpg',
      age: '1 and a half years',
      toy: 'Small ball with bell',
    },
    {
      name: 'Bucket',
      image: 'puppy3.jpg',
      age: '4 years',
      toy: 'Squeeky rubber chicken',
      title: 'Certificated well-trained dog',
      description: `
      Bucket is the prime example of what caring hands can achieve.
      Rescued as a wild, aggressive puppy, Bucket since then has been rehabitated and is one of the most well-behaved dogs. Families with children and the elderly would love a dog like Bucket at their home...`
    },
    {
      name: 'Morgan',
      image: 'puppy4.jpg',
      age: '3 years',
      toy: 'Plushies',
    },
    {
      name: 'Starling',
      image: 'puppy5.jpg',
      age: '2 and a half years',
      toy: 'Feathered fetch stick',
    },
    {
      name: 'Georgie',
      image: 'puppy6.jpg',
      age: '1 and a half years',
      toy: 'Rubber ball',
    },
    {
      name: 'Peanut',
      image: 'puppy7.jpg',
      age: '2 years',
      toy: 'Chew bone',
    },
    {
      name: 'John and Jane',
      image: 'puppy8.jpg',
      age: '1 year',
      toy: 'Plushies',
      title: 'Twins found under floorboards of abandoned house',
      description: `Our shelter expanded by two new cuties: John and Jane! The adorable puppies were discovered under the floorboards of an abandoned house in Chicago. Police are still investigating the scene, but what matters most is that they now are in caring hands. Find out when exactly they will be up for adoption...`
    },
    {
      name: 'Lady Doran the Second',
      image: 'kitty1.jpg',
      age: '5 years',
      toy: 'Mugs',
    },
    {
      name: 'Mr Void',
      image: 'kitty2.jpg',
      age: '2 and a half years',
      toy: 'Feathered playing stick',
      title: 'Stop buying black cats for Halloween',
      description: `Every year, hundreds and thousands of black cats are being sold on the market near the approach of Halloween. Unfortunately, those black cats often end up in uncaring hands and end up on the streets after the holiday spirit wears off. People throw them out, thinking that the cats will just survive, but there are many factors one has to think about. Most cats raised by humans can't survive on their own in the wild or the streets, and not being sterilized raises even more danger. Mr Void is a Halloween cat as well, now safely in our hands...`
    },
    {
      name: 'Marshmallow',
      image: 'kitty3.jpg',
      age: '1 year',
      toy: 'Feathered mouse toy',
      title: 'Are white cats deaf?',
      description: `White cats are indeed more likely to be deaf. Our precious Marshmallow is hard of hearing, but that doesn't make her any less! Just like most cats, little Marshmallow is very loving as we made sure she gets the best treatment possible at our shelter. The only con of a deaf cat is how loud they can meow - but surely you can't say no to such a prety face...`
    },
    {
      name: 'Tabby',
      image: 'kitty4.jpg',
      age: '1 and a half years',
      toy: 'Moving plastic mouse',
    },
    {
      name: 'Monsieur',
      image: 'kitty5.jpg',
      age: '4 years',
      toy: 'Plushies',
    },
    {
      name: 'Babe',
      image: 'hamster1.jpg',
      age: '9 months',
      toy: 'Small ball',
    },
    {
      name: 'Clementine',
      image: 'hamster2.jpg',
      age: '15 months',
      toy: 'Squirrel wheel',
      title: 'Rescue pet discovered by farmhand',
      description: `Clementine, the strawberry loving hamster teen has been discovered on a small family farm in Germany. At the moment of being discovered, the farmhand knew that Clementine loves strawberries, as she caused quite the strawberry casualties. Being a caring man, however, he brought Clementine into our shelter where she can live a safe life and eat as many strawberries as she can. From November 2022, Clementine is up for adoption...`
    },
    {
      name: 'Little Blob',
      image: 'hamster3.jpg',
      age: '13 months',
      toy: 'Ball feeder',
    },
    {
      name: 'Stardust',
      image: 'hamster4.jpg',
      age: '18 months',
      toy: 'Shavings',
    },
    {
      name: 'Holly',
      image: 'hamster5.jpg',
      age: '13 months',
      toy: 'Small ball with bell',
    },
    {
      name: 'Button',
      image: 'hamster6.jpg',
      age: '15 months',
      toy: 'Children\'s souls',
      title: 'Pet rescued from unethical breeder',
      description: `Breeding animals is quite a sensitive subject. Button is part of the family that has been rescued from an unethical breeding group. Breeding, if done unethically, can cause the death of many animals within a family and increase the chances of inbreeding. Find out more about ethical breeding and Button, who is now up for adoption...`
    },
    {
      name: 'Molly',
      image: 'bunny1.jpg',
      age: '1 and a half years',
      toy: 'Ball feeder',
    },
    {
      name: 'Carroline',
      image: 'bunny2.jpg',
      age: '2 years',
      toy: 'Carrot plush',
    },
    {
      name: 'Toast',
      image: 'bunny3.jpg',
      age: '4 years',
      toy: 'Feathered ball',
    },
    {
      name: 'Daisy and Goldie',
      image: 'bunny4.jpg',
      age: '3 years',
      toy: 'Ball feeder',
      title: 'Easter bunnies as pets',
      description: 'There are a lot of myths surrounding pet Easter bunnies. Are they a suitable pet? In this article, we cover every aspect of pet bunnies. Fill a test at the bottom of the page to find out if pet bunnies are for you!...'
    },
    {
      name: 'Angel',
      image: 'bunny5.jpg',
      age: '2 and a half years',
      toy: 'Carrot chew toy',
    },
    {
      name: 'Hazel',
      image: 'bunny6.jpg',
      age: '2 years',
      toy: 'Squeeky plushies',
    },
  ];


export default animals;

/*   return Animals;
};

export default AnimalList; */