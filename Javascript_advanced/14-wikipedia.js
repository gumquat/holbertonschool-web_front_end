//first function createElement; makes a paragraph in the body doc
function createElement(data) {
  let p = document.createElement('p'); /* create a paragraph element */
  p.textContent = data; /* set content of paragraph to data */
  document.body.appendChild(p); /*append to the document body*/
 }

 //second function queryWikipedia, fills the paragraph with data from wikipedia
 function queryWikipedia(callback) {
  let butt = new XMLHttpRequest();
  /*uses XMLHttpRequest to get article from wikipedia*/
  butt.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  /* on success, calls 'callback' function 
  with the 'extract' of the API response*/
  butt.onload = function() {
    if (butt.status === 200) {
      /*the info is json, parse it here and put
      it into a variable called 'data'*/
      let data = JSON.parse(butt.responseText);
      /*extract the info now thats its parsed
      put it in a variable called 'extract'*/
      let extract = data.query.pages[21721040].extract;
      callback(extract);
    }
  };
  butt.send();
 }
 
 /* this will fetch the article from wikipedia
 parse the JSON response
 extract the article's text
 and pass it to the 'createElement' function
 which will create a paragraph element with the
 article text and append it to the doc body */
 queryWikipedia(createElement);
