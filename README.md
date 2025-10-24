# Client Panel - Contact Manager

A modern React-based contact management application built with Material-UI, featuring a clean and responsive interface for managing contacts.

## Features

- **Contact Management**: Add, edit, delete, and view contacts
- **Search & Sort**: Filter and sort contacts by name
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Material-UI components for a professional look
- **State Management**: Uses React Context API for efficient state management
- **Form Validation**: Client-side validation for contact forms
- **API Integration**: Integrates with JSONPlaceholder API for data persistence

## Tech Stack

- **React 17.0.2** - Frontend framework
- **Material-UI 5.18.0** - UI component library
- **React Router DOM 5.2.0** - Client-side routing
- **Axios 1.12.2** - HTTP client for API calls
- **PropTypes 15.7.2** - Runtime type checking

## Project Structure

```
src/
├── components/
│   ├── contact/
│   │   ├── AddContact.js      # Add new contact form
│   │   ├── EditContact.js     # Edit existing contact form
│   │   ├── Contacts.js        # Contact list component
│   │   └── contact.js         # Individual contact card
│   ├── helpers/
│   │   └── TextInputGroup.js  # Reusable input component
│   ├── navbar/
│   │   ├── navbar.js          # Navigation bar
│   │   └── navbar.css         # Navigation styles
│   ├── pages/
│   │   ├── About.js           # About page
│   │   └── NotFound.js        # 404 page
│   └── context.js             # Global state management
├── App.js                     # Main application component
├── App.css                    # Application styles
└── index.js                   # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd client-panel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: This is a one-way operation!**

Ejects from Create React App configuration for advanced customization.

## Usage

### Adding a Contact
1. Navigate to the "Add" page using the navigation bar
2. Fill in the contact details (Name, Email, Phone)
3. Click "Add New Contact" to save

### Editing a Contact
1. Click the edit icon on any contact card
2. Modify the contact information
3. Click "Edit Contact" to save changes

### Deleting a Contact
1. Click the delete icon on any contact card
2. Confirm the deletion in the dialog

### Searching Contacts
- Use the search input to filter contacts by name
- Results update in real-time as you type

## API Integration

The application uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock REST API for demonstration purposes. In a production environment, replace the API endpoints with your actual backend service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and ensure no linting errors
5. Submit a pull request

## License

This project is licensed under the MIT License.
