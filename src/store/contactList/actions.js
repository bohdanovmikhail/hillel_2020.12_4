export const CONTACT_LIST_FETCH = 'CONTACT_LIST.FETCH.START';
export const CONTACT_LIST_FETCH_DONE = 'CONTACT_LIST.FETCH.DONE';
export const CONTACT_LIST_FETCH_FAIL = 'CONTACT_LIST.FETCH.FAIL';

export function fetchStart() {
    return {
        type: CONTACT_LIST_FETCH,
    };
}

export function fetchDone(contactList) {
    return {
        type: CONTACT_LIST_FETCH_DONE,
        payload: contactList,
    };
}

export function fetchFail() {
    return {
        type: CONTACT_LIST_FETCH_FAIL,
    };
}

export function fetchList() {
    return dispatch => {
        dispatch(fetchStart());

        fetch('https://600d9cedf979dd001745ce20.mockapi.io/contacts')
            .then(response => response.json())
            .then(contacts => {
                const action = fetchDone(contacts);
                dispatch(action);
            })
            .catch(error => {
                dispatch(fetchFail());
            });
    };
}
