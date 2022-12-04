// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'efeed-342620',
    appId: '1:899497983198:web:b0ad0f669f4099c455d64f',
    storageBucket: 'efeed-342620.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBlZWxePzlNVdOZ_Nhu_Vh3seRKeAYmU40',
    authDomain: 'efeed-342620.firebaseapp.com',
    messagingSenderId: '899497983198',
    measurementId: 'G-YB7MREHWJV',
  },
  production: false,
  PHONE_API: 'https://phonevalidation.abstractapi.com/',
  PHONE_API_KEY: '3f0680d1d52b411e805642106b3a13d6',
  PINCODE_API: 'https://api.postalpincode.in/pincode/',
  WEATHER_API: 'https://api.openweathermap.org/data/2.5/weather?',
  WEATHER_API_KEY: 'ff1bc4683fc7325e9c57e586c20cc03e'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
