export const delay = (time) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };
  
  export const wait = async (time) => {
    await delay(time);
  };

