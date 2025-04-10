document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (window.location.pathname.includes('place_detail.html')) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('https://your-api-url/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                if (response.ok) {
                    const data = await response.json();
                    document.cookie = `token=${data.access_token}; path=/`;

                    window.location.href = 'index.html';
                } else {
                    alert('Échec de la connexion : ' + response.statusText);
                }
            } catch (error) {
                console.error('Erreur réseau:', error);
                alert('Une erreur est survenue, veuillez réessayer.');
            }
        });
    }
});
