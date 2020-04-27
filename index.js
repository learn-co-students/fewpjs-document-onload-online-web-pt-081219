// Your code goes here
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("text").innerHTML = "This is really cool!";

// })

document.addEventListener("DOMContentLoaded", function () {
  
    document.getElementById("text").innerHTML = "This is really cool!";

})

let element = document.createElement("p");
element.setAttribute('id', 'test');
element.innerHTML = "testing"
document.body.appendChild(element); 



    
// It is important to note that the DOMContentLoaded event fires once the initial HTML document finishes loading, but does not wait for CSS stylesheets or images to load. In situations where you need everything to completely load, use the load event instead.

// While both will work, it is often the case that we only need the HTML content to fully load in order to execute our JavaScript. Since images can take some time to load, using the load event means visitors of a webpage may see your webpage in its original state for a couple of seconds before any JavaScript fires and updates the DOM.
// This sort of action, however, will only work if the HTML content is actually loaded on the page. The DOMContentLoaded event ensures that our JavaScript code is being executed immediately after the HTML is finished loading.