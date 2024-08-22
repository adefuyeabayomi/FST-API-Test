<template>
    <h3 class="text-bold">Authentication API Test Page</h3>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 p-2">
            <div class="border p-2">
                <div class="border my-2 p-2" id="authReq01">
                <p><strong>Endpoint: /auth/signup/emailandpassword</strong></p>
                <p><strong>Method:</strong> POST</p>
                <p><strong>Description:</strong> Signup a new user with email and password</p>
                <p><strong>Request Body:</strong></p>
                <pre>{ "email": "user@example.com", "password": "yourpassword", "role": "user" }</pre>
                <p><strong>Responses:</strong></p>
                <ul>
                    <li>201: User created successfully, returns a token</li>
                    <li>400: Invalid input</li>
                    <li>409: Email already registered</li>
                </ul>
                <div class="loginform border r-1 p-2">
                    <p>Input Form</p>
                    <Input v-model="signupForm.email" placeholder="Enter Email Here" />
                    <p></p>
                    <Input v-model="signupForm.password" placeholder="Enter Password" />
                    <p></p>
                    <Input v-model="signupForm.role" placeholder="Enter role" />
                </div>
                <Button @click="testSignup" buttonVal="Test Signup" />
                </div>
        
                <div class="border my-2 p-2" id="authReq02">
                <p><strong>Endpoint: /auth/login</strong></p>
                <p><strong>Method:</strong> POST</p>
                <p><strong>Description:</strong> Login a user with email and password</p>
                <p><strong>Request Body:</strong></p>
                <pre>{ "email": "user@example.com", "password": "yourpassword", "role": "user" }</pre>
                <p><strong>Responses:</strong></p>
                <ul>
                    <li>200: Login successful, returns a token</li>
                    <li>400: Invalid input</li>
                    <li>401: Unauthorized</li>
                </ul>
                
                <div class="loginform border r-1 p-2">
                    <p>Input Form</p>
                    <Input v-model="loginForm.email" placeholder="Enter Email Here" />
                    <p></p>
                    <Input v-model="loginForm.password" placeholder="Enter Password" />
                    <p></p>
                    <Input v-model="loginForm.role" placeholder="Enter role" />
                </div>
                <Button @click="testLogin" buttonVal="Test Login" />
                </div>
        
                <div class="border my-2 p-2" id="authReq03">
                <p><strong>Endpoint: /auth/forgot-password</strong></p>
                <p><strong>Method:</strong> POST</p>
                <p><strong>Description:</strong> Request a password reset link</p>
                <p><strong>Request Body:</strong></p>
                <pre>{ "email": "user@example.com" }</pre>
                <p><strong>Responses:</strong></p>
                <ul>
                    <li>200: Reset link sent</li>
                    <li>400: Invalid input</li>
                    <li>404: Email not found</li>
                </ul>
                <div class="loginform border r-1 p-2">
                    <p>Input Form</p>
                    <Input v-model="resetEmail" placeholder="Enter Email Here" />
                </div>
                <Button @click="testForgotPassword" buttonVal="Forgot Password" />
                </div>
        
                <div class="border my-2 p-2" id="authReq04">
                <p><strong>Endpoint: /auth/reset-password</strong></p>
                <p><strong>Method:</strong> POST</p>
                <p><strong>Description:</strong> Reset the password using a reset token</p>
                <p><strong>Query Parameter:</strong> resetToken (required)</p>
                <p><strong>Request Body:</strong></p>
                <pre>{ "newPassword": "newpassword" }</pre>
                <p><strong>Responses:</strong></p>
                <ul>
                    <li>200: Password reset successful</li>
                    <li>400: Invalid input</li>
                    <li>401: Invalid or expired reset token</li>
                </ul>
                <div class="loginform border r-1 p-2">
                    <p>Input Form</p>
                    <Input v-model="passwordReset.password" placeholder="Enter New Password" />
                    <p></p>
                    <Input v-model="passwordReset.resetToken" placeholder="Enter Reset Token" />
                </div>
                <Button @click="testResetPassword" buttonVal="Test Reset Password" />
                </div>
        
                <div class="border my-2 p-2" id="authReq05">
                <p><strong>Endpoint: /auth/update</strong></p>
                <p><strong>Method:</strong> PUT</p>
                <p><strong>Description:</strong> Update email, password, and recovery email</p>
                <p><strong>Request Body:</strong></p>
                <pre>{ "email": "newemail@example.com", "password": "newpassword", "recoveryEmail": "recovery@example.com" }</pre>
                <p><strong>Responses:</strong></p>
                <ul>
                    <li>200: User details updated</li>
                    <li>400: Invalid input</li>
                    <li>401: Unauthorized</li>
                </ul>
                
                <div class="loginform border r-1 p-2">
                    <p>Input Form</p>
                    <Input v-model="updateForm.token" placeholder="Add Token" />
                    <p></p>
                    <Input v-model="updateForm.email" placeholder="Update Email" />
                    <p></p>
                    <Input v-model="updateForm.password" placeholder="Update Password" />
                    <p></p>
                    <Input v-model="updateForm.recoveryEmail" placeholder="Update recovery email" />
                </div>
                <Button @click="testUpdateUserDetails" buttonVal="Test Update Details" />
                </div>
        
                <div class="border my-2 p-2" id="authReq06">
                <p><strong>Endpoint: /auth/disable</strong></p>
                <p><strong>Method:</strong> PUT</p>
                <p><strong>Description:</strong> Disable a user account</p>
                <p><strong>Responses:</strong></p>
                <ul>
                    <li>200: Account disabled</li>
                    <li>401: Unauthorized</li>
                </ul>

                <div class="loginform border r-1 p-2">
                    <p>Input Form</p>
                    <Input v-model="disableEmail" placeholder="Disable Email" />
                    <p></p>
                    <Input v-model="disableToken" placeholder="Add Token" />
                </div>
                <Button @click="testDisableAccount" buttonVal="Disable Account" />
                </div>
        
                <div class="border my-2 p-2" id="authReq07">
                <p><strong>Endpoint: /auth/delete</strong></p>
                <p><strong>Method:</strong> DELETE</p>
                <p><strong>Description:</strong> Delete a user account</p>
                <p><strong>Responses:</strong></p>
                <ul>
                    <li>200: Account deleted</li>
                    <li>401: Unauthorized</li>
                </ul>
                <div class="loginform border r-1 p-2">
                    <p>Input Form</p>
                    <Input v-model="deleteEmail" placeholder="Add Email" />
                    <p></p>
                    <Input v-model="deleteToken" placeholder="Add Token" />
                </div>
                <Button @click="testDeleteAccount" buttonVal="Delete Account" />
                </div>
        
                <div class="border my-2 p-2" id="authReq08">
                <p><strong>Endpoint: /auth/is-valid</strong></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> Check if the provided token is valid</p>
                <p><strong>Query Parameter:</strong> Authorization (required)</p>
                <p><strong>Responses:</strong></p>
                <ul>
                    <li>200: Token verification status</li>
                    <li>401: Token is missing</li>
                    <li>403: Token is not valid</li>
                    <li>404: User not found</li>
                    <li>500: Internal Server Error</li>
                </ul>
                
                <div class="loginform border r-1 p-2">
                    <p>Input Form</p>
                    <Input v-model="validCheckToken" placeholder="Add Token" />
                    <p></p>
                </div>
                <Button @click="testIsValid" buttonVal="Check Token Validity" />
                </div>
            </div>
            </div>
            <div class="col-6 p-2 position-relative">
              <div class="border p-2 position-fixed col-5 scroll-y responseHeight">
                <h3 class="text-bold">Response Tab</h3>
                <p>{{ response }}</p>
              </div>
            </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import authService from '../fst-services/authService';
  
  export default defineComponent({
    data() {
    return {
      response: '',
      loginForm: {
        email: '',
        password: '',
        role: ''
      },
      signupForm: {
        email: '',
        password: '',
        role: ''
      },
      passwordReset: {
        password: '',
        resetToken: ''
      },
      updateForm : { 
        email: "",
        password: "", 
        recoveryEmail: "",
        token: ''
    },
      resetEmail: '',
      disableEmail: '',
      deleteEmail: '',
      disableToken: '',
      deleteToken: '',
      validCheckToken: ''
    };
  },
    methods: {
    async testSignup() {
      try {
        const result = await authService.signupWithEmailAndPassword(this.signupForm.email, this.signupForm.password, this.signupForm.role);
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testLogin() {
      try {
        const result = await authService.login(this.loginForm.email,this.loginForm.password, this.loginForm.role);
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testForgotPassword() {
      try {
        const result = await authService.forgotPassword(this.resetEmail);
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testResetPassword() {
      try {
        const result = await authService.resetPassword(this.passwordReset.resetToken, this.passwordReset.password);
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testUpdateUserDetails() {
      try {
        const token = this.updateForm.token;  // Replace with actual token
        const result = await authService.updateUserDetails(token, {
          email: this.updateForm.email,
          password: this.updateForm.password,
          recoveryEmail: this.updateForm.recoveryEmail
        });
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testDisableAccount() {
      try {
        const result = await authService.disableAccount(this.disableToken,this.disableEmail);
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testDeleteAccount() {
      try {
        const result = await authService.deleteAccount(this.deleteToken, this.deleteEmail);
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        console.log({error})
        this.response = `Error: ${error.message}`;
      }
    },
    async testIsValid() {
      try {
        const result = await authService.isValid(this.validCheckToken);
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    }
  }
  });
  </script>
  