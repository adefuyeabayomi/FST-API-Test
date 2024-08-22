<script lang="ts">
import { defineComponent } from "vue";
import pingService from "../fst-services/pingService.ts";

export default defineComponent({
  data() {
    return {
      message: "blah",
      response: "",
      reqForm1: {
        value1: "",
        value2: "",
      },
    };
  },
  methods: {
    async testPing() {
      try {
        const result = await pingService.ping();
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testStatus() {
      try {
        const result = await pingService.status();
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testRequestLogs() {
      try {
        const result = await pingService.getRequestLogs();
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async testAppLogs() {
      try {
        const result = await pingService.getAppLogs();
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async clearRequestLogs() {
      try {
        const result = await pingService.clearRequestLogs();
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
    async clearAppLogs() {
      try {
        const result = await pingService.clearAppLogs();
        this.response = JSON.stringify(result, null, 2);
      } catch (error: any) {
        this.response = `Error: ${error.message}`;
      }
    },
  },
});
</script>

<template>
  <div class="p-3">
    <h4>PING APIS</h4>
    <div class="p-2 api-endpoint-test-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 p-2">
            <div class="border p-2">
              <h3 class="text-bold">Requests Tab</h3>
              <div class="border my-2 p-2" id="pingReq01">
                <p><strong>Endpoint: /</strong></p>
                <p><strong>Method:</strong> GET</p>
                <p>
                  <strong>Description:</strong> Performs a ping request and
                  returns pong.
                </p>
                <Button @click="testPing" buttonVal="Test Ping" />
              </div>
              <div class="border my-2 p-2" id="pingReq02">
                <p><strong>Endpoint: /status</strong></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> Gets server status.</p>
                <Button @click="testStatus" buttonVal="Test Status" />
              </div>
              <div class="border my-2 p-2" id="pingReq03">
                <p><strong>Endpoint: /request-logs</strong></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> Gets request logs.</p>
                <p><strong>Responses:</strong></p>
                <ul>
                  <li>200: Returns request logs</li>
                  <li>500: Error reading request logs</li>
                </ul>
                <Button
                  @click="testRequestLogs"
                  buttonVal="Test Request Logs"
                />
              </div>
              <div class="border my-2 p-2" id="pingReq04">
                <p><strong>Endpoint: /app-logs</strong></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> Gets application logs.</p>
                <p><strong>Responses:</strong></p>
                <ul>
                  <li>200: Returns application logs</li>
                  <li>500: Error reading application logs</li>
                </ul>
                <Button @click="testAppLogs" buttonVal="Test App Logs" />
              </div>
              <div class="border my-2 p-2" id="pingReq05">
                <p><strong>Endpoint: /clear-request-logs</strong></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> Clears request logs.</p>
                <p><strong>Responses:</strong></p>
                <ul>
                  <li>200: Request logs cleared</li>
                  <li>500: Error clearing request logs</li>
                </ul>
                <Button
                  @click="clearRequestLogs"
                  buttonVal="Clear Request Logs"
                />
              </div>
              <div class="border my-2 p-2" id="pingReq06">
                <p><strong>Endpoint: /clear-app-logs</strong></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> Clears application logs.</p>
                <p><strong>Responses:</strong></p>
                <ul>
                  <li>200: Application logs cleared</li>
                  <li>500: Error clearing application logs</li>
                </ul>
                <Button @click="clearAppLogs" buttonVal="Clear App Logs" />
              </div>
            </div>
          </div>
          <div class="col-6 p-2 position-relative">
            <div
              class="border p-2 position-fixed col-5 scroll-y responseHeight"
            >
              <h3 class="text-bold">Response Tab</h3>
              <p>{{ response }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
