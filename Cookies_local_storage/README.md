# JavaScript Cookies and Web Storage

This guide provides information on how to create, read, and manipulate cookies using JavaScript, and how to use the browser's web storage. It also covers the differences between local storage and session storage.

## Creating Cookies

Creating a cookie in JavaScript is done using the document.cookie property. Here's a basic example:
```document.cookie = "username=John Doe";```

This will create a cookie named username with the value John Doe 9.

You can also set specific settings for the cookie, such as the expiry date, path, and domain. For example, to set a cookie that expires after 7 days, you can do:

```document.cookie = `username=${encodeURIComponent('John Doe')}; max-age=${7 * 24 * 60 * 60}`;```

This will create a cookie that expires after 7 days 4.

## Reading Cookies

To read cookies in JavaScript, you can use the document.cookie property. This will return a string containing all cookies in the format of key=value pairs. For example:

```let allCookies = document.cookie;```

This will store all cookies in the allCookies variable 6.

## Using js-cookie

The js-cookie library provides a simple API for manipulating cookies. To set a cookie using js-cookie, you can do:
```Cookies.set('name', 'value', { secure: true })```

This will create a cookie named name with the value value. The { secure: true } option indicates that the cookie transmission requires a secure protocol (https) 2.

To read a cookie with js-cookie, you can do:
```Cookies.get('name') // => 'value'```

This will return the value of the cookie named name 2.

## Using Web Storage

Web storage allows you to store data in a user's web browser. There are two types of web storage:

  * Local Storage: This is used to store data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

  * Session Storage: This is used to store data for one session. The data is deleted when the user closes the specific browser tab.

Here's an example of how to use local storage:
```
localStorage.setItem('name', 'John Doe');
let name = localStorage.getItem('name');
```

And here's an example of how to use session storage:
```
sessionStorage.setItem('name', 'John Doe');
let name = sessionStorage.getItem('name');
```

In both examples, we're setting an item with the key name and the value John Doe, and then retrieving the value of the item with the key name.
Differences Between Local Storage and Session Storage

The main difference between local storage and session storage is the lifespan of the data. Local storage data has no expiration date, meaning the data will not be deleted when the browser is closed, and will be available the next day, week, or year. On the other hand, session storage data is deleted when the browser tab is closed.

In terms of functionality, both local storage and session storage can be used to store data that is to be persisted across browser sessions, but the decision to use one over the other will depend on whether you want the data to be available indefinitely or only for the duration of the browser session.