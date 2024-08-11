const emailList = document.getElementById('emailList');

const emails = [
    { sender: 'Ishfaq', subject: 'Meeting Reminder', preview: 'Don\'t forget about the meeting tomorrow at 10 AM.' },
    { sender: 'PW skills', subject: 'Project Update', preview: 'I\'ve attached the latest project files for your review.' },
    { sender: 'Rabia', subject: 'Waiting For You', preview: 'come soon.' },
    { sender: 'Aman', subject: 'New Connection Request', preview: 'You have a new connection request from Mark.' },
];

function loadEmails() {
    emails.forEach(email => {
        const emailItem = document.createElement('div');
        emailItem.className = 'email-item';

        const emailSender = document.createElement('h3');
        emailSender.textContent = email.sender;

        const emailSubject = document.createElement('p');
        emailSubject.textContent = email.subject;

        const emailPreview = document.createElement('p');
        emailPreview.textContent = email.preview;

        emailItem.appendChild(emailSender);
        emailItem.appendChild(emailSubject);
        emailItem.appendChild(emailPreview);

        emailList.appendChild(emailItem);
    });
}

document.getElementById('composeButton').addEventListener('click', () => {
    alert('Compose new email clicked!');
});

window.onload = loadEmails;
