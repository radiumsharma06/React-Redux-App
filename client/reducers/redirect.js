const redirect = (state=null, action) => {
  switch(action.type){
    case 'REDIRECT_PATH':{
      return action.path;
    }
    default:
        return state;
  }
};

export default redirect;
