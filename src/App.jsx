import { Provider } from 'react-redux'
import { store } from './store/redux/store'
import ReduxLikes from "./features/ReduxLikes";

export default function App() {
  return (
    <Provider store={store}>
      <ReduxLikes/>
    </Provider>
  )
}