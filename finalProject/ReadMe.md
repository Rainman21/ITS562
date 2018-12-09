# Pulling Everything Together

For your final assignment, you will present your team site, and each team member will show one or more pages that they worked on for site.  Each individual should be able to show a different page or pages that demonstrates the following features


+ Your web page that leverages Bootstrap 4
    + Show an image carousel
    + Show three column text that rearranges to one column when displayed in a narrow phone view
    + Has a form that uses 4 or more HTML 5 input fields (the new specialized ones like email, date, etc.)
+ Your web page (can be the same one) that executes Ajax to get data
    + As you know, you can get data three ways:
        + Javascript object in your code (separate js file, or in your script block in web page)
        + Getting data from a REST call implemented by third party (like OpenBreweries.com)
        + Getting data from a REST call implemented by your NodeSite (i.e. the server.js)
    + You must implement at least a GET method on your nodeserver and ONE OTHER call (either from a third party or data on your web page script)
        + In each case, pick a way to display that data in your document
        + Feel free to use my sample methods below - you do not have to modify this code
            + 
        A button that retrieves some data via ajax and displays in the page - you need to do TWO of the three following ways:
        + 

        + Can be a list, table, or chart (Extra credit if you do more than one)
        + Data should be filled from 

## Display AJAX data as List

### Your html page

```html
    <ul id="myList"></ul>
```

### Your html script

```javascript
    DisplayJSONobjectAsList(data, "myList");
``` 

### Provided helper method (you can use unmodified - just cut and paste into your code)

```javascript
 
        //Use Case - You have an empty list in your page with id : i.e.  <ul id="elementID"></ul>
        //This call will take an array of strings, apnd place them as <li> entries inside this list
        function DisplayJSONobjectAsList(arrayOfstring, elementID){
            let innerHTML = "";
            for(i = 0; i < arrayOfstring.length; i++){
                innerHTML += "<li>"+ arrayOfstring[i] + "</li>";

            }
            document.getElementById(elementID).innerHTML = innerHTML;
        }

```


## Display AJAX data as Table

### Your html page

```html
     <table id="myTable"></table>
```

### Your html script

If the property names are sufficient as the column headers
```javascript
    DisplayJSONobjectArrayAsTable(data, "myTable");

``` 

if you want to replace the property names with better column headers

```javascript

    //Create an object that provides a column heading replacment for the property and
    //  pass in as the third argument

        let tableHeadings = {

                    "name": "User Name",
                    "password": "Password",
                    "profession": "Profession",
                    "id": "ID"
                };
                
    DisplayJSONobjectArrayAsTable(data, "myTable",tableHeadings);

``` 


### Provided helper method (you can use unmodified - just cut and paste into your code)

```javascript
   function DisplayJSONobjectArrayAsTable(arrayOfObjects, elementID, keyToHeadingArray) {
                let innerHTML = "";
                let keys = [];
                if (arrayOfObjects.length > 0) {

                    //write head
                    innerHTML += "<thead><tr>";
                    keys = Object.keys(arrayOfObjects[0]);
                    for (key = 0; key < keys.length; key++) {
                        let columnHeading =  keys[key];
                        try{
                            if(keyToHeadingArray){
                                columnHeading= keyToHeadingArray[columnHeading];
                            }
                        }
                        catch(err){
                            console.log(err);
                        }
                         innerHTML += "<th>" + columnHeading + "</th>";
                                
                        
                    }
                    innerHTML += "</tr></thead>";

                    //write body
                    innerHTML += "<tbody>";
                    for (i = 0; i < arrayOfObjects.length; i++) {
                        let currentObject = arrayOfObjects[i];
                        innerHTML += "<tr>";
                        for (j = 0; j < keys.length; j++) {
                            let currentValue = currentObject[keys[j]];
                            innerHTML += "<td>" + currentValue + "</td>";
                        }
                        innerHTML += "</tr>";

                        // innerHTML += "<li>"+ arrayOfstring[i] + "</li>";

                    }

                    innerHTML += "</tbody>";

                }


                document.getElementById(elementID).innerHTML = innerHTML;
            }
		
```
## Submitting your work

 You will be presenting your project in class, so if all goes according to plan, we should see that your Node server code and the web pages work.  However, we still need to document your work.  For the final project, you can have each person 
 + create a {studentName}_finalProject.md file in you team repository Github site
    + Add link(s) to your specific student developed html file (and any other files it needs)
    + Add a section to the md file where you discuss you ajax calls
        + If one is hitting node, what function are you calling?
        + If you are hitting a third party REST api, what calls are you making
    + Be sure to include any lessons learned, or other discussion elements that you think are relevant to the class
        + Elements of the webpage that you found easy / hard, lessons learned, things you wich you could do, ways to improve the class,etc. 
    + add a link to the publically visible page (http://github.io/..)
+ Submit the URL to the github readme file as your final project ((http://github.com/...))


## Tips

Use Slack (part of your grade) to help each other out... You will get points for helping others...  


Leverage working code (from this page, out course github, or others) first.  Commit working code to Github.  Then, change the code one step at a time to do what you want... If you went to far and broke too much, you can always revert your code back to the last commit.


### Node Modules

+ Don't forget - if you get a project folder from Git, it may already have a package.json, which specifies the node modules youn need, but it won't have fetched them yet...
+ To fetch your node modules (install from the web) type

```console
npm init
```

### Markdown Cheatsheat

<https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
