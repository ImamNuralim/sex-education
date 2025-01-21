const userId = localStorage.getItem('userId');
const userName = localStorage.getItem('userName');
if (!userId || !userName) {
    window.location.href = 'login.html'; 
} else {
    document.getElementById('username').textContent = userName;
     
     fetch(`https://sex-education-pink.vercel.app/users/${userId}/profile-picture`)
             .then((response) => {
                 if (!response.ok) {
                 throw new Error('Failed to fetch profile picture.');
               }
               return response.blob();
             })
             .then((blob) => {
               const imageUrl = URL.createObjectURL(blob);
               document.getElementById('profile-picture').src = imageUrl;
             })
             .catch((error) => {
               console.error('Error fetching profile picture:', error);
               document.getElementById('profile-picture').src = '../assets/images.png';
             });
         }


         document.getElementById("log_out").addEventListener("click", () => {
          localStorage.removeItem("userName", "userId");
          alert("Logout berhasil!");
          window.location.href = "login.html";
        });