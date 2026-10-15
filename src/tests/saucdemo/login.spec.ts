import { expect, test } from '../../fixture/sauce-demo/testbase';
import {ErrorMessages} from '../../utils/Messages';

const username  = process.env.EncryptedUSERID?.toString();
  const password  = process.env.EncryptedPASSWORD?.toString();
  
test.describe('Login Tests', () => {

test('logs in successfully with the standard user', async ({ sauceDemoLoginPage }) => {
  if (!username || !password) {
   throw new Error('Missing EncryptedUSERID or EncryptedPASSWORD in environment variables.');
  }
  await sauceDemoLoginPage.goTo();
  await expect(sauceDemoLoginPage.userName).toBeVisible();
  await expect(sauceDemoLoginPage.passWord).toBeVisible();
  await expect(sauceDemoLoginPage.loginButton).toBeVisible();

  await sauceDemoLoginPage.login(username, password);

});

  test('shows an error for invalid credentials', async ({ sauceDemoLoginPage }) => {
    await sauceDemoLoginPage.goTo();
    await sauceDemoLoginPage.login('unknown_user', 'wrong_password');
    await sauceDemoLoginPage.assertErrorContains(ErrorMessages.INVALID_CREDENTIALS);
});


test('shows an error for locked out user', async ({ sauceDemoLoginPage }) => {
  await sauceDemoLoginPage.goTo();
    await sauceDemoLoginPage.login('locked_out_user',password);
    await sauceDemoLoginPage.assertErrorContains(ErrorMessages.LOCKED_OUT_USER);
    
});


});
