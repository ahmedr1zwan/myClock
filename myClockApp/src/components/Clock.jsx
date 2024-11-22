import React, {useState, useEffect} from 'react';

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
        

    }, 
    
    []);


    function formatTime() {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const ampm = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;


    }

    function formatDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return time.toLocaleDateString(undefined, options);
    }

    function padZero(num) {

        return (num < 10 ? '0' : '') + num

    }



return(

    <div className='clock-container'>
        <span className='clock'>{formatTime()}</span>
        <span className='date'>{formatDate()}</span>
    </div>

)

}

export default Clock;