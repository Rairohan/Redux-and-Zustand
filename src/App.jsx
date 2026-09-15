import { Provider } from 'react-redux'
import { store } from './store/redux/store'
import ReduxLikes from "./features/ReduxLikes";
import CartTracker from './features/cartTracker';

export default function App() {
  return (
    <Provider store={store}>
      <CartTracker/>
    </Provider>
  )
}