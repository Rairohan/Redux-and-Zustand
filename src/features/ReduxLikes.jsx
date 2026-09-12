import {useSelector, useDispatch} from 'react-redux';

export default function ReduxLikes(){
const likes =useSelector(state=>state.likes)
const dispatch = useDispatch()
return(
    <div>
      <h2>Redux Likes: {likes}</h2>
      <button onClick={() => dispatch({ type: 'like' })}>Like</button>
      <button onClick={() => dispatch({ type: 'dislike' })}>Dislike</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
)
}