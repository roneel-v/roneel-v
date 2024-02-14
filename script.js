document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission behavior

  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;

  // Hardcoded username and password for testing (replace with your own)
  var validUsername = "minion";
  var validPassword = "anusha";

  if (username === validUsername && password === validPassword) {
    // Show success modal
    showModal('Login successful!');
  } else {
    document.getElementById('login-message').textContent = 'Invalid username or password!';
  }
});

  
  function showModal(message) {
    var modal = document.getElementById('modal');
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.textContent = message;
    modal.appendChild(modalContent);
    modal.style.display = 'block';
  
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    setTimeout(function() {
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Dim out the screen gradually
      modalContent.style.opacity = '1';
      playVideo(); // Play the video
    }, 100); // Delay to allow transition effect
  }
  
  function playVideo() {
    var video = document.getElementById('myVideo');
    video.style.display = 'block';
    setTimeout(function() {
      video.style.opacity = '1'; // Fade in the video
    }, 100); // Delay to allow transition effect
    video.play();
  }
  
  
  
  