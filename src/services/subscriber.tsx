const subscribers: any = {};

function subscribe(event: string, cb: () => any) {
    if (!subscribers[event]) {
        subscribers[event] = [];
    }

    subscribers[event].push(cb);

    return () => {
        subscribers[event] = subscribers[event].filter((subscribedCb: any) => subscribedCb !== cb);
    };
}

function publish(event: string) {
    subscribers[event] && subscribers[event].forEach((cb: any) => cb());
}

export { subscribe, publish };

