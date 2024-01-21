import fakeAPI from "../../fakeAPI";

function updateTimes(prevTimes, dateString) {

    console.log(dateString)
    const date = new Date(dateString);
    console.log(date)

    const available_times = fakeAPI.fetchAPI(date);

    return available_times
}

function initializeTimes(){

    const date = new Date();

    const available_times = fakeAPI.fetchAPI(date);

    return available_times
}

export {initializeTimes, updateTimes};