const use = (promise: any) => {
  if (promise.status === 'fulfilled') {
    return promise.value;
  }

  if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    const demo = promise;
    demo.status = 'pending';
    demo.then(
      (result: any) => {
        demo.status = 'fulfilled';
        demo.value = result;
      },
      (reason: any) => {
        demo.status = 'rejected';
        demo.reason = reason;
      },
    );
    throw promise;
  }
};

export { use };
