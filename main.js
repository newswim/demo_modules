'use strict';

// Run the code, similar to `require` in AMD.
// You shouldn't provide the .import.jsx suffix.
System.import('router');

// Issue 4 test code
System.import('components/test').then(function (mod) {
    console.log('issue-4 test', mod.default);
});