/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Section: User Interfaces and React
*/
import React, {useState} from 'react';

function Sparkle() {
    /**
     * Declare our initial component state this is a variable of
     * 'sparkle' which is an empty string. We've also defined an
     * 'addSparkle' function, whic we'll call in our click handler
    */
    const [sparkle, addSparkle] = useState('');
    return (
        <div>
            <button onClick={() => addSparkle(sparkle + '\u2728')}>
                Add some sparkle
            </button>
            <p>{sparkle}</p>
        </div>
    )
}

export default Sparkle;