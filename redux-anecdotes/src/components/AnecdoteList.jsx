import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <li>
      <div>{anecdote.content}</div>
      has <strong> {anecdote.votes} </strong>
      <button onClick={handleClick}>vote</button>
    </li>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  return (
    <ul>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => dispatch(vote(anecdote.id))}
          />
        )}
    </ul>
  )
}


export default AnecdoteList