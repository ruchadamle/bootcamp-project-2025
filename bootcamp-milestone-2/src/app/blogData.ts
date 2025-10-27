export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "My Recent Restaurant Adventures",
    date: "2025-10-12",
    description:
      "Since I have moved to San Luis Obispo, I've been exploring the local dining scene. Here are some the places I tried recently!",
    image: "/goshi_slo.jpg",
    imageAlt: "Table with various kinds of sushi",
    slug: "restaurant-ratings-reviews",
  },
  {
    title: "Stress Busters I’ve Tried Lately",
    date: "2025-10-13",
    description:
      "School can be stressful, which is why I have spent the last few months trying out different hobbies for stress relief. This is what I think of them!",
    image: "/kittens.jpg",
    imageAlt: "Three kittens sleeping in a pile together",
    slug: "stress-busters-review",
  },
];

export default blogs;
