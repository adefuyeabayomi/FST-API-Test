<template>
    <div class="customer-support-test">
      <h3 class="text-bold">Customer Support API Test Page</h3>
      <div class="container-fluid">
        <div class="row">
            <div class="col-6 p-2">
                <!-- Post Customer Message -->
                <div>
                    <div class="border my-2 p-2">
                    <p><strong>Endpoint: /messages</strong></p>
                    <p><strong>Method:</strong> POST</p>
                    <p><strong>Description:</strong> Post a new customer message</p>
                    <p><strong>Request Body:</strong></p>
                    <pre>{ "email": "customer@example.com", "message": "I need help." }</pre>
                    <p><strong>Responses:</strong></p>
                    <ul>
                        <li>201: Message received successfully</li>
                        <li>400: Invalid input</li>
                        <li>500: Server error</li>
                    </ul>
                    <div class="form-group border p-2">
                        <p>Input Form</p>
                        <Input v-model="postMessage.email" placeholder="Enter Email" />
                        <p></p>
                        <Input v-model="postMessage.message" placeholder="Enter Message" />
                        <p></p>
                        <Button @click="testPostCustomerMessage" buttonVal="Test Post Customer Message" />
                    </div>
                    </div>
                </div>
        
                <!-- Get Customer Messages -->
                <div>
                    <div class="border my-2 p-2">
                    <p><strong>Endpoint: /messages</strong></p>
                    <p><strong>Method:</strong> GET</p>
                    <p><strong>Description:</strong> Get customer messages</p>
                    <p><strong>Request Params:</strong> replied, startDate, endDate</p>
                    <p><strong>Responses:</strong></p>
                    <ul>
                        <li>200: Messages retrieved successfully</li>
                        <li>400: Invalid query parameters</li>
                        <li>500: Server error</li>
                    </ul>
                    <div class="form-group border p-2">
                        <p>Filter Form</p>
                        <Input v-model="getMessages.replied" placeholder="Replied (true/false)" />
                        <p></p>
                        <Input v-model="getMessages.startDate" placeholder="Start Date (YYYY-MM-DD)" />
                        <p></p>
                        <Input v-model="getMessages.endDate" placeholder="End Date (YYYY-MM-DD)" />
                        <p></p>
                        <Button @click="testGetCustomerMessages" buttonVal="Test Get Customer Messages" />
                    </div>
                    </div>
                </div>
        
                <!-- Reply to Customer Message -->
                <div>
                    <div class="border my-2 p-2">
                    <p><strong>Endpoint: /messages/{messageId}/reply</strong></p>
                    <p><strong>Method:</strong> POST</p>
                    <p><strong>Description:</strong> Reply to a customer message</p>
                    <p><strong>Request Body:</strong></p>
                    <pre>{ "replyMessage": "Your issue has been addressed." }</pre>
                    <p><strong>Responses:</strong></p>
                    <ul>
                        <li>200: Reply sent successfully</li>
                        <li>404: Message not found</li>
                        <li>500: Server error</li>
                    </ul>
                    <div class="form-group border p-2">
                        <p>Reply Form</p>
                        <Input v-model="replyMessage.messageId" placeholder="Message ID" />
                        <p></p>
                        <Input v-model="replyMessage.replyMessage" placeholder="Reply Message" />
                        <p></p>
                        <Input v-model="token" placeholder="Enter Token" />
                        <p></p>
                        <Button @click="testReplyToCustomerMessage" buttonVal="Test Reply to Customer Message" />
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-6 p-2 position-relative">
                <div class="border p-2 position-fixed col-5 scroll-y responseHeight">
                    <h3 class="text-bold">Response Tab</h3>
                    <pre>{{ response }}</pre>
                </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import customerSupportService from '../fst-services/customerService';
  
  export default defineComponent({
    data() {
      return {
        postMessage: {
          email: '',
          message: ''
        },
        getMessages: {
          replied: '',
          startDate: '',
          endDate: ''
        },
        replyMessage: {
          messageId: '',
          replyMessage: '',
        },
        response: '',
        token: ''
      };
    },
    methods: {
      async testPostCustomerMessage() {
        try {
          const result = await customerSupportService.postCustomerMessage(this.postMessage.email, this.postMessage.message);
          this.response = JSON.stringify(result, null, 2);
        } catch (error:any) {
          this.response = `Error: ${error.message}`;
        }
      },
      async testGetCustomerMessages() {
        try {
          const result = await customerSupportService.getCustomerMessages({
            replied: !!this.getMessages.replied,
            startDate: this.getMessages.startDate,
            endDate: this.getMessages.endDate
          });
          this.response = JSON.stringify(result, null, 2);
        } catch (error:any) {
          this.response = `Error: ${error.message}`;
        }
      },
      async testReplyToCustomerMessage() {
        try {
          const result = await customerSupportService.replyToCustomerMessage(this.replyMessage.messageId, this.replyMessage.replyMessage,this.token);
          this.response = JSON.stringify(result, null, 2);
        } catch (error:any) {
          this.response = `Error: ${error.message}`;
        }
      }
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  