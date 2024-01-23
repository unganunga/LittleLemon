import fakeAPI from "../../fakeAPI";

function useFormAPI() {
    function updateTimes(prevTimes, dateString) {

        const date = new Date(dateString);
        const available_times = fakeAPI.fetchAPI(date);
        return available_times
    }

    function initializeTimes(){

        const date = new Date();
        const available_times = fakeAPI.fetchAPI(date);
        return available_times
    }

    function submitForm(formData) {

        const response = fakeAPI.submitAPI(formData);
        return response
    }

    return {updateTimes, initializeTimes, submitForm}
}


export default useFormAPI