const disabledMessage =
  "This historical client is intentionally disabled because a packaged app cannot protect a provider credential.";

document.getElementById("message-form").addEventListener("submit", (event) => {
  event.preventDefault();
});

function displayMessage(message, sender, timestamp) {
  const messagesDiv = document.getElementById("messages");
  const messageElement = document.createElement("div");
  messageElement.className = sender;

  // Create the message content element
  const messageContent = document.createElement("span");
  messageContent.className = "message-content";
  messageContent.textContent = message;
  messageElement.appendChild(messageContent);

  // Create the timestamp element
  const timestampElement = document.createElement("span");
  timestampElement.className = "timestamp";
  timestampElement.textContent = formatTimestamp(timestamp);
  messageElement.appendChild(timestampElement);

  // Add the message element to the messages container
  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getFormattedDate(date) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const inputDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (inputDate.valueOf() === today.valueOf()) {
    return "Today";
  } else if (inputDate.valueOf() === yesterday.valueOf()) {
    return "Yesterday";
  } else {
    const day = String(inputDate.getDate()).padStart(2, "0");
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const year = inputDate.getFullYear();
    return `${day}-${month}-${year}`;
  }
}

function formatTimestamp(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const formattedDate = getFormattedDate(date);
  return `${formattedDate} ${hours}:${minutes}`;
}

function loadConversationHistory() {
  const conversation = JSON.parse(localStorage.getItem("conversation")) || [];
  conversation.forEach((history) => {
    displayMessage(history.userMessage, "user", new Date(history.timestamp));
    displayMessage(history.assistantMessage, "assistant", new Date(history.timestamp));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadConversationHistory();

  const input = document.getElementById("message-input");
  const button = document.querySelector("#message-form button");
  input.disabled = true;
  button.disabled = true;
  input.placeholder = "Historical client disabled";
  displayMessage(disabledMessage, "assistant", new Date());
});
