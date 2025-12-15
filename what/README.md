# What-If Question Platform

## Description

The What-If Question Platform is an interactive web application designed to foster creativity, critical thinking, and intellectual curiosity among students. It provides a space where users can explore hypothetical scenarios across various disciplines including science, technology, history, philosophy, and more.

## Features

- **User Authentication**: Secure login and signup system for students
- **Question Management**: Post, browse, and search through "what-if" questions
- **Categorization**: Organize questions by topics for easy navigation
- **Admin Moderation**: Ensure quality content through admin review process
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive UI**: Engaging animations and user-friendly interface

## Pages

- **Home (index.html)**: Landing page with hero section and navigation
- **About Us (about.html)**: Information about the platform with statistics
- **Features (features.html)**: Detailed platform features with interactive cards
- **Browse Questions (browse.html)**: Search and browse published questions
- **Contact Us (contact.html)**: Contact form and information
- **Login (login.html)**: Student login page
- **Signup (signup.html)**: Student registration page
- **Dashboard (dashboard.html)**: Student dashboard (requires login)

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome
- **Data Storage**: LocalStorage for client-side data persistence
- **Fonts**: Google Fonts (Segoe UI)

## Installation

1. Clone or download the project files
2. Place the `what` folder in your web server's root directory (e.g., WAMP's www folder)
3. Start your web server
4. Navigate to `http://localhost/what/` in your browser

## Usage

1. Visit the home page to explore the platform
2. Sign up for a new account or login with existing credentials
3. Browse questions or ask your own "what-if" questions
4. Use the search functionality to find specific topics
5. Contact us through the contact form for feedback

## Sample Data

The platform comes with pre-loaded sample questions and user accounts for demonstration:

- **Admin Account**: username: admin, password: admin123
- **Sample Students**: student1/student123, student2/student123, etc.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

This is an educational project. Feel free to fork and modify for learning purposes.

## License

© 2023 What-If Platform by Ray Airo R. Bapora. All rights reserved.

## Hosting

### Option 1: GitHub Pages (Free)

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it something like `what-if-platform`
   - Make it public

2. **Upload Your Files**:
   - Upload all files from your `what` folder to the repository
   - Or clone the repository and copy files there

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**:
   - GitHub will provide a URL like: `https://yourusername.github.io/what-if-platform/`
   - It may take a few minutes to deploy

### Option 2: Netlify (Free)

1. **Sign up for Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up

2. **Deploy**:
   - Drag and drop your entire `what` folder onto the Netlify dashboard
   - Or connect your GitHub repository

3. **Get Your URL**:
   - Netlify will provide a random URL like `https://random-name.netlify.app`

### Option 3: Vercel (Free) - Step-by-Step Guide

Vercel is a fast and reliable platform for deploying static websites and frontend applications.

#### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and create an account (GitHub, GitLab, or email)
   - Verify your email if needed

2. **Deploy Your Project**:
   - On the Vercel dashboard, click "New Project"
   - Choose "Import Git Repository" if you have GitHub, or "Deploy with Git" for other options
   - If no Git repository, select "Import Third-Party Git Repository" or use drag-and-drop

3. **Upload Files (Alternative)**:
   - If using drag-and-drop: Simply drag your entire `what` folder onto the deployment area
   - Vercel will automatically detect it as a static site

4. **Configure Deployment**:
   - **Framework Preset**: Select "Other" or "HTML"
   - **Root Directory**: Leave as `./` (root)
   - **Build Command**: Leave empty (no build needed)
   - **Output Directory**: Leave empty (static files)

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build process (usually 30 seconds - 2 minutes)
   - You'll get a preview URL like `https://your-project-name.vercel.app`

#### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate

3. **Navigate to Your Project**:
   ```bash
   cd /path/to/your/what/folder
   ```

4. **Deploy**:
   ```bash
   vercel
   ```
   - Answer the prompts:
     - Set up and deploy? → Y
     - Which scope? → Your account
     - Link to existing project? → N
     - Project name → what-if-platform (or your choice)
     - In which directory is your code located? → ./ (current directory)

5. **Production Deployment**:
   ```bash
   vercel --prod
   ```

#### Vercel Configuration (Optional)

Create a `vercel.json` file in your project root for advanced configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

#### Custom Domain (Optional)

1. Go to your project settings in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

#### Testing Your Vercel Deployment

- Visit the provided URL
- Test all pages: Home, About, Features, Browse, Contact, Login, Signup
- Verify search functionality works
- Check responsive design on mobile

#### Vercel Features for Your Project

- **Automatic HTTPS**: SSL certificate included
- **Global CDN**: Fast loading worldwide
- **Custom Domains**: Connect your own domain
- **Analytics**: Built-in performance monitoring
- **Environment Variables**: For future backend integration

Vercel is excellent for static sites like yours and provides great performance out of the box!

- **LocalStorage Limitation**: Since this app uses localStorage for data storage, user accounts and questions won't persist across different browsers or devices. For a production site, you'd need a backend database.

- **File Structure**: Make sure all files maintain their relative paths. The `css/`, `js/`, and `assets/` folders should be uploaded along with the HTML files.

- **Testing**: After hosting, test all pages and functionality to ensure everything works correctly.

- **Domain**: For custom domains, most hosting services allow you to connect your own domain (paid plans usually required).

### Recommended: GitHub Pages for Beginners

GitHub Pages is the easiest option if you're new to web hosting. It integrates well with version control and is completely free for public repositories.</content>
<parameter name="filePath">c:\wamp64\www\what\README.md