const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const link = decodeURIComponent(urlParams.get('link'));
const message = decodeURIComponent(urlParams.get('message'));

window.addEventListener('obsStreamingStarting', function(event) {
  const request = new XMLHttpRequest();

  request.open("POST", link);
  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    content: message
  }
  
  request.send(JSON.stringify(params));
})

