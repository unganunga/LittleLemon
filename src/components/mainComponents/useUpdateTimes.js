import { useEffect, useState } from "react";

function useUpdateTimes(setAvailableTimes) {
    const [url, setUrl] = useState(null);
    const setTimes = setAvailableTimes


    useEffect(() => {if (url != null) fetchTimes()}, [url]);

    function fetchTimes() {
        // get available times for datestring passed to getTimes function from LittleLemon API
        // and update state using setState method passed into this hook with list of times for that day

        let available_times = [];
        available_times.push("--- Select a Time ---");
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }})
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json()
            })
            .then(data => {
                let times = data;

                for (let i = 0; i < times.length; i++) {
                    available_times.push(times[i].time)
                }

                setTimes(available_times)
                console.log(available_times);
            })
            .catch(error => {
                console.log('Fetch failed', error);
            });
    }

    function getTimes(dateString) {

        const baseUrl = 'http://localhost:5220/api/BookingTimes/time-by-date/'

        const newUrl = baseUrl + dateString;

        setUrl(newUrl);
    }

    return getTimes;
}

export default useUpdateTimes;