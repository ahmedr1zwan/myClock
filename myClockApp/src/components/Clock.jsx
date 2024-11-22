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

        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`


    }

    function padZero(num) {

        return (num < 10 ? '0' : '') + num

    }



return(

    <div className='clock-container'>
        <span className='clock'>{formatTime()}</span>
    </div>

)

}

export default Clock;