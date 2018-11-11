
# Typescript Assignment
+ start by installing typescript
    + go to any command prompt and type 'npm install -g typescript'
    + this will install typescript globally (available in any folder)
+ Visit the site <https://www.typescriptlang.org/>
    + Familiarize yourself with the documentation and find the manual descriptions for
        + Interfaces
        + Enumerations
        + Classes 
        + Functions (also known as methods)
        + Properties
+ Create a 'typescript' folder for your assignment in your team site (one per student).  Creating one in your local git folder will create one in the Github site upon sync
+ Create an initial default tsconfig.json settings file by typing
    + ```tsc --init```
    + This should result in the following messge
    + ```message TS6071: Successfully created a tsconfig.json file.```
    + Open this file and consult the documentation to try and understand some of the options (you will have questions - ask in the discussion)
+ Create a homework.ts file in your new folder
+ Following the example documentation above, create an
    + enumeration
    + interface that uses the enumeration
        + Add a method to the interface that takes a number and resturns a string
        + expose the enumeration as a property
    + create a classes that implement the interface
+ Then, use the typescript compiler 
    + ```tsc homework.ts```
    + Note -  you may see errors, but it will often still work
        +  we can discuss errors in class
    + Once you have a homework.js file being created, look at the tsconfig.json file's target property (should look like)
        + rename your homework.js file homework.es5.js
        + change your 'target' prop to each of the available options
        'ES3', 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' 
        + each time renaming your output js file like you did above (so we can compare the outputs of each setting)

    

You can demonstrate in class, or Include each output in document, and comment on the differences you see between each version, and submit

# Examples in this folder

+ There is a homework.ts file that was compiled to homework.js - this will compile to js (also in this folder), but doesn't represent an actual homework assignment (i.e. you cannot simply copy and use for your submission)
+ Also included is a sample ajax.ts and ajax.js output we used in class to demonstrate type checking


# Markdown (.md) Cheatsheet

+ <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
