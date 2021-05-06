import BlogVlogCardItem from "./BlogsVlogsCardItem";
import "./Cards.css";
import Blog from "../images/blogs.jpg";

function BlogsVlogsCards() {

  const blogs = [
    {
      id: 1,
      text: "Algorithms Series Pt. 1",
      label: "First Blog",
      url: "https://chowderchoe.medium.com/algorithms-series-pt-1-648d3597c296",
    },
    {
      id: 2,
      text: "Algorithms Series Pt. 2",
      label: "Second Blog",
      url: "https://chowderchoe.medium.com/algorithm-series-pt-2-a35d43e0c7ae",
    },
  ];

  const displayBlogs = () => {
    return blogs.map((blog) => (
      <BlogVlogCardItem
        key={blog.id}
        src={Blog}
        text={blog.text}
        label={blog.label}
        url={blog.url}
      />
    ));
  };

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
    { displayBlogs }
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsVlogsCards;
