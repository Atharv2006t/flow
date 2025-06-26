module.exports = {
  // Your Inngest app ID
  id: "flow",
  
  // The URL where your Inngest API is hosted
  serve: {
    client: "@/lib/inngest/client",
    functions: [
      "@/lib/inngest/functions"
    ]
  },
  
  // Development settings
  dev: {
    // Specify the port for the dev server
    port: 8288,
    
    // Specify the API endpoint
    api: "http://localhost:3000/api/inngest"
  }
}; 