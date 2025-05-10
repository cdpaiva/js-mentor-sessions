export const analytics = {
    track: (eventName, data) => {
        console.log(`[Analytics] Event: ${eventName}`, data, new Date());
    },
};
