// parent 监听 iframe child 发送的消息
window.addEventListener('message', (event) => {
  if (event.origin !== 'http://localhost:9191') return;
  console.log('parent recieved:', event.data);
});

// parent 给 iframe child 发消息
const textMessageInput = document.querySelector('#textMessage');
const myIframe = document.querySelector('#myIframe');
textMessageInput.addEventListener('input', (event) => {
  myIframe.contentWindow.postMessage(
    event.currentTarget.value,
    'http://localhost:9191'
  );
});
