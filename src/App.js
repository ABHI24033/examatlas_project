import './App.css';
import Home from "../src/components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import LiveCourse from './components/LiveCourse';
import CurrentAffairs from './components/CurrentAffairs';
import TestSeries from './components/TestSeries';
import Header from './components/Header';
import Footer from './components/Footer';
import {Toaster} from 'react-hot-toast';
import UPSCLiveClass from './components/LiveClasses/UPSCLiveClasses';
import ViewerScreenContainer from './liveStreaming/ViewerScreenContainer';

function App() {
  return (
    <>

      <Router>
        <Toaster/>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/testseries' element={<TestSeries />} />
          <Route path='/livecourse' element={<LiveCourse />} />
          <Route path='/livecourse/upsc-live-class' element={<UPSCLiveClass />} />
          <Route path='/livecourse/upsc-live-class/:meetingId' element={<ViewerScreenContainer />} />
          <Route path='/currentaffairs' element={<CurrentAffairs />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
