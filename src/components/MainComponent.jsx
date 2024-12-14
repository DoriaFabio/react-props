import Card from "./Card.jsx";
import posts from "../data/posts.js";
function MainComponent() {
  const blog = [...posts];

  return (
    <main className="container mb-5 mt-2">
      <div className="row gy-4">
        {blog.length > 0
          ? blog.map((post) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                <Card
                  image={post.image}
                  title={post.title}
                  description={post.content}
                  tags={post.tags.join(", ")}
                />
              </div>
            ))
          : "Non ci sono post"}
      </div>
    </main>
  );
}
export default MainComponent;