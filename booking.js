document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const bookingMessage = document.getElementById('bookingMessage');
    
    if (bookingForm) {
        // Initialize form validation and submission
        initBookingForm();
    }
    
    function initBookingForm() {
        // Form validation and submission
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm()) {
                // Show loading state
                const submitButton = bookingForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.textContent;
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                
                // Collect form data
                const formData = new FormData(bookingForm);
                const bookingData = {};
                
                for (const [key, value] of formData.entries()) {
                    bookingData[key] = value;
                }
                
                // Simulate API call to store data in database
                setTimeout(() => {
                    // In a real implementation, this would be an actual API call
                    storeBookingData(bookingData)
                        .then(response => {
                            // Show success message
                            bookingMessage.classList.add('success-message');
                            bookingMessage.textContent = 'Your booking request has been submitted successfully! We will contact you shortly to confirm your appointment.';
                            
                            // Reset form
                            bookingForm.reset();
                            
                            // Scroll to message
                            bookingMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        })
                        .catch(error => {
                            // Show error message
                            bookingMessage.classList.add('error-message');
                            bookingMessage.textContent = 'There was an error submitting your booking request. Please try again or contact us directly.';
                            
                            console.error('Booking submission error:', error);
                        })
                        .finally(() => {
                            // Reset button state
                            submitButton.disabled = false;
                            submitButton.textContent = originalButtonText;
                        });
                }, 1500); // Simulate network delay
            }
        });
    }
    
    function validateForm() {
        // Reset previous error messages
        const errorElements = bookingForm.querySelectorAll('.error-message');
        errorElements.forEach(el => el.remove());
        
        let isValid = true;
        
        // Required fields validation
        const requiredFields = bookingForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showError(field, 'This field is required');
                isValid = false;
            }
        });
        
        // Email validation
        const emailField = document.getElementById('email');
        if (emailField && emailField.value && !isValidEmail(emailField.value)) {
            showError(emailField, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Phone validation
        const phoneField = document.getElementById('phone');
        if (phoneField && phoneField.value && !isValidPhone(phoneField.value)) {
            showError(phoneField, 'Please enter a valid phone number');
            isValid = false;
        }
        
        // ZIP code validation
        const zipField = document.getElementById('zipCode');
        if (zipField && zipField.value && !isValidZip(zipField.value)) {
            showError(zipField, 'Please enter a valid ZIP code');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(field, message) {
        // Remove any existing error message
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create and append error message
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        field.parentElement.appendChild(errorElement);
        
        // Highlight the field
        field.classList.add('error');
        
        // Remove error highlight when field is changed
        field.addEventListener('input', function() {
            field.classList.remove('error');
            const error = field.parentElement.querySelector('.error-message');
            if (error) {
                error.remove();
            }
        }, { once: true });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        // Basic US phone validation (accepts various formats)
        const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return phoneRegex.test(phone);
    }
    
    function isValidZip(zip) {
        // US ZIP code validation (5 digits or 5+4)
        const zipRegex = /^\d{5}(-\d{4})?$/;
        return zipRegex.test(zip);
    }
    
    // Store booking data in the database
    async function storeBookingData(data) {
        try {
            // Make sure the database is initialized
            if (!window.bookingDB) {
                throw new Error('Database not initialized');
            }
            
            // Store the booking data
            const bookingId = await window.bookingDB.storeBooking(data);
            console.log('Booking stored with ID:', bookingId);
            
            return {
                success: true,
                message: 'Booking stored successfully',
                bookingId
            };
        } catch (error) {
            console.error('Error storing booking data:', error);
            throw error;
        }
    }
    
    // Add styles for form validation
    const addValidationStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .error-message {
                color: var(--error-color);
                font-size: 0.85rem;
                margin-top: 5px;
            }
            
            .success-message {
                color: var(--success-color);
                background-color: rgba(40, 167, 69, 0.1);
                border: 1px solid var(--success-color);
                padding: 15px;
                border-radius: 4px;
                margin-bottom: 20px;
                text-align: center;
            }
            
            .error-message {
                color: var(--error-color);
                background-color: rgba(220, 53, 69, 0.1);
                border: 1px solid var(--error-color);
                padding: 15px;
                border-radius: 4px;
                margin-bottom: 20px;
                text-align: center;
            }
            
            .form-control.error {
                border-color: var(--error-color);
            }
            
            .booking-message {
                margin: 20px 0;
            }
        `;
        document.head.appendChild(style);
    };
    
    addValidationStyles();
});