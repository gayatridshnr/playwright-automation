import * as crypto from 'crypto';

function encryptPassword(password:string) {
  // Generate a random salt (16 bytes)
  const salt:string = crypto.randomBytes(16).toString('hex');
console.log('Salt:', salt);
  // Use scrypt for password hashing (recommended)
  const hash :string= crypto.scryptSync(password, salt, 64).toString('hex');
console.log('Hash:', hash);
  // Return both salt and hash for storage
  return { salt, hash };
}

function verifyPassword(password:string, salt:string, hash:string):boolean {
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
  return hashedPassword === hash;
}
const password = 'mySecurePassword';