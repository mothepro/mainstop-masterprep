import testimonials from '../data/testimonials.json'
import Carousel from 'react-material-ui-carousel'
import Testimonial from './Testimonial'

export default () => (
  <Carousel interval={7654}>
    {testimonials.map(testimonial =>
      <div style={{ textAlign: 'center', margin: '0 auto', position: 'relative', display: 'inline-block' }}>
        <Testimonial
          key={JSON.stringify(testimonial)}
          {...testimonial}
        />
      </div>)}
  </Carousel>
)
