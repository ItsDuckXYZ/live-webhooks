const generateButton = document.querySelector('#webhook-gen');
const channel = document.querySelector('#channel-name');
const link = document.querySelector('#webhook-input');

generateButton.addEventListener('click', () => {

  const webhook = encodeURIComponent(link.value);
  if (!webhook) return;
  const ttvChannel = encodeURIComponent(channel.value);
  if (!ttvChannel) return;

  const sourceLink = `https://itsduckxyz.github.io/live-webhooks/livealert?link=${webhook}&channel=${ttvChannel}`;
  document.querySelector('#source-link').innerHTML = sourceLink;
})