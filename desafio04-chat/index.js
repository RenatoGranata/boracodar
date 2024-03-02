// const el = document.querySelector('.chatContainer');

// var height = el.scrollHeight;
// el.scrollTop = height;


function sendMessage() {
    
    const messageChat = document.querySelector('.messageChat').value;
    const chat = document.querySelector('.chatContainer');

    var time = new Date();
    
    const message = `
    <div class="messageContainer me">
        <p class="messageTime">
            você - ${time.getHours()+":"+time.getMinutes()}
        </p>
        <p class="messageText">
            ${messageChat}
        </p>
    </div>
    `;
    chat.innerHTML += message;
    // chat.appendChild(messageChat);
    

    const el = document.querySelector('.chatContainer');

    var height = el.scrollHeight;
    el.scrollTop = height;
    document.querySelector('.messageChat').value = "";
}

function sendMessagByEnter(e){
    if(e.keyCode === 13){
        e.preventDefault();
        const messageChat = document.querySelector('.messageChat').value;
        const chat = document.querySelector('.chatContainer');

        var time = new Date();
        
        const message = `
        <div class="messageContainer me">
            <p class="messageTime">
                você - ${time.getHours()+":"+time.getMinutes()}
            </p>
            <p class="messageText">
                ${messageChat}
            </p>
        </div>
        `;
        chat.innerHTML += message;
        // chat.appendChild(messageChat);
        

        const el = document.querySelector('.chatContainer');

        var height = el.scrollHeight;
        el.scrollTop = height;

        document.querySelector('.messageChat').value = "";
    }
}

