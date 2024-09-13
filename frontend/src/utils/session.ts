let sessionStatus = false;

export const setSessionStatus = (status: boolean) => {
    sessionStatus = status;
};

export const getSessionStatus = () => {
    return sessionStatus;
};
