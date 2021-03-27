import UglifyJS from 'uglify-js';
import { js } from 'js-beautify';

export function createStack(code: string): string[] {
    let tmpStack = [];
    const uglified = UglifyJS.minify(code, { mangle: false, compress: false, warnings: "verbose", sourceMap: true, keep_fnames: true});
    const clean = js(uglified.code)
    tmpStack = clean.split('\n');
    return tmpStack;
}