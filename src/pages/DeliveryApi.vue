<template>
    <h3 class="text-bold">Delivery API Test Page</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 p-2">
          <!-- Create Delivery Order -->
          <div class="border my-2 p-2" id="deliveryOrderReq01">
            <p><strong>Endpoint: /delivery-orders</strong></p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Description:</strong> Create a new delivery order</p>
            <p><strong>Request Body:</strong></p>
            <pre>{ "packageDescription": "Description", "senderName": "Sender", "senderPhoneNo": "1234567890", "receiverName": "Receiver", "receiverPhoneNo": "0987654321", "pickupAddress": "Pickup Address", "dropoffAddress": "Dropoff Address", "pickupLga": "Pickup LGA", "dropoffLga": "Dropoff LGA", "paymentMethod": "online", "totalDistance": 10, "perishables": false, "fragile": false, "pickupIsResidential": true, "dropoffIsResidential": true }</pre>
            <p><strong>Responses:</strong></p>
            <ul>
              <li>201: Delivery order created</li>
              <li>400: Invalid input</li>
              <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
              <p>Input Form</p>
              <Input v-model="createOrderData.packageDescription" placeholder="Enter Package Description" />
              <p></p>
              <Input v-model="createOrderData.packageWeight" placeholder="Enter Package Weight" />
              <p></p>
              <Checkbox v-model="createOrderData.perishables">Perishables</Checkbox>
              <Checkbox v-model="createOrderData.fragile">Fragile</Checkbox>
              <Checkbox v-model="createOrderData.pickupIsResidential">Pickup is Residential</Checkbox>
              <Checkbox v-model="createOrderData.dropoffIsResidential">Dropoff is Residential</Checkbox>
              <p></p>
              <Input v-model="createOrderData.pickupRestrictions" placeholder="Enter Pickup Restrictions" />
              <p></p>
              <Input v-model="createOrderData.dropoffRestrictions" placeholder="Enter Dropoff Restrictions" />
              <p></p>
              <Input v-model="createOrderData.senderName" placeholder="Enter Sender Name" />
              <p></p>
              <Input v-model="createOrderData.senderPhoneNo" placeholder="Enter Sender Phone Number" />
              <p></p>
              <Input v-model="createOrderData.receiverName" placeholder="Enter Receiver Name" />
              <p></p>
              <Input v-model="createOrderData.receiverPhoneNo" placeholder="Enter Receiver Phone Number" />
              <p></p>
              <Input v-model="createOrderData.pickupAddress" placeholder="Enter Pickup Address" />
              <p></p>
              <Input v-model="createOrderData.dropoffAddress" placeholder="Enter Dropoff Address" />
              <p></p>
              <Input v-model="createOrderData.pickupLga" placeholder="Enter Pickup LGA" />
              <p></p>
              <Input v-model="createOrderData.dropoffLga" placeholder="Enter Dropoff LGA" />
              <p></p>
              <Select v-model="createOrderData.paymentMethod" :options="paymentOptions" placeholder="Select Payment Method" />
              <p></p>
              <Input v-model="createOrderData.totalDistance" placeholder="Enter Total Distance" />
              <p></p>
              <Input v-model="createToken" placeholder="Token" />
            </div>
            <Button @click="testCreateDeliveryOrder" buttonVal="Test Create Delivery Order" />
          </div>
  
          <!-- Update Delivery Order -->
          <div class="border my-2 p-2" id="deliveryOrderReq02">
            <p><strong>Endpoint: /delivery-orders/{orderId}</strong></p>
            <p><strong>Method:</strong> PUT</p>
            <p><strong>Description:</strong> Update a delivery order</p>
            <p><strong>Request Body:</strong></p>
            <pre>{ "packageDescription": "Updated Description" }</pre>
            <p><strong>Responses:</strong></p>
            <ul>
              <li>200: Delivery order updated</li>
              <li>400: Invalid input</li>
              <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
              <p>Update Form</p>
              <Input v-model="updateOrderId" placeholder="Enter Order ID" />
              <p></p>
              <Input v-model="updateOrderData.packageDescription" placeholder="Enter Package Description" />
              <p></p>
              <Input v-model="updateOrderData.packageWeight" placeholder="Enter Package Weight" />
              <p></p>
              <Checkbox v-model="updateOrderData.perishables">Perishables</Checkbox>
              <Checkbox v-model="updateOrderData.fragile">Fragile</Checkbox>
              <Checkbox v-model="updateOrderData.pickupIsResidential">Pickup is Residential</Checkbox>
              <Checkbox v-model="updateOrderData.dropoffIsResidential">Dropoff is Residential</Checkbox>
              <p></p>
              <Input v-model="updateOrderData.pickupRestrictions" placeholder="Enter Pickup Restrictions" />
              <p></p>
              <Input v-model="updateOrderData.dropoffRestrictions" placeholder="Enter Dropoff Restrictions" />
              <p></p>
              <Input v-model="updateOrderData.senderName" placeholder="Enter Sender Name" />
              <p></p>
              <Input v-model="updateOrderData.senderPhoneNo" placeholder="Enter Sender Phone Number" />
              <p></p>
              <Input v-model="updateOrderData.receiverName" placeholder="Enter Receiver Name" />
              <p></p>
              <Input v-model="updateOrderData.receiverPhoneNo" placeholder="Enter Receiver Phone Number" />
              <p></p>
              <Input v-model="updateOrderData.pickupAddress" placeholder="Enter Pickup Address" />
              <p></p>
              <Input v-model="updateOrderData.dropoffAddress" placeholder="Enter Dropoff Address" />
              <p></p>
              <Input v-model="updateOrderData.pickupLga" placeholder="Enter Pickup LGA" />
              <p></p>
              <Input v-model="updateOrderData.dropoffLga" placeholder="Enter Dropoff LGA" />
              <p></p>
              <Select v-model="updateOrderData.paymentMethod" :options="paymentOptions" placeholder="Select Payment Method" />
              <p></p>
              <Input v-model="updateOrderData.totalDistance" placeholder="Enter Total Distance" />
              <p></p>
              <Input v-model="updateToken" placeholder="Enter Token" />
              <p></p>
              <Input v-model="updateId" placeholder="Enter Id" />
            </div>
            <Button @click="testUpdateDeliveryOrder" buttonVal="Test Update Delivery Order" />
          </div>
  
          <!-- Get Delivery Orders -->
          <div class="border my-2 p-2" id="deliveryOrderReq03">
            <p><strong>Endpoint: /delivery-orders</strong></p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Get a list of delivery orders</p>
            <p><strong>Request Params:</strong> page (optional)</p>
            <p><strong>Responses:</strong></p>
            <ul>
              <li>200: Delivery orders retrieved</li>
              <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
              <p>Input Form</p>
              <Input v-model="ordersPage" placeholder="Enter Page Number" />
            </div>
            <Button @click="testGetDeliveryOrders" buttonVal="Test Get Delivery Orders" />
          </div>
  
          <!-- Get Delivery Order by ID -->
          <div class="border my-2 p-2" id="deliveryOrderReq04">
            <p><strong>Endpoint: /delivery-orders/{orderId}</strong></p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Get a delivery order by ID</p>
            <p><strong>Request Params:</strong> orderId</p>
            <p><strong>Responses:</strong></p>
            <ul>
              <li>200: Delivery order retrieved</li>
              <li>404: Delivery order not found</li>
              <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
              <p>Input Form</p>
              <Input v-model="getOrderId" placeholder="Enter Order ID" />
              <p></p>
              <Input v-model="getOrderToken" placeholder="Enter Token" />
            </div>
            <Button @click="testGetDeliveryOrderById" buttonVal="Test Get Delivery Order by ID" />
          </div>
        </div>
  
        <div class="col-6 p-2 position-relative">
          <div class="border p-2 position-fixed col-5 scroll-y responseHeight">
            <h5>Response:</h5>
            <pre v-if="responseData">{{ responseData }}</pre>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import deliveryOrderService from '../sela-connect-services/deliveryOrder'; // Adjust the path as necessary
  
  export default defineComponent({
    data() {
    return {
      createOrderData: {
        packageDescription: '',
        packageWeight: undefined,
        perishables: false,
        fragile: false,
        pickupIsResidential: false,
        dropoffIsResidential: false,
        pickupRestrictions: '',
        dropoffRestrictions: '',
        senderName: '',
        senderPhoneNo: '',
        price: 299,
        receiverName: '',
        receiverPhoneNo: '',
        pickupAddress: '',
        dropoffAddress: '',
        pickupLga: '',
        dropoffLga: '',
        paymentMethod: 'online' as 'online' | 'onpickup' | 'ondelivery', // Explicitly typed
        totalDistance: 0,
        deliveryId: 'efwafewfwf',
      },
      updateOrderData: {
        packageDescription: '',
        packageWeight: undefined,
        perishables: false,
        fragile: false,
        pickupIsResidential: false,
        dropoffIsResidential: false,
        pickupRestrictions: '',
        dropoffRestrictions: '',
        senderName: '',
        senderPhoneNo: '',
        receiverName: '',
        receiverPhoneNo: '',
        pickupAddress: '',
        dropoffAddress: '',
        pickupLga: '',
        price: 1000,
        dropoffLga: '',
        deliveryId: '329092000',
        paymentMethod: 'online' as 'online' | 'onpickup' | 'ondelivery', // Explicitly typed
        totalDistance: 0,
      },
      createToken: '',
      updateToken: '',
      updateId: '',
      updateOrderId: '',
      ordersPage: 1,
      ordersToken: '',
      getOrderId: '',
      getOrderToken: '',
      responseData: '',
      paymentOptions: [
        { label: 'Online', value: 'online' },
        { label: 'On Delivery', value: 'ondelivery' },
        { label: 'On Pickup', value: 'onpickup' }
      ]
    };
  },
    methods: {
      async testCreateDeliveryOrder() {
        try {
          const response = await deliveryOrderService.createDeliveryOrder({...this.createOrderData}, this.createToken);
          this.responseData = JSON.stringify(response, null, 2);
        } catch (error: any) {
          this.responseData = `Error: ${error.message}`;
        }
      },
      async testUpdateDeliveryOrder() {
        try {
          const response = await deliveryOrderService.updateDeliveryOrder(this.updateId, this.updateOrderData, this.updateToken);
          this.responseData = JSON.stringify(response, null, 2);
        } catch (error: any) {
          this.responseData = `Error: ${error.message}`;
        }
      },
      async testGetDeliveryOrders() {
        try {
          const response = await deliveryOrderService.getDeliveryOrders(this.ordersPage);
          this.responseData = JSON.stringify(response, null, 2);
        } catch (error: any) {
          this.responseData = `Error: ${error.message}`;
        }
      },
      async testGetDeliveryOrderById() {
        try {
          const response = await deliveryOrderService.getDeliveryOrderById(this.getOrderId);
          this.responseData = JSON.stringify(response, null, 2);
        } catch (error: any) {
          this.responseData = `Error: ${error.message}`;
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .responseHeight {
    height: 80vh;
  }
  </style>
  




  