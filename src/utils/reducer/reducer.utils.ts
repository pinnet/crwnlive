/**
 * @file reducer.utils.ts
 * @created Thu Dec 14 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
};

export type Action<T> = {
    type: T;
};

export function createAction<T extends string, P>(
    type: T,
    payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
    type: T,
    payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return {
        type,
        payload,
    };
}
