import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    webServer: {
        command: 'npm run start-prod', // Change this based on your app's start command
        port: 5000, // Change this to your app's port
        timeout: 120 * 1000, // Increase if your app takes longer to start
        // eslint-disable-next-line no-undef
        reuseExistingServer: true, // Reuse server for faster local runs
    },
    use: {
        baseURL: 'http://localhost:5000', // Set to match your app's running URL
        headless: true, // Set false for debugging
    },
})
