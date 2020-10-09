const generateButton = document.querySelector('#webhook-gen');
const message = document.querySelector('#message');
const link = document.querySelector('#webhook-input');

generateButton.addEventListener('click', () => {

  const webhook = encodeURIComponent(link.value);
  if (!webhook) return;
  const discordMsg = encodeURIComponent(message.value) || "I'm live!";

  const sourceLink = `https://itsduckxyz.github.io/live-webhooks/livealert?link=${webhook}&message=${discordMsg}`;
  document.querySelector('#source-link').innerHTML = sourceLink;
  if (!message.value) {
    message.value = discordMsg
  }
})