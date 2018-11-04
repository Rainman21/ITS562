
# IMPORTANT
+ if you are reading this from a markdown file (.md) you want to convert this to an html file so it is a bit easier to read.  I would make sure the markdown all-in-one extension is installed 
+ Markdown All in One (yzhang.markdown-all-in-one)  by Yu Zhang. 
+ If installed, you can launch the command palette by going to the menu option View | Command Palette, or using the hotkey comob CTRL + SHIFT+P
+ type "markdown" in the command palete and the choose the "Print Current Document to HTML"
+ This should render the readme.md as readme.html -- switch to this file



You need to start by runnning "npm install" at the terminal (command line)
+ this will read the package.json file and install all the components you need in node-modules sub folder
+ If you need to add new modules to the project, use the command npm install (module name) --save
    + for example: install jquery and its typescript typings (and record in package.json)
        + npm install jquery --save  
        + npm install @types/jquery --save    


ou need to run "tsc" (type script compiler) at the terminal (command line)
+ this will convert your .ts files to .js files with inline debug map files embeddedd

Next, you need to run "tsc" (type script compiler) at the terminal (command line)
+ this will convert your .ts files to .js files with inline debug map files embeddedd

If you want to extend this markdown and you need help, consult the
[Markdown Cheatsheat](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


Need to start with "npm init"

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
Headers
# H1
## H2
### H3
#### H4

[Markdown Cheatsheat](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# TODO
+ Run "npm init" to setup your package file
+ install npm dependencies 
    + **express** (webapi)
    + **fs** (fileserver)
    + **body-parser** (body parser for post bodies)


## Installing NPM modules
```javascript
npm install express --local
npm install body-parser --local
npm install fs --local
```


# 1 resources
[How to delete items from an array](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_remove)