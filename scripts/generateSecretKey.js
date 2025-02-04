import crypto from 'crypto';

// Generate a secure HMAC key
const secretKey = crypto.createHmac('sha256', crypto.randomBytes(32)).digest('hex');

console.log('Your HMAC secret key:', secretKey);
