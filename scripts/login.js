document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
   
       const email = document.getElementById('email').value;
       const password = document.getElementById('password').value;       
       const errorMessage = document.getElementById('error-message');
          
       errorMessage.textContent = '';
   
       if (!email || !password) {
        errorMessage.textContent = 'Email and password are required.';
           return;       
        }
   
       try {
          
        const response = await fetch('https://sex-education-pink.vercel.app/login', {
            method: 'POST',
               headers: {
                'Content-Type': 'application/json'
                },
               body: JSON.stringify({ email, password })       
            });
          
           const result = await response.json();
   
           if (!response.ok) {
            errorMessage.textContent = result.message;
               return;
            }
           localStorage.setItem('userId', result.userId);
           localStorage.setItem('userName', result.name);
           window.location.href = 'dashboard.html';
        } catch (error) {
        errorMessage.textContent = 'An error occurred. Please try again later.';
           console.error('Login error:', error);       
        }  
    });