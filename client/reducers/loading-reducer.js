const loadingDetails = (state = true, action) => {
    switch(action.type){
        case 'STOP_LOADING':{
            return action.data;
        }
        default:
            return state;
    }
};

export default loadingDetails;
