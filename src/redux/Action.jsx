export const chat = () => {
    return {
      type: 'CHAT',
    };
  };

export const final = (name,age) => {
    return {
        type: 'FINAL',
        name,
        age
    }
}
  
export const enroll = () => {
  return {
    type: 'ENROLL'
  }
}