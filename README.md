# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fa12cbca-fa20-4506-baea-7c27cd089bc1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fa12cbca-fa20-4506-baea-7c27cd089bc1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Local Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup Steps
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```
   - Default port: 8080
   - Auto-opens in browser if configured

4. Build for local testing:
   ```bash
   npm run local:build
   ```

5. Serve local build:
   ```bash
   npm run serve
   ```

### Environment Configuration
- `.env` file controls local development settings
- Modify environment variables as needed

### Troubleshooting
- Ensure all dependencies are installed
- Check console for any startup errors
- Verify Node.js and npm versions

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/fa12cbca-fa20-4506-baea-7c27cd089bc1) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Vercel Deployment

### Prerequisites
- A Vercel account
- Git repository with the project
- Node.js and npm installed

### Deployment Steps
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the project structure
3. Select the following settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Environment Variables
No specific environment variables are required for this project.

### Troubleshooting
- Ensure all dependencies are correctly listed in `package.json`
- Check that the build script is configured correctly
- Verify that the `vercel.json` configuration is compatible with your project structure
