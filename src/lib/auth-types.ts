import { AuthError } from 'next-auth';

export type ActionState = {
    error?: string;
    success?: string;
    fieldErrors?: {
        [key: string]: string[] | undefined;
    };
};

export class AuthActionError extends Error {
    constructor(public message: string) {
        super(message);
        this.name = 'AuthActionError';
    }
}
