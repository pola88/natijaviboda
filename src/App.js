import Menu from './Menu/Menu';
import './App.css';
import Slider from './Slider';
import CountdownTimer from './Countdown/CountdownTimer';
import Divider from './Divider/Divider';
import OurHistory from './OurHistory';
import Details from './Details';
import HowToGo from './HowToGo';
import Song from './Song';
import Message from './Message';
import Footer from './Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { NavProvider } from './context/NavContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavProvider>
          <Menu />
          <Slider />
          <CountdownTimer/>
          <OurHistory />
          <Details />
          <Divider />
          <HowToGo />
          <Song />
          <Message />
          <Footer />
        </NavProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
