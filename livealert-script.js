const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const link = decodeURIComponent(urlParams.get('link'));
const channel = urlParams.get('channel');

window.addEventListener('obsSceneChanged', function(event) {
  const request = new XMLHttpRequest();

  request.open("POST", link);
  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    content: `https://www.twitch.tv/${channel}`
  }
  
  request.send(JSON.stringify(params));
})

