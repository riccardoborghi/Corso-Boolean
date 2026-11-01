// Array contenente i messaggi della chat
const messages = [
  {
    role: 'user',
    text: 'Ciao gIAda, vorrei iscrivermi a Boolean, puoi consigliarmi il giusto master?',
    timestamp: '10:42'
  },
  {
    role: 'assistant',
    text: 'Certamente! Parlami di cosa ti piacerebbe fare e delle tue competenze attuali e proverò ad indirizzarti correttamente!',
    timestamp: '10:43'
  }
];

console.log(messages)

// Riferimenti agli elementi del DOM
const chatBody = document.getElementById('chat-body');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

/**
 * Restituisce l'orario corrente nel formato hh:mm
 * @returns {string}
 */
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

/**
 * Crea e restituisce l'elemento DOM per un messaggio
 * @param {Object} message - Oggetto messaggio con role, text, timestamp
 * @returns {HTMLElement}
 */
function createMessageElement(message) {
  const isUser = message.role === 'user';
  const messageEl = document.createElement('div');
  messageEl.className = `message ${isUser ? 'message-user' : 'message-bot'}`;

  if (isUser) {
    messageEl.innerHTML = `
            <div class="message-content">
                <div class="bubble"></div>
                <div class="message-meta">
                    <span>${message.timestamp}</span>
                    <span class="material-symbols-outlined check-icon">done_all</span>
                </div>
            </div>
            <div class="avatar-wrapper">
                <img src="img/user.png" alt="Tu" class="avatar">
            </div>
        `;
  } else {
    messageEl.innerHTML = `
            <div class="avatar-wrapper">
                <img src="img/icon.png" alt="gIAda" class="avatar">
                <span class="online-dot"></span>
            </div>
            <div class="message-content">
                <div class="bubble"></div>
                <div class="message-meta">
                    <span>${message.timestamp}</span>
                </div>
            </div>
        `;
  }

  // Assegna il testo in modo sicuro evitando problemi XSS
  messageEl.querySelector('.bubble').textContent = message.text;

  return messageEl;
}

/**
 * Fa scorrere la visualizzazione verso l'ultimo messaggio inviato
 */
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}

/**
 * Mostra in pagina tutti i messaggi presenti nell'array
 */
function renderMessages() {
  chatBody.innerHTML = '';
  messages.forEach((msg) => {
    chatBody.appendChild(createMessageElement(msg));
  });
  scrollToBottom();
}

// Ascolto dell'evento submit sul form
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = messageInput.value.trim();
  if (!text) return;

  // Nuovo messaggio utente
  const newMessage = {
    role: 'user',
    text: text,
    timestamp: getCurrentTime()
  };

  // Aggiunta del messaggio all'array
  messages.push(newMessage);

  console.log(messages)

  // Visualizzazione del nuovo messaggio nella pagina
  chatBody.appendChild(createMessageElement(newMessage));

  // Pulizia e focus dell'input
  messageInput.value = '';
  messageInput.focus();

  // Scroll verso il basso
  scrollToBottom();

  // Risposta automatica del chatbot
  setTimeout(() => {
    const botResponse = {
      role: 'assistant',
      text: 'Sto pensando...',
      timestamp: getCurrentTime()
    };

    // Aggiunta del messaggio del bot all'array
    messages.push(botResponse);

    console.log(messages);

    // Visualizzazione della risposta nella pagina
    chatBody.appendChild(createMessageElement(botResponse));

    // Scroll verso il basso
    scrollToBottom();
  }, 1000);
});

// Render iniziale all'avvio della pagina
renderMessages();
