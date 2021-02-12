export const TEXT_CHANGE_TYPE = 'FORM.TEXT.CHANGE';

export function textChange(text) {
    return {
        type: TEXT_CHANGE_TYPE,
        payload: text,
    };
}
