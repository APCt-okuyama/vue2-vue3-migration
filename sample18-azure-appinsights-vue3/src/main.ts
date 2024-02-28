import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//
import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ClickAnalyticsPlugin } from '@microsoft/applicationinsights-clickanalytics-js'

const clickPluginInstance = new ClickAnalyticsPlugin();
const clickPluginConfig = {
    autoCapture: true,
    dataTags: {
      useDefaultTags: true
    }
  };
const configObj = {
  // connectionString: "InstrumentationKey=8d2761b8- ... tor.azure.com/", 
  connectionString: import.meta.env.VITE_APP_APPINSIGHTS_CONNECT_STRING,
  // Alternatively, you can pass in the instrumentation key,
  // but support for instrumentation key ingestion will end on March 31, 2025.  
  // instrumentationKey: "YOUR INSTRUMENTATION KEY",
  extensions: [clickPluginInstance],
  extensionConfig: {
    [clickPluginInstance.identifier]: clickPluginConfig
  },
};

const appInsights = new ApplicationInsights({ config: configObj });
appInsights.loadAppInsights();
appInsights.trackPageView();


// 以下はcustomEventsに登録されます
appInsights.trackEvent({name: 'my custom event', properties: {customProperty: 'custom value'}});
appInsights.trackEvent({name: 'my custom event only name'});

const app = createApp(App);

// Provide appInsights instance to the whole app
app.provide('appInsights', appInsights);

app.mount('#app');
