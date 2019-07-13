import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CLIENT_RENEG_WINDOW } from "tls";

const MostVoted = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes)
  console.log(maxVotes)
  const index = votes.indexOf(maxVotes)

  if (maxVotes >= 0) {
    return (
      <div>
        <h1>Anecdote with the most votes</h1>
        <p>{anecdotes[index]}</p>
        <p>has {votes[index]} votes</p>
      </div>
    )
  }
}

const App = () => {
  let n = anecdotes.length

  const [selected, setSelected] = useState(Math.floor(Math.random() * n))
  const [votes, setVotes] = useState(Array(n).fill(0))

  const Vote = (props) => {
    const newVotes = [...votes]
    newVotes[props] += 1
    setVotes(newVotes)
    console.log(votes)
  }



  return (
    <div>
      {anecdotes[selected]}
      <div>
        has {votes[selected]} votes
        <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>New</button>
        <button onClick={() => Vote(selected)}>Vote</button>
        <MostVoted anecdotes={anecdotes} votes={votes} />
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
