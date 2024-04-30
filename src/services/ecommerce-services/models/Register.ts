/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Register = {
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    password: string;
    password2: string;
    email: string;
    first_name: string;
    last_name: string;
};
