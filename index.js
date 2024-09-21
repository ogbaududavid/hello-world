
function showGreeting() {
    const name = document.getElementById('name')
    const greeting = document.getElementById('greetingText')

    greeting.innerHTML = `Hello ${name.value}! I am happy to e-meet you.`
    document.getElementById('prompt').remove()
}
