const path = require('path');

function getMessages(req, res) {
  // res.send('<ul><li>Hello Albert</li></ul>');
  res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.webp'));
}

function postMessage(req, res) {
  console.log('Updating messages');
}

module.exports = {
  getMessages,
  postMessage,
};
