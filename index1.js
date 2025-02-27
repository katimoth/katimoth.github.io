
document.addEventListener("DOMContentLoaded", () => {
  // const inputField = document.getElementById("input");
  // inputField.addEventListener("keydown", (e) => {
  //   if (e.code === "Enter") {
  //     let input = inputField.value;
  //     inputField.value = "";
  //     output(input);
  //   }
  // });

  // var inputElement = document.getElementsByClassName('input');
  // inputElement.type = "button"
  // inputElement.addEventListener('click', function(){
  //     console.log(inputElement.textContent);
  //     output(inputElement.textContent);
  // });
  output();
});

// function handleClick(id) {
//   const inputField = document.querySelector("#" + id);
//   console.log(inputField.textContent);
//   output(inputField.textContent);
// }

function output() {
  addChat("Hi", 1000)
  let product = "I had to remember numbers that were shown one at a time and sometimes their was a beeping noise that was annoying but not too bad"
  setTimeout(() => {
    addChat(product, 6000);
  }, 2000
  )
  setTimeout(() => {
    product = "I just repeated the numbers in my head to help remember"
    addChat(product, 5000);
  }, 9000
  )
  setTimeout(() => {
    product = "Partner has left the chat."
    addItalicChat(product);
  }, 15000
  )

}

// function compare(promptsArray, repliesArray, string) {
//   let reply;
//   let replyFound = false;
//   for (let x = 0; x < promptsArray.length; x++) {
//     for (let y = 0; y < promptsArray[x].length; y++) {
//       if (promptsArray[x][y] === string) {
//         let replies = repliesArray[x];
//         reply = replies[Math.floor(Math.random() * replies.length)];
//         replyFound = true;
//         // Stop inner loop when input value matches prompts
//         break;
//       }
//     }
//     if (replyFound) {
//       // Stop outer loop when reply is found instead of interating through the entire array
//       break;
//     }
//   }
//   return reply;
// }

function addChat(product, typeTime) {
  const messagesContainer = document.getElementById("messages");

  // let userDiv = document.createElement("div");
  // userDiv.id = "user";
  // userDiv.className = "user response";
  // userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  // messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  // let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  // botImg.src = "bot-mini.png";
  // botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  // botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    // textToSpeech(product)
  }, typeTime
  )

}

function addItalicChat(product) {
  const messagesContainer = document.getElementById("messages");

  // let userDiv = document.createElement("div");
  // userDiv.id = "user";
  // userDiv.className = "user response";
  // userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  // messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  // let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  // botImg.src = "bot-mini.png";
  // botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = `${product}`;
  botText.style.fontStyle = 'italic';
  botDiv.appendChild(botText);
  // botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;


}