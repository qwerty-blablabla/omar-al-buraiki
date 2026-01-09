# Admin Panel Setup Guide

This guide explains how to set up and use the admin panel for managing navbar items on the Omar Al-Buraiki website.

## Features

- **Real-time navbar management**: Show/hide navbar items without redeployment
- **Simple authentication**: Password-protected admin access
- **Live preview**: See changes before saving
- **Persistent storage**: Configuration saved to JSON file

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Environment

To run both the frontend and backend together:

```bash
npm run dev:full
```

This will start:

- **Frontend**: http://localhost:5173 (Vite dev server)
- **Backend**: http://localhost:3001 (Express API server)

### 3. Access the Admin Panel

1. Navigate to http://localhost:5173/admin
2. Enter the admin password: `admin123`
3. You'll see the navbar configuration interface

## How to Use the Admin Panel

### Managing Navbar Items

1. **Login**: Enter the admin password (`admin123`)
2. **Toggle Items**: Use the checkboxes to show/hide navbar items
3. **Preview**: See a live preview of the navbar at the bottom
4. **Save**: Click "Save Configuration" to apply changes
5. **Reset**: Use "Reset to Defaults" to restore original settings

### Available Navbar Items

- **Home** - Main homepage
- **Publications** - Research publications page
- **Research Projects** - Research projects (currently hidden)
- **Members** - Team members page
- **Prospective Students** - Student information (currently hidden)
- **Software and Datasets** - Resources (currently hidden)
- **YouTube** - Video content (currently hidden)

## File Structure

```
├── config/
│   └── navbar.json          # Navbar configuration (auto-created)
├── server.js                # Express API server
├── src/
│   ├── components/
│   │   ├── AdminPanel.jsx   # Admin interface component
│   │   └── AdminPanel.css   # Admin panel styles
│   ├── pages/
│   │   ├── Admin.jsx        # Admin page with authentication
│   │   └── Admin.css        # Admin page styles
│   ├── utils/
│   │   └── api.js           # API utility functions
│   └── Navbar.jsx           # Modified navbar component
```

## API Endpoints

- `GET /api/navbar-config` - Retrieve current navbar configuration
- `POST /api/navbar-config` - Update navbar configuration
- `GET /api/health` - Server health check

## Configuration File

The navbar configuration is stored in `config/navbar.json`:

```json
{
  "items": [
    {
      "id": "home",
      "label": "Home",
      "path": "/",
      "visible": true
    }
  ]
}
```

## Security Notes

- **Change the default password** in production
- The admin panel is currently accessible to anyone who knows the URL
- Consider adding additional authentication for production use

## Troubleshooting

### Common Issues

1. **"Failed to fetch navbar config"**

   - Ensure the Express server is running on port 3001
   - Check that the config directory exists

2. **Admin panel not loading**

   - Verify you're accessing `/admin` route
   - Check browser console for errors

3. **Changes not saving**
   - Ensure the config directory is writable
   - Check server logs for errors

### Development Commands

```bash
# Start only the frontend
npm run dev

# Start only the backend
npm run server

# Start both frontend and backend
npm run dev:full

# Build for production
npm run build
```

## Production Deployment

For production deployment:

1. **Change the admin password** in `src/pages/Admin.jsx`
2. **Set up proper authentication** (consider JWT or session-based auth)
3. **Use environment variables** for configuration
4. **Set up proper logging** and monitoring
5. **Consider using a database** instead of JSON files for better scalability

## Support

If you encounter any issues:

1. Check the browser console for errors
2. Check the server logs in the terminal
3. Verify all dependencies are installed
4. Ensure both frontend and backend servers are running
