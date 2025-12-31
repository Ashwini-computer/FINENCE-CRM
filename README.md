# financesbazar-like Financial Marketplace Backend

A comprehensive backend system for a financial marketplace platform offering loans, credit cards, insurance, and investment products.

## Features

- User Authentication with OTP
- KYC Verification
- Credit Score Check
- Loan & Credit Card Applications
- Partner Management
- Bulk Notifications (SMS, Email, WhatsApp)
- Credit Report Generation
- Payment Processing

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe Payments
- Multer (File Uploads)
- Nodemailer (Email)
- Twilio (SMS)

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login with credentials
- GET `/api/auth/me` - Get user profile
- PUT `/api/auth/updatedetails` - Update user details
- PUT `/api/auth/updatepassword` - Update password

### KYC
- POST `/api/kyc/upload` - Upload KYC documents
- GET `/api/kyc/status` - Check KYC status
- PUT `/api/kyc/verify/:id` - Verify KYC (Admin)

### Credit Score
- POST `/api/cibil/check` - Check CIBIL score
- GET `/api/cibil/improvement` - Get improvement suggestions

### Products
- GET `/api/products` - List all products
- POST `/api/products` - Add new product (Admin)
- GET `/api/products/:id` - Get single product
- PUT `/api/products/:id` - Update product (Admin)
- DELETE `/api/products/:id` - Delete product (Admin)

### Applications
- POST `/api/applications` - Submit new application
- GET `/api/applications/user` - Get user applications
- GET `/api/applications/:id` - Get application details
- PUT `/api/applications/:id/status` - Update status (Admin)

### Partners
- GET `/api/partners` - List all partners
- POST `/api/partners` - Add new partner (Admin)
- GET `/api/partners/:id` - Get partner details
- PUT `/api/partners/:id` - Update partner (Admin)

### Offers
- GET `/api/offers` - List all offers
- GET `/api/offers/personalized` - Get personalized offers
- POST `/api/offers` - Create new offer (Admin)

### Loan Services
- POST `/api/loan/transfer` - Apply for loan transfer
- POST `/api/loan/against-car` - Apply for loan against car
- GET `/api/loan/transfer/user` - Get user's loan transfers

### Payments
- POST `/api/payments/create-intent` - Create payment intent
- POST `/api/payments/confirm/:paymentId` - Confirm payment
- GET `/api/payments/report/:reportId` - Download credit report

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with required environment variables
4. Start the server: `npm run dev`

