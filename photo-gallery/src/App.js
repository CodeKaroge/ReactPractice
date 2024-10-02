import './App.css';
import CategoryScreen from './components/CategoryScreen';
import ImageScreen from './components/ImageScreen';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const photoGallery = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Nature',
    title: 'Sunset in the Mountains',
    description: 'A beautiful sunset over the mountains.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Nature',
    title: 'Forest Trail',
    description: 'A peaceful trail through the forest.',
  },
  {
    id: 3,
    url: 'https://plus.unsplash.com/premium_photo-1713428767656-ddcbf12ec56d?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Architecture',
    title: 'Modern Building',
    description: 'A stunning piece of modern architecture.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1503577005093-b2cfc4b74604?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Architecture',
    title: 'Old Bridge',
    description: 'An ancient bridge standing the test of time.',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1603570416072-84068a0f1358?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Food',
    title: 'Delicious Pasta',
    description: 'A plate of freshly made pasta.',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1548808918-a33260f83b25?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Food',
    title: 'Fruit Platter',
    description: 'A colorful platter of assorted fruits.',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Wildlife',
    title: 'Lion in the Wild',
    description: 'A majestic lion roaming in the savannah.',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1615705252098-b5dc19c80433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Wildlife',
    title: 'Elephants at Sunset',
    description: 'A herd of elephants with a sunset backdrop.',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1492136344046-866c85e0bf04?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Travel',
    title: 'Eiffel Tower',
    description: 'The iconic Eiffel Tower in Paris.',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1705861144478-40b4c1157a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Travel',
    title: 'India Gate',
    description: 'A breathtaking view of the India Gate.',
  }
];

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage data={photoGallery} />} />
        <Route path='/categoryScreen/:category' element={<CategoryScreen data={photoGallery} />} />
        <Route path='/imageScreen' element={<ImageScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
