// =========================
// GET HTML ELEMENTS
// =========================

const input = document.getElementById("userInput");

const button = document.getElementById("sendButton");

const chat = document.getElementById("chat");


// =========================
// SEND BUTTON
// =========================

button.addEventListener("click", sendMessage);


// =========================
// ENTER KEY
// =========================

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});


// =========================
// MAIN CHAT FUNCTION
// =========================

function sendMessage() {

    // Get what the user typed
    const message = input.value.trim();


    // Don't send an empty message
    if (message === "") {

        return;

    }


    // Show user's message
    addMessage(message, "user");


    // Clear input box
    input.value = "";


    // Get CatBot's response
    const response = getCatResponse(message);


    // Show CatBot's cat language
    addMessage(response.cat, "bot");


    // Show translation
    addTranslation(response.translation);


    // Speak ONLY the cat language
    speak(response.cat);

}


// =========================
// CATBOT RESPONSE SYSTEM
// =========================

function getCatResponse(message) {

    // Convert message to lowercase
    const text = message.toLowerCase();


    // Hello
    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return {

            cat: "MRAOW! HSSSS! MRRROW! 😾",

            translation: "Hello! What do you want?!"

        };

    }


    // How are you?
    if (
        text.includes("how are you") ||
        text.includes("how r u")
    ) {

        return {

            cat: "MRRR... MRAOW! HSSSS! 😾",

            translation: "I'm fine! Stop asking me!"

        };

    }


    // Name
    if (
        text.includes("your name") ||
        text.includes("who are you")
    ) {

        return {

            cat: "MRAOW! MRRR! 😼",

            translation: "I'm CatBot. Obviously!"

        };

    }


    // Food
    if (
        text.includes("food") ||
        text.includes("hungry")
    ) {

        return {

            cat: "MRAAAAAOW! MRAOW! 😾🍗",

            translation: "Give me food! I'm hungry!"

        };

    }


    // Love
    if (
        text.includes("love")
    ) {

        return {

            cat: "Mrrr... HSSSS! 😾",

            translation: "Don't get sentimental with me!"

        };

    }


    // Sorry
    if (
        text.includes("sorry")
    ) {

        return {

            cat: "HMPH! MRAOW... 🙄",

            translation: "Fine. I forgive you... maybe."

        };

    }


    // Bye
    if (
        text.includes("bye") ||
        text.includes("goodbye")
    ) {

        return {

            cat: "MRAOW! HSSSS! BYE! 😾",

            translation: "Finally! Goodbye!"

        };

    }


    // Default response
    return {

        cat: "MRAOW? HSSSS! MRRROW! 😾",

        translation: "I don't understand you!"

    };

}


// =========================
// ADD MESSAGE TO CHAT
// =========================

function addMessage(message, sender) {

    const messageElement = document.createElement("div");


    // Put text inside the element
    messageElement.textContent = message;


    // Add CSS classes
    messageElement.classList.add(
        "message",
        sender + "-message"
    );


    // Put message inside chat
    chat.appendChild(messageElement);


    // Scroll to bottom
    chat.scrollTop = chat.scrollHeight;

}


// =========================
// ADD TRANSLATION
// =========================

function addTranslation(text) {

    const translationElement =
        document.createElement("div");


    translationElement.textContent =
        "Translation: " + text;


    translationElement.classList.add(
        "translation"
    );


    chat.appendChild(
        translationElement
    );


    chat.scrollTop =
        chat.scrollHeight;

}


// =========================
// CAT VOICE
// =========================

function speak(text) {

    // Create speech
    const speech =
        new SpeechSynthesisUtterance(text);


    // Voice settings
    speech.rate = 0.8;

    speech.pitch = 1.4;

    speech.volume = 1;


    // Speak it
    speechSynthesis.speak(speech);

}
function speakCat(text) {
    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.8;
    speech.pitch = 1.4;
    speech.volume = 1;

    speechSynthesis.speak(speech);
}
