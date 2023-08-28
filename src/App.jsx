import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import CharacterList from './views/Characters/List';
import CharacterDetail from './views/Characters/Detail';
import { init } from 'commandbar';
import useCommandBar from './components/useCommandBar';
init('e2bbc1c3');

export default function App() {
 useCommandBar();
  return (

    <Routes>
      <Route path='/characters/:id' element={<CharacterDetail />} />
      <Route path='/' element={<CharacterList />} />
    </Routes>
  )
}
