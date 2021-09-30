
export const newLogin = (event) => {
    return {
      type: "NEW_LOGIN",
      payload: {
        event: event,
      },
    };
  };
  

  
  export const logOut = () => {
    return {
      type: "LOG_OUT"
    };
  };
  
  export const displayRecords = (event) =>{
    return {
      type : "DISPLAY_RECORDS",
      payload : {
        event : event
      }
    }
}

