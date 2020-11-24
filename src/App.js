import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Posts from './Component/Posts';
import Comments from './Component/Comments';
import Albums from './Component/Albums';
import Photos from './Component/Photos';
import Todos from './Component/Todos';
import Users from './Component/Users';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/posts" exact component={Posts} />
        <Link path="/comments" exact component={Comments} />
        <Link path="/albums" exact component={Albums} />
        <Link path="/photos" exact component={Photos} />
        <Link path="/todos" exact component={Todos} />
        <Link path="/users" exact component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
