import { Route, Switch } from 'react-router-dom';
import CharacterList from './views/Characters/List';
import CharacterDetail from './views/Characters/Detail';

export default function App() {
  return (
    <Switch>
      {/* <Route path='/characters/:id'>
        <CharacterDetail />
      </Route> */}
      <Route path='/'>
        <CharacterList />
      </Route>
    </Switch>
  )
}
