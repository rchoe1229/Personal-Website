import BlogVlogCardItem from './BlogsVlogsCardItem'
import './Cards.css'
import Blog from '../images/blogs.jpg'

function BlogsVlogsCards() {
  return (
    <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          <a href="https://chowderchoe.medium.com/algorithms-series-pt-1-648d3597c296">
          <div className="cards__items">
            <BlogVlogCardItem
            src={Blog}
            text='Algorithms Series Pt. 1'
            label='First Blog'
            />
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogsVlogsCards