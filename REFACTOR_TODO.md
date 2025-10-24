# Code Refactoring Plan

## Rename Folder
- [x] Rename "compnents" to "components" and update all import paths

## Convert Class Components to Functional Components
- [x] Convert src/App.js to functional component
- [x] Convert src/compnents/contact/Contacts.js to functional component
- [x] Convert src/compnents/contact/AddContact.js to functional component
- [x] Convert src/compnents/contact/contact.js to functional component
- [x] Convert src/compnents/contact/EditContact.js to functional component
- [x] Convert src/compnents/context.js Provider to functional component

## Remove Console Logs
- [x] Remove console.log from src/compnents/context.js
- [x] Remove console.log from src/compnents/contact/EditContact.js
- [x] Remove console.log from src/compnents/contact/contact.js
- [x] Remove console.log from src/compnents/contact/AddContact.js
- [x] Remove console.log from src/compnents/action.js (and delete file)

## Remove Unused Code
- [x] Delete src/compnents/action.js
- [x] Delete src/compnents/api.js
- [x] Remove Redux dependencies and files since Context API is used
- [x] Remove unused imports in components

## Improve Code Structure
- [ ] Add Snackbar component for notifications
- [ ] Implement dark mode toggle functionality
- [ ] Ensure consistent error handling
- [x] Add PropTypes where missing
- [x] Use TextInputGroup component in forms

## Testing
- [x] Test the app after refactoring to ensure functionality
