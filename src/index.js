import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    const { name, age } = props

    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const App = (props) => {
    const name = 'Peter'
    const age = 25

    const [counter, setCounter] = useState(0)

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    console.log('clicked...', counter)

    const setToValue = (value) => setCounter(value)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }


    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name={name} age={age} />

            <Display counter={counter} />
            <Button onClick={() => setToValue(counter + 1)}
                text='plus' />
            <Button onClick={() => setToValue(counter - 1)}
                text='minus' />
            <Button onClick={() => setToValue(0)}
                text='zero' />

            <div>
                {left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {right}
                <History allClicks={allClicks} />
            </div>
        </div>
    )


}


ReactDOM.render(<App />, document.getElementById('root'));

