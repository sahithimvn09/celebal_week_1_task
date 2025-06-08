# React Form with Validation Without Third-Party Libraries

A React-based form application that implements client-side validation without the use of third-party libraries. The application ensures all required fields are validated before submission and displays the form details on a new route upon successful submission.

---

## Features

1. **Validation for Required Fields**: Ensures that all mandatory fields are correctly filled before enabling the form submission.
2. **Real-Time Error Messages**: Displays appropriate error messages as users input invalid data.
3. **Show/Hide Password**: A toggle button to show or hide the password.
4. **Dynamic Dropdowns**: Country and city fields dynamically update based on the user's selection.
5. **Field-Specific Validations**:
   - **First Name & Last Name**: Alphabets and spaces only.
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
![Form_Page_1](https://github.com/sahithimvn09/celebal_week_1_task/blob/fe0361c521b1348979ded3a554724f94a1c5e83e/Screenshot%202025-06-08%20175018.png)

![Form_Page_2](https://github.com/sahithimvn09/celebal_week_1_task/blob/fe0361c521b1348979ded3a554724f94a1c5e83e/Screenshot%202025-06-08%20174517.png)

*Description: This screenshots shows the form with various fields, real-time validation, and error messages.*

### 2. Success Page
![Success_Page](https://github.com/sahithimvn09/celebal_week_1_task/blob/fe0361c521b1348979ded3a554724f94a1c5e83e/Screenshot%202025-06-08%20174625.png)  

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
   git clone https://github.com/sahithimvn09/celebal_week_1_task.git
   cd celebal_week_1_task
2. Install dependencies:
    ```bash
    npm install
3. Run the development server:
    ```bash
    npm run dev
