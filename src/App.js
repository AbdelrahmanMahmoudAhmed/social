import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter , Route , Switch} from 'react-router-dom'
import Categories from './Pages/Categories/Categories';
import PostPage from './Pages/PostPage/PostPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact   component={Home} />
          <Route path='/categories/:category'  component={Categories} />
          <Route path='/author/:author'  component={Categories} />
          <Route path='/postDate/:Date'  component={Categories} />
          <Route path='/post/:id'  component={PostPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
