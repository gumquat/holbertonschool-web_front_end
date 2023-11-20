# Advanced jQuery README (quick ref)

This guide will cover how to load jQuery from a CDN, create and modify DOM elements using jQuery, add new elements to a page at different positions, add a click handler on an element, send AJAX queries, and create a pagination.
Loading jQuery from a CDN

## To load jQuery from a CDN, you need to add a script tag to your HTML file that points to the jQuery CDN. Here is an example:

<script src="https://code.jquery.com/jquery-3.7.0.js"></script>

## Creating DOM Elements with jQuery

There are several ways to create DOM elements with jQuery. One common method is to use the $ function to create a new element, set its properties, and then append it to the DOM. Here is an example:
```
$("<a/>", {
   id: 'example-link',
   href: 'http://www.example.com/',
   text: 'Example Page'
}).appendTo("body");
```

## Modifying Elements

You can modify the attributes of an element using the .attr() function. For example, you can change the href attribute of a link like this:

```
$("#myDiv a:first").attr("href", "newDestination.html");
```

## Adding New Elements to a Page

You can add new elements to a page at different positions using several jQuery functions. Here are some examples:

* .append(): Inserts content at the end of the selected elements.
```
$("p").append("Some appended text.");
```
* .prepend(): Inserts content at the beginning of the selected elements.
```
$("p").prepend("Some prepended text.");
```
* .after(): Inserts content after the selected HTML elements.
```
$("img").after("Some text after");
```
* .before(): Inserts content before the selected HTML elements.
```
$("img").before("Some text before");
```

## Adding a Click Handler on an Element

You can add a click handler to an element using the .click() function. Here is an example:
```
$("#myButton").click(function() {
   alert("Button clicked.");
});
```

## Sending AJAX Queries with jQuery

You can send AJAX queries using the .load(), .get(), .post(), and .ajax() functions. Here is an example of a GET request:
```
$.get("test.php", function(data, status){
   alert("Data: " + data + "\nStatus: " + status);
});
```

### And here is an example of a POST request:
```
$.post("test.php",
 {name: "John", location: "Boston"},
 function(data, status){
   alert("Data: " + data + "\nStatus: " + status);
});
```


# Creating a Pagination

Creating a pagination involves creating a set of links for each page and then using jQuery to handle the click events on these links to load the appropriate content. This is a more complex task that involves both jQuery and server-side programming. The exact implementation will depend on the specific requirements of your application.