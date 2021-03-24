import Slider from './components/slider/ImageSlider'
import {sliderData} from './components/slider/SliderData'

const App = () => {
  return <div className="App">
    <Slider slides={sliderData} />
  </div>;
};

export default App;