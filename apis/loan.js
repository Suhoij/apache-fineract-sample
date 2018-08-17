module.exports =  (restRequest) => {
  return {
    stub: () => {
      restRequest.get();
    },
  };
};
