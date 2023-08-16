const butInstall = document.getElementById('buttonInstall');

// This event will be triggered before the app is installed.
window.addEventListener('beforeinstallprompt', (event) => {

    // Saves the event.
    window.defferedPrompt = event;

    // Shows the install button.
    butInstall.classList.toggle('hidden', false);

});

// This event will be triggered when the user clicks the install button.
butInstall.addEventListener('click', async () => {

    // Retrieves the deferred event.
    const promptEvent = window.defferedPrompt;

    // If there is no deferred event, exits the function.
    if (!promptEvent) {

        return;

    }

    // Prompts the user to install the app.
    promptEvent.prompt();

    // Clears the deffered event after prompting the user.
    window.defferedPrompt = null;

    // Hides the install button after the app has been successfully installed.
    butInstall.classList.toggle('hidden', true);

});

// This event will be triggered after the app has been successfully installed.
window.addEventListener('appinstalled', (event) => {

    // Clears the saved event since the app has been installed.
    window.defferedPrompt = null;

});