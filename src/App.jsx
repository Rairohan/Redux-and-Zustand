import { Provider } from 'react-redux'
import { store } from './store/redux/store'
import ReduxLikes from "./features/ReduxLikes";
import CartTracker from './features/cartTracker';
import NoteTracker from './features/NoteTracker';

export default function App() {
  return (
    <Provider store={store}>
      <NoteTracker/>
    </Provider>
  )
}