// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import PingApi from '../pages/PingApi.vue';
import AuthApi from '../pages/AuthApi.vue';
import ProfileApi from '../pages/ProfileApi.vue';
import CustomerSupport from '../pages/CustomerSupport.vue';
import DeliveryApi from '../pages/DeliveryApi.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ping-api',
    name: 'PingApiSection',
    component: PingApi
  },
  {
    path: '/auth-api',
    name: 'AuthApiSection',
    component: AuthApi
  },
  {
    path: '/profile-api',
    name: 'ProfileApiSection',
    component: ProfileApi
  },
  {
    path: '/customer-support-api',
    name: 'CustomerSupportSection',
    component: CustomerSupport
  },
  {
    path: '/delivery-order-api',
    name: 'DeliveryOrderSection',
    component: DeliveryApi
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
