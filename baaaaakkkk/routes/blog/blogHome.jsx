import "./blogHome.scss";
import { NavBar } from "../../components/navBar/NavBar";
import { BlogItem } from "../../components/blogItem/blogItem";

const Blog = () => {
  return (
    <div>
      <NavBar />
      <h1>Blog Page</h1>

      <div className="blogs">
        <BlogItem
          date={"11-12-2029"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"02-12-3012"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"30-19-4921"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"95-14-9613"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"11-12-2029"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"02-12-3012"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"30-19-4921"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"95-14-9613"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"11-12-2029"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"02-12-3012"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"30-19-4921"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"95-14-9613"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"11-12-2029"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"02-12-3012"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"30-19-4921"}
          title={"Quantum, Zen, and other things"}
        />
        <BlogItem
          date={"95-14-9613"}
          title={"Quantum, Zen, and other things"}
        />
      </div>
    </div>
  );
};

export default Blog;
