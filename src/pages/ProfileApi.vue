<template>
    <h3 class="text-bold">Profile API Test Page</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 p-2">
          <!-- Create Profile -->
          <div class="border my-2 p-2" id="profileReq01">
            <p><strong>Endpoint: /profile</strong></p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Description:</strong> Create a new profile</p>
            <p><strong>Request Body:</strong></p>
            <pre>{ "name": "John Doe", "email": "john.doe@example.com" }</pre>
            <p><strong>Responses:</strong></p>
            <ul>
              <li>201: Profile created</li>
              <li>400: Invalid input</li>
              <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
            <p>Input Form</p>
            <Input v-model="createProfileData.firstName" placeholder="Enter First Name" />
            <p></p>
            <Input v-model="createProfileData.lastName" placeholder="Enter Last Name" />
            <p></p>
            <Input v-model="createProfileData.gender" placeholder="Enter Gender" />
            <p></p>
            <p class="text-bold">Selected Date: {{ createProfileData.dateOfBirth }}</p>
            <DateInput v-model="createProfileData.dateOfBirth" placeholder="Enter Date of Birth" />
            
            <p></p>
            <Input v-model="createProfileData.bio" placeholder="Enter Bio" />
            <p></p>
            <Input v-model="createProfileData.location" placeholder="Enter Location" />
            <p></p>
            <Input v-model="createProfileData.website" placeholder="Enter Website" />
            <p></p>
            <Input v-model="createProfileData.username" placeholder="Enter Username" />
            <p></p>
            <Input v-model="createProfileToken" placeholder="Enter Token" />
            </div>

            <Button @click="testCreateProfile" buttonVal="Test Create Profile" /> 

        </div>
  
          <!-- Get Profile -->
          <div class="border my-2 p-2" id="profileReq02">
            <p><strong>Endpoint: /profile/{userId}</strong></p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Get a profile by user ID</p>
            <p><strong>Request Params:</strong> userId</p>
            <p><strong>Responses:</strong></p>
            <ul>
              <li>200: Profile retrieved</li>
              <li>404: Profile not found</li>
              <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
            <p>Input Form</p>
            <p></p>
            <Input v-model="getUserId" placeholder="UserId" />
            <p></p>
            <Input v-model="getUserToken" placeholder="Enter Token" />
            </div>
            <Button @click="testGetProfile" buttonVal="Test Get Profile" />
          </div>
  
          <!-- Update Profile -->
          <div class="border my-2 p-2" id="profileReq03">
            <p><strong>Endpoint: /profile/{userId}</strong></p>
            <p><strong>Method:</strong> PUT</p>
            <p><strong>Description:</strong> Update a profile</p>
            <p><strong>Request Body:</strong></p>
            <pre>{ "name": "John Doe Updated", "email": "john.doe.updated@example.com" }</pre>
            <p><strong>Responses:</strong></p>
            <ul>
              <li>200: Profile updated</li>
              <li>400: Invalid input</li>
              <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
                <p>Update Form</p>
                <Input v-model="updateProfileData.firstName" placeholder="Enter First Name" />
                <p></p>
                <Input v-model="updateProfileData.lastName" placeholder="Enter Last Name" />
                <p></p>
                <Input v-model="updateProfileData.gender" placeholder="Enter Gender" />
                <p></p>
                <p class="text-bold">Selected Date: {{ updateProfileData.dateOfBirth }}</p>
                <DateInput v-model="updateProfileData.dateOfBirth" placeholder="Enter Date of Birth" />
                <p></p>
                <Input v-model="updateProfileData.bio" placeholder="Enter Bio" />
                <p></p>
                <Input v-model="updateProfileData.location" placeholder="Enter Location" />
                <p></p>
                <Input v-model="updateProfileData.website" placeholder="Enter Website" />
                <p></p>
                <Input v-model="updateProfileData.username" placeholder="Enter Username" />
                <p></p>
                <Input v-model="updateProfileToken" placeholder="Enter Token" />
                <p></p>
                <Input v-model="updateProfileId" placeholder="User Id " />
            </div>
            <Button @click="testUpdateProfile" buttonVal="Test Update Profile" />
          </div>

          <!-- Upload Profile Image -->
          <div class="border my-2 p-2" id="profileReq04">
            <p><strong>Endpoint: /profile/upload-image</strong></p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Description:</strong> Upload a profile image</p>
            <p><strong>Request Body:</strong> FormData with files</p>
            <p><strong>Responses:</strong></p>
            <ul>
              <li>200: Image uploaded</li>
              <li>400: Invalid input</li>
              <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
              <p>Input Form</p>
              <FileInput @update:modelValue="handleFileSelect" accept="image/*" />
              <p></p>
              <Input v-model="uploadImageToken" placeholder="Enter Token" />
              <p></p>
              <Input v-model="uploadImageId" placeholder="Id" />
            </div>
            <Button @click="testUploadProfileImage" buttonVal="Test Upload Image" />
          </div>

          <!-- Delete Profile -->
            <div class="border my-2 p-2" id="profileReq05">
            <p><strong>Endpoint: /profile/{userId}</strong></p>
            <p><strong>Method:</strong> DELETE</p>
            <p><strong>Description:</strong> Delete a profile by user ID</p>
            <p><strong>Request Params:</strong> userId</p>
            <p><strong>Responses:</strong></p>
            <ul>
                <li>200: Profile deleted successfully</li>
                <li>404: Profile not found</li>
                <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
                <p>Input Form</p>
                <p></p>
                <Input v-model="deleteUserId" placeholder="UserId" />
                <p></p>
                <Input v-model="deleteUserToken" placeholder="Enter Token" />
            </div>
            <Button @click="testDeleteProfile" buttonVal="Test Delete Profile" />
            </div>

            <!-- Search Profiles -->
            <div class="border my-2 p-2" id="profileReq06">
            <p><strong>Endpoint: /profile/search</strong></p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Search profiles based on query parameters</p>
            <p><strong>Request Params:</strong> Query parameters for search</p>
            <p><strong>Responses:</strong></p>
            <ul>
                <li>200: Profiles retrieved</li>
                <li>400: Invalid search query</li>
                <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
                <p>Input Form</p>
                <p></p>
                <Input v-model="searchQuery" placeholder="Enter Search Query" />
                <p></p>
                <Input v-model="searchToken" placeholder="Enter Token" />
            </div>
            <Button @click="testSearchProfiles" buttonVal="Test Search Profiles" />
            </div>

            <!-- Get Profiles -->
            <div class="border my-2 p-2" id="profileReq07">
            <p><strong>Endpoint: /profile</strong></p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Get a list of profiles with pagination</p>
            <p><strong>Request Params:</strong> page (optional)</p>
            <p><strong>Responses:</strong></p>
            <ul>
                <li>200: Profiles retrieved</li>
                <li>401: Unauthorized</li>
            </ul>
            <div class="loginform border r-1 p-2">
                <p>Input Form</p>
                <p></p>
                <Input v-model="profilesPage" placeholder="Page Number" />
                <p></p>
                <Input v-model="profilesToken" placeholder="Enter Token" />
            </div>
            <Button @click="testGetProfiles" buttonVal="Test Get Profiles" />
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
  </template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    import profileService from '../fst-services/profileService';
    let anyType: any;
    export default defineComponent({
    data() {
        return {
            createProfileData: {
                firstName: '',
                lastName: '',
                gender: '',
                dateOfBirth: '',
                bio: '',
                location: '',
                website: '',
                username: ''
            },
            createProfileToken: '',
            getProfileUserId: '',
            getProfileToken: '',
            updateProfileUserId: '',
            updateProfileData: {
                firstName: '',
                lastName: '',
                gender: '',
                dateOfBirth: '',
                bio: '',
                location: '',
                website: '',
                username: ''
            },
            updateProfileToken: '',
            updateProfileId: '',
            uploadImageToken: '',
            uploadImageId: '',
            response: '',
            getUserId: '',
            getUserToken:"",
            profilesToken: '',
            profilesPage: '1', // Default to page 1
            deleteUserId: '',
            deleteUserToken: '',
            searchQuery: '',
            searchToken: '',
            fileData: anyType
        }
    },
    methods: {
        async testCreateProfile() {
        try {
            const result = await profileService.createProfile(this.createProfileData, this.createProfileToken)
            this.response = JSON.stringify(result, null, 2)
        } catch (error: any) {
            this.response = `Error: ${error.message}`
        }
        },
        async testGetProfile() {
        try {
            const result = await profileService.getProfile(this.getUserId, this.getUserToken)
            this.response = JSON.stringify(result, null, 2)
        } catch (error: any) {
            this.response = `Error: ${error.message}`
        }
        },
        async testUpdateProfile() {
        try {
            const result = await profileService.updateProfile(this.getUserId, this.updateProfileData, this.updateProfileToken)
            this.response = JSON.stringify(result, null, 2)
        } catch (error: any) {
            this.response = `Error: ${error.message}`
        }
        },
        async testUploadProfileImage() {
        try {
            const result = await profileService.uploadProfileImage(this.fileData, this.uploadImageToken, this.uploadImageId)
            this.response = JSON.stringify(result, null, 2)
        } catch (error: any) {
            this.response = `Error: ${error.message}`
        }
        },
        handleFileSelect(files: FileList) {
        // Handle file selection here
        this.fileData = files[0]

        console.log('Selected files:', this.fileData);
        },
        async testDeleteProfile() {
            try {
            const result = await profileService.deleteProfile(this.deleteUserId, this.deleteUserToken);
            this.response = JSON.stringify(result, null, 2);
            } catch (error: any) {
            this.response = `Error: ${error.message}`;
            }
        },

        async testSearchProfiles() {
            try {
            const query = JSON.parse(this.searchQuery);
            console.log(query)
            const result = await profileService.searchProfiles(query, this.searchToken);
            this.response = JSON.stringify(result, null, 2);
            } catch (error: any) {
            this.response = `Error: ${error.message}`;
            }
        },
        async testGetProfiles() {
            try {
            const result = await profileService.getProfiles(Number(this.profilesPage), this.profilesToken);
            this.response = JSON.stringify(result, null, 2);
            } catch (error: any) {
            this.response = `Error: ${error.message}`;
            }
        },
    }
    })
    </script>


  <style scoped>
  /* Add your styles here */
  </style>
  