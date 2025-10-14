// Make the type for a blog post
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// Make a list of blogs
const blogs: Blog[] = [
  {
    title: "My Recent Restaurant Adventures",
    date: "2025-10-12",
    description:
      "Since I have moved to San Luis Obispo, I've been exploring the local dining scene. Here are some the places I tried recently!",
    image: "images/goshi_slo.jpg",
    imageAlt: "Table with various kinds of sushi",
    slug: "restaurant-ratings-reviews",
  },
  {
    title: "Stress Busters I’ve Tried Lately",
    date: "2025-10-13",
    description:
      "School can be stressful, which is why I have spent the last few months trying out different hobbies for stress relief. This is what I think of them!",
    image: "images/kittens.jpg",
    imageAlt: "Three kittens sleeping in a pile together",
    slug: "stress-busters-review",
  },
];

// Function to iterate over the list of blogs and display them
function displayBlogs(blogList: Blog[]) {
  // Get the container where blogs will be displayed
  const blogContainer = document.getElementById("blog-container");
  // If the container doesn't exist, exit the function
  if (!blogContainer) return;

  // Loop through each blog
  blogList.forEach((blog) => {
    // Make a new div
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");

    // Make the link
    const link = document.createElement("a");
    // Use slug to make the URL
    link.href = `blogs/${blog.slug}.html`;
    link.style.textDecoration = "none";
    link.style.color = "inherit";
    // Allow user to click the whole blog post card
    link.style.display = "block";

    // Create elements
    // Make title
    const title = document.createElement("h1");
    title.textContent = blog.title;

    // Make date
    const date = document.createElement("p");
    const options = { year: "numeric", month: "long", day: "numeric" } as const;
    date.textContent = new Date(blog.date).toLocaleDateString("en-US", options);
    date.classList.add("blog-date");

    // Make image
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    // Make description
    const description = document.createElement("p");
    description.textContent = blog.description;

    // Append children to put the pieces together
    // Append everything to the link first
    link.appendChild(title);
    link.appendChild(date);
    link.appendChild(image);
    link.appendChild(description);

    // Then append the link to the blog post div
    blogDiv.appendChild(link);

    // Add the blog post to the page
    blogContainer.appendChild(blogDiv);
  });
}

// Run it once the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayBlogs(blogs);
});
