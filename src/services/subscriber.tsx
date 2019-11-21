type Callback = () => any;

const subscribers: { [key: string]: Callback[] } = {};

function subscribe(event: string, cb: Callback) {
  if (!subscribers[event]) {
    subscribers[event] = [];
  }

  subscribers[event].push(cb);

  return () => {
    subscribers[event] = subscribers[event].filter(
      subscriber => subscriber !== cb
    );
  };
}

function publish(event: string) {
  subscribers[event] && subscribers[event].forEach(cb => cb());
}

export { subscribe, publish };
