const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const link = decodeURIComponent(urlParams.get('link'));
const message = urlParams.get('messsage');

window.addEventListener('obsSceneChanged', function(event) {
  const request = new XMLHttpRequest();

  request.open("POST", link);
  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    content: `${message} + ${link} ahhhhhhhhhhhhhhhhhh ${message}`
  }
  
  request.send(JSON.stringify(params));
})

