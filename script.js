// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Event Handling Section
    const clickButton = document.getElementById('clickButton');
    const hoverDiv = document.getElementById('hoverDiv');
    const keypressInput = document.getElementById('keypressInput');
    const secretDiv = document.getElementById('secretDiv');

    // Button click event
    clickButton.addEventListener('click', () => {
        alert('Button clicked! 🎉');
    });

    // Hover effect
    hoverDiv.addEventListener('mouseenter', () => {
        hoverDiv.textContent = 'Hovering! 🚀';
    });

    hoverDiv.addEventListener('mouseleave', () => {
        hoverDiv.textContent = 'Hover over me!';
    });

    // Keypress detection
    keypressInput.addEventListener('keypress', (e) => {
        console.log(`Key pressed: ${e.key}`);
    });

    // Double click secret
    let clickCount = 0;
    secretDiv.addEventListener('dblclick', () => {
        secretDiv.textContent = '🎉 Surprise! You found the secret! 🎉';
        secretDiv.style.backgroundColor = '#9b59b6';
    });

    // Interactive Elements Section
    const colorButton = document.getElementById('colorButton');
    const colorBox = document.getElementById('colorBox');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Color changer
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
    let colorIndex = 0;

    colorButton.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        colorBox.style.backgroundColor = colors[colorIndex];
    });

    // Image gallery
    let currentImageIndex = 0;

    function showImage(index) {
        galleryImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
    });

    // Initialize gallery
    showImage(0);

    // Tabs functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form Validation Section
    const form = document.getElementById('validationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateName() {
        const errorMessage = nameInput.nextElementSibling;
        if (nameInput.value.trim() === '') {
            showError(nameInput, errorMessage, 'Name is required');
            return false;
        }
        hideError(nameInput, errorMessage);
        return true;
    }

    function validateEmail() {
        const errorMessage = emailInput.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailInput.value && !emailRegex.test(emailInput.value)) {
            showError(emailInput, errorMessage, 'Please enter a valid email address');
            return false;
        }
        hideError(emailInput, errorMessage);
        return true;
    }

    function validatePassword() {
        const errorMessage = passwordInput.nextElementSibling;
        if (passwordInput.value && passwordInput.value.length < 8) {
            showError(passwordInput, errorMessage, 'Password must be at least 8 characters long');
            return false;
        }
        hideError(passwordInput, errorMessage);
        return true;
    }

    function showError(input, errorMessage, message) {
        input.classList.add('shake');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            input.classList.remove('shake');
        }, 500);
    }

    function hideError(input, errorMessage) {
        input.classList.remove('shake');
        errorMessage.style.display = 'none';
    }

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isNameValid && isEmailValid && isPasswordValid) {
            alert('Form submitted successfully! 🎉');
            form.reset();
        }
    });
}); 