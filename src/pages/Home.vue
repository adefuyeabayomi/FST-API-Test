<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      message: 'Welcome to the Vue.js App!'
    };
  },
  methods: {
    goToPingApi() {
      this.$router.push('/ping-api');
    },
    goToAuthApi(){
      this.$router.push('/auth-api')
    },
    goToProfileApi () {
      this.$router.push('/profile-api')
    },
    goToCustomerSupportApi(){
      this.$router.push( '/customer-support-api')
    },
    goToDeliveryOrderApi(){
      this.$router.push('/delivery-order-api')
    }
  }
});
</script>

<template>
  <div class="p-3">
    <div class="py-2"></div>
    <h1 class="gradient-text-main">
      {{ message }} - FST API Service Library Quality Assurance Test.
    </h1>

    <div class="py-2"></div>
    <div class="border p-3">
      <VaAccordion>
        <VaCollapse
        :header="'Ping Requests - (Base)'"
        >
          <template #body>
            <div>
              <ul>
                <li>
                  <strong>/</strong>
                  <p>GET: Performs a ping request. Returns pong.</p>
                </li>
                <li>
                  <strong>/status</strong>
                  <p>GET: Get server status. Returns server status.</p>
                </li>
                <li>
                  <strong>/request-logs</strong>
                  <p>GET: Get request logs. Returns request logs. Error reading request logs (500).</p>
                </li>
                <li>
                  <strong>/app-logs</strong>
                  <p>GET: Get application logs. Returns application logs. Error reading application logs (500).</p>
                </li>
                <li>
                  <strong>/clear-request-logs</strong>
                  <p>GET: Clear request logs. Request logs cleared. Error clearing request logs (500).</p>
                </li>
                <li>
                  <strong>/clear-app-logs</strong>
                  <p>GET: Clear application logs. Application logs cleared. Error clearing application logs (500).</p>
                </li>
              </ul>
              <Button @click="goToPingApi" buttonVal="Go to Ping API Section" ></Button></div>
          </template>
        </VaCollapse>
      </VaAccordion>
    </div>
    <div class="border p-3">
      <VaAccordion>
        <VaCollapse
        :header="'Authentication API - (Base)'"
        >
          <template #body>
            <div>
              <ul>
                <li>
                  <strong>/auth/signup/emailandpassword</strong>
                  <p>POST: Signup a new user with email and password. Returns a token on success. Errors include invalid input (400) and email already registered (409).</p>
                </li>
                <li>
                  <strong>/auth/login</strong>
                  <p>POST: Login a user with email and password. Returns a token on success. Errors include invalid input (400) and unauthorized (401).</p>
                </li>
                <li>
                  <strong>/auth/forgot-password</strong>
                  <p>POST: Request a password reset link for the user. Returns a success message on success. Errors include invalid input (400) and email not found (404).</p>
                </li>
                <li>
                  <strong>/auth/reset-password</strong>
                  <p>POST: Reset the password using a reset token. Requires resetToken as a query parameter and newPassword in the body. Returns success on reset or errors for invalid token (401) or invalid input (400).</p>
                </li>
                <li>
                  <strong>/auth/update</strong>
                  <p>PUT: Update email, password, and recovery email for the user. Requires a valid token for authorization. Returns success on update or errors for invalid input (400) and unauthorized (401).</p>
                </li>
                <li>
                  <strong>/auth/disable</strong>
                  <p>PUT: Disable a user account. Requires a valid token for authorization. Returns success on disable or unauthorized error (401).</p>
                </li>
                <li>
                  <strong>/auth/delete</strong>
                  <p>DELETE: Delete a user account. Requires a valid token for authorization. Returns success on delete or unauthorized error (401).</p>
                </li>
                <li>
                  <strong>/auth/is-valid</strong>
                  <p>GET: Check if the provided token is valid. Requires the token as a query parameter. Returns validation status or errors for missing token (401), invalid token (403), or user not found (404).</p>
                </li>
              </ul>
              <Button @click="goToAuthApi" buttonVal="Go to Authentication API Section"></Button>
            </div>
          </template>
        </VaCollapse>
      </VaAccordion>
    </div>
    <div class="border p-3">
      <VaAccordion>
        <VaCollapse
        :header="'Profile API - (Base)'"
        >
          <template #body>
            <div>
                <ul>
                  <li>
                    <strong>/profile</strong>
                    <p>
                      <strong>POST:</strong> Create a new profile. Requires profile data in the request body and a valid token for authorization. Returns success message and profile data on success, or errors for bad request (400) and server error (500).
                    </p>
                  </li>
                  <li>
                    <strong>/profile</strong>
                    <p>
                      <strong>GET:</strong> Get profiles with pagination. Requires a valid token for authorization. Query parameters include page number for pagination. Returns a list of profiles along with pagination details on success, or errors for server issues (500).
                    </p>
                  </li>
                  <li>
                    <strong>/profile/search</strong>
                    <p>
                      <strong>GET:</strong> Search profiles based on query parameters like username and email. Requires a valid token for authorization. Returns a list of matching profiles on success, or errors for server issues (500).
                    </p>
                  </li>
                  <li>
                    <strong>/profile/{userId}</strong>
                    <p>
                      <strong>GET:</strong> Get profile by user ID. Requires a valid token for authorization and userId as a path parameter. Returns the profile data on success, or errors for profile not found (404) and server issues (500).
                    </p>
                  </li>
                  <li>
                    <strong>/profile/{userId}</strong>
                    <p>
                      <strong>PUT:</strong> Update profile by user ID. Requires a valid token for authorization, userId as a path parameter, and profile update data in the request body. Returns success message on update or errors for bad request (400), profile not found (404), and server issues (500).
                    </p>
                  </li>
                  <li>
                    <strong>/profile/{userId}</strong>
                    <p>
                      <strong>DELETE:</strong> Delete profile by user ID. Requires a valid token for authorization and userId as a path parameter. Returns success message on deletion or errors for profile not found (404) and server issues (500).
                    </p>
                  </li>
                  <li>
                    <strong>/profile/{userId}/upload</strong>
                    <p>
                      <strong>POST:</strong> Upload profile image. Requires a valid token for authorization, userId as a path parameter, and the image file in the request body. Returns the URLs of the uploaded images on success or errors for bad request (400) and server issues (500).
                    </p>
                  </li>
                </ul>
                <Button @click="goToProfileApi" buttonVal="Go to Profile API Section"></Button>
            </div>
          </template>
        </VaCollapse>
      </VaAccordion>
    </div>
    <div class="border p-3">
      <VaAccordion>
        <VaCollapse
        :header="'Customer Support API - (Base)'"
        >
          <template #body>
            <div>
              <ul>
                <li>
                  <strong>/messages</strong>
                  <p>POST: Submit a new customer message. Requires <code>email</code> and <code>message</code> in the request body. Returns success on receipt or error for invalid email format (400) and server issues (500).</p>
                </li>
                <li>
                  <strong>/messages</strong>
                  <p>GET: Retrieve customer messages. Supports query parameters <code>replied</code>, <code>startDate</code>, and <code>endDate</code> for filtering. Returns a list of messages or error for invalid date format (400) and server issues (500).</p>
                </li>
                <li>
                  <strong>/messages/:messageId/reply</strong>
                  <p>POST: Reply to a specific customer message. Requires <code>messageId</code> as a URL parameter and <code>replyMessage</code> in the request body. Returns success on reply or error for message not found (404) and server issues (500).</p>
                </li>
              </ul>
              <Button @click="goToCustomerSupportApi"  buttonVal="Go to Customer Support API Section" />
            </div>
          </template>
        </VaCollapse>
      </VaAccordion>
    </div>
    <div class="border p-3">
    <VaAccordion>
      <VaCollapse :header="'Delivery Order APIs - ( Sela Connect )'">
        <template #body>
          <div>
            <ul>
              <li>
                <strong>/delivery-orders</strong>
                <p>POST: Create a new delivery order. Requires <code>packageDescription</code>, <code>perishables</code>, <code>fragile</code>, <code>pickupIsResidential</code>, <code>dropoffIsResidential</code>, <code>senderName</code>, <code>senderPhoneNo</code>, <code>receiverName</code>, <code>receiverPhoneNo</code>, <code>pickupAddress</code>, <code>dropoffAddress</code>, <code>pickupLga</code>, <code>dropoffLga</code>, <code>paymentMethod</code>, <code>totalDistance</code>, and <code>deliveryId</code> in the request body. Returns success on creation or error for invalid input (400) and server issues (500).</p>
              </li>
              <li>
                <strong>/delivery-orders</strong>
                <p>GET: Retrieve delivery orders with pagination. Supports query parameters <code>page</code> and <code>limit</code> for pagination. Returns a list of delivery orders or error for server issues (500).</p>
              </li>
              <li>
                <strong>/delivery-orders/:id</strong>
                <p>GET: Retrieve a specific delivery order by its <code>id</code>. Returns the delivery order or error for order not found (404) and server issues (500).</p>
              </li>
              <li>
                <strong>/delivery-orders/:id</strong>
                <p>PUT: Update a specific delivery order by its <code>id</code>. Requires <code>id</code> as a URL parameter and fields to be updated in the request body. Returns success on update or error for invalid input (400), order not found (404), and server issues (500).</p>
              </li>
            </ul>
            <Button @click="goToDeliveryOrderApi" buttonVal="Go to Delivery Order API Section" />
          </div>
        </template>
      </VaCollapse>
    </VaAccordion>
  </div>
    <div class="border p-3">
      <VaAccordion>
        <VaCollapse
        :header="'Misc API'"
        >
          <template #body>
            <div>
              body content
            </div>
          </template>
        </VaCollapse>
      </VaAccordion>
    </div>

  </div>
</template>

<style >

</style>
