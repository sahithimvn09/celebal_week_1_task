# React Form with Validation Without Third-Party Libraries

A React-based form application that implements client-side validation without the use of third-party libraries. The application ensures all required fields are validated before submission and displays the form details on a new route upon successful submission.

---

## Features

1. **Validation for Required Fields**: Ensures that all mandatory fields are correctly filled before enabling the form submission.
2. **Real-Time Error Messages**: Displays appropriate error messages as users input invalid data.
3. **Show/Hide Password**: A toggle button to show or hide the password.
4. **Dynamic Dropdowns**: Country and city fields dynamically update based on the user's selection.
5. **Field-Specific Validations**:
   - **First Name & Last Name**: Alphabets only.
   - **Email**: Must include "@".
   - **Password**: At least 8 characters with one uppercase, one lowercase, one number, and one special character.
   - **Phone Number**: Format as `+CountryCode Number`.
   - **PAN & Aadhar Numbers**: Validated using specific patterns.
6. **Submission Redirect**: Displays submitted details in a structured table on a new route after successful submission.

---

## Live Demo

[Live Demo Link](#) 

---

## Screenshots

### 1. Form Page
![Form_Page_1](#)

![Form_Page_2](#)

*Description: This screenshots shows the form with various fields, real-time validation, and error messages.*

### 2. Success Page
![Success_Page](#)  

*Description: This screenshot displays the structured table with all submitted details.*

---

## Technologies Used

- React
- Tailwind CSS
- React Router DOM

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone 
   cd celebal_week_1
2. Install dependencies:
    ```bash
    npm install
3. Run the development server:
    ```bash
    npm run dev
