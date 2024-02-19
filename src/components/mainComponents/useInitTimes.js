import { useEffect } from "react";

function useInitTimes(setAvailableTimes){

    // build date string for current day in format dd-mm-yyyy
    const date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDate = dd + '-' + mm + '-' + yyyy;


    useEffect(() => {fetchData();}, []);


    function fetchData() {
        // get available times for current day from LittleLemon API
        // and update state using setState method passed into this hook

        let available_times = [];
        available_times.push("--- Select a Time ---");
        fetch(`http://localhost:5220/api/BookingTimes/time-by-date/${formattedDate}`, {
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

            setAvailableTimes(available_times)
        })
        .catch(error => {
            console.log('Fetch failed:', error);
        });
    }


return { initTimes: fetchData }; // Return the fetchData function

}

export default useInitTimes;