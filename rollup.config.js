import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import svg from 'rollup-plugin-svg';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import globals from 'rollup-plugin-node-globals';

import builtins from 'rollup-plugin-node-builtins';

import htmlBundle from 'rollup-plugin-html-bundle';

import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true,
                });
            }
        },
    };
}

export default [
    {
        input: 'app/main.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/bundle.js',
        },
        plugins: [
            resolve({
                preferBuiltins: true,
                mainFields: ['browser'],
                browser: true,
                dedupe: (importee) => importee === 'svelte' || importee.startsWith('svelte/'),
                extensions: ['.svelte', '.mjs', '.js', '.json', '.node'],
            }),
            commonjs(),
            builtins(),
            typescript(),
            // nodeResolve({ browser: true, preferBuiltins: true }),

            globals(),

            // nodePolyfills(),
            svg(),

            svelte({
                preprocess: sveltePreprocess(),
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production,
                },
            }),
            // we'll extract any component CSS out into
            // a separate file - better for performance

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs

            postcss({
                extensions: ['.css'],
                plugins: [cssnano()],
            }),
            htmlBundle({
                template: 'public/index.html',
                target: 'dist/ui.html',
                inline: true,
            }),

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser(),
        ],
        watch: {
            clearScreen: false,
        },
    },
    {
        input: 'plugin/code.ts',
        output: {
            sourcemap: false,
            file: 'dist/code.js',
            format: 'iife',
            name: 'code',
        },
        plugins: [nodeResolve(), typescript(), production && terser(), commonjs()],
    },
];
