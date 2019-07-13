import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = (props) => {
    let total = props.good + props.neutral + props.bad
    let average = (props.good - props.bad) / total
    let positive = (props.good / total) * 100 + '%'

    if (total === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <table>
            <tbody>
                <Statistic text='good' value={props.good} />
                <Statistic text='neutral' value={props.neutral} />
                <Statistic text='bad' value={props.bad} />
                <Statistic text='all' value={total} />
                <Statistic text='average' value={average} />
                <Statistic text='positive' value={positive} /> 
            </tbody>
        </table>
    )

}

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text='good' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button handleClick={() => setBad(bad + 1)} text='bad' />

            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));


