
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
  let product = "It was not great. I was asked to look at numbers and remember them and on some of the rounds there was a beeping noise in the background."
  addChat(product);
  product = "They are probably trying to distract us with the noises to see how it affects our memory. I just tried to keep repeating the numbers in my head."
  setTimeout(() => {
    addChat(product);
    product = "I really didn't like the beeps because I have an auditory condition called tinnitus that make higher-pitched noises feel distressing and painful, but I think you would be okay if you don't have anything like that."
  }, 8000
  )

  // Update DOM
  setTimeout(() => {
    addChat(product);
  }, 16000
  )
}

function addChat(product) {
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
  }, 7000
  )

}