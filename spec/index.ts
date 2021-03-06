import './loadEnv';
import find from 'find';
import Jasmine from 'jasmine';
import commandLineArgs from 'command-line-args';
import { log } from 'console';



// Setup command line options
const options = commandLineArgs([
    {
        name: 'testFile',
        alias: 'f',
        type: String,
    }
], { partial: true });


// Init Jasmine
const jasmine = new Jasmine({});

// Set location of test files
jasmine.loadConfig({
    random: true,
    spec_dir: 'spec',
    spec_files: [
        './tests/**/*.spec.ts',
    ],
    stopSpecOnExpectationFailure: false,
});

// On complete callback function
jasmine.onComplete((passed: boolean) => {
    if (passed) {
        log('All tests have passed :)');
    } else {
        log('At least one test has failed :(');
    }
    jasmine.exitCodeCompletion(passed);
});

// Run all or a single unit-test
if (options.testFile) {
    const testFile = options.testFile as string;
    find.file(testFile + '.spec.ts', './spec', (files: string[]) => {
        if (files.length === 1) {
            jasmine.specFiles = [files[0]];
            jasmine.execute();
        } else {
            log('Test file not found!');
        }
    });
} else {
    jasmine.execute();
}
