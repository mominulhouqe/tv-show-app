// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getappliedJobs();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJobs[id] = newQuantity;
    }
    // localStorage.setItem('applied-job', JSON.stringify(appliedJobs));
}



const getappliedJobs = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('bookingData');
    if (storedCart) {
        appliedJobs = JSON.parse(storedCart);
    }
    return appliedJobs;
}

export {
    addToDb,
    getappliedJobs,
   
}