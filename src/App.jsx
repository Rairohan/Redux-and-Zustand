import { Provider } from 'react-redux'
import { store } from './store/redux/store'
import ReduxLikes from "./features/ReduxLikes";
import CartTracker from './features/cartTracker';
import NoteTracker from './features/NoteTracker';
import TodoTracker from './features/TodoTracker';

export default function App() {
  return (
    <Provider store={store}>
      <TodoTracker/>
    </Provider>
  )
}