const users = {
    'admin': { password: 'admin123', role: 'manager' },
    'user1': { password: 'user123', role: 'employee' }
};

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const user = users[username];
    if (user && user.password === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'اسم المستخدم أو كلمة المرور خطأ';
    }
});