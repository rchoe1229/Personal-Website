import CardItem from './CardItem'
import './Cards.css'
import Blog from '../images/blogs.jpg'

function Cards() {
  return (
    <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
            src={Blog}
            text='Algorithms Series Pt. 1'
            label='First Blog'
            href="https://chowderchoe.medium.com/algorithms-series-pt-1-648d3597c296"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards