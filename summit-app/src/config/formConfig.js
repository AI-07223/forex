// Form Configuration
// To enable form submissions, get a free access key from https://web3forms.com/
// Then replace the placeholder below with your actual key

export const FORM_CONFIG = {
    // Web3Forms Access Key - Get yours free at https://web3forms.com/
    // 1. Go to https://web3forms.com/
    // 2. Enter your email address
    // 3. You'll receive the access key in your email
    // 4. Replace the placeholder below with your key
    WEB3FORMS_ACCESS_KEY: 'YOUR_ACCESS_KEY_HERE',

    // Email address where form submissions will be sent
    // This should match the email you used to get the access key
    CONTACT_EMAIL: 'elitetraderssummit@gmail.com',

    // Enable/disable the form backend
    // Set to false to use email client fallback
    USE_BACKEND: false,

    // Form submission endpoint
    API_ENDPOINT: 'https://api.web3forms.com/submit'
};

// Helper function to check if backend is properly configured
export const isBackendConfigured = () => {
    return FORM_CONFIG.USE_BACKEND &&
        FORM_CONFIG.WEB3FORMS_ACCESS_KEY !== 'YOUR_ACCESS_KEY_HERE' &&
        FORM_CONFIG.WEB3FORMS_ACCESS_KEY.length > 0;
};
