const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    // else {
    //     const newQuantity = quantity + 1;
    //     appliedJob[id] = newQuantity;
    // }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

const removeFromDb = id => {
    const appliedJob = getAppliedJob();
    if (id in appliedJob) {
        delete appliedJob[id];
        localStorage.setItem('applied-job', JSON.stringify(appliedJob));
    }
}

const getAppliedJob = () => {
    let appliedJob = {};

    //get the shopping cart from local storage
    const storedAppliedJob = localStorage.getItem('applied-job');
    if (storedAppliedJob) {
        appliedJob = JSON.parse(storedAppliedJob);
    }
    return appliedJob;
}

const deleteAppliedJob = () => {
    localStorage.removeItem('applied-job');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJob,
    deleteAppliedJob
}