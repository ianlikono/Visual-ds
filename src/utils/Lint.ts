
import { JSHINT, LintError } from 'jshint';


export function lintBLock(currentStack: string[]): LintError [] {
    try {
        const options = {
            undef: true,
            asi: true,
            esversion: 6,
            browser: true,
        };
        JSHINT(currentStack, options);
        return JSHINT.errors;
    } catch (error) {
        console.log(error);
        throw new Error("Unexpected error occurred while linting");

    }

}