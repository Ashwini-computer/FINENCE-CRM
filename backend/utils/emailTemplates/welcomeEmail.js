// utils/emailTemplates/welcomeEmail.js

const generateWelcomeEmail = (token) => {
    return `
   <html>
  <body style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <h2 style="color: #004aad; text-align: center;">Welcome to FinancesBazar</h2>
      
      <p>Dear Customer,</p>
      <p>Thank you for choosing <strong>FinancesBazar</strong> — India’s trusted financial marketplace for:</p>
      
      <ul>
        <li>
          🧾 <a href="https://financesbazar.com/cibil-check" style="color: #004aad; text-decoration: none;">Credit Score Checks (CIBIL)</a>
        </li>
        <li>
          💳 <a href="https://financesbazar.com/credit-cards" style="color: #004aad; text-decoration: none;">Credit Cards</a>
        </li>
        <li>
          🏠 <a href="https://financesbazar.com/home-loan" style="color: #004aad; text-decoration: none;">Home & Personal Loans</a>
        </li>
        <li>
          🚗 <a href="https://financesbazar.com/loan-against-car" style="color: #004aad; text-decoration: none;">Loan Against Car</a>
        </li>
        <li>
          🔄 <a href="https://financesbazar.com/loan-transfer" style="color: #004aad; text-decoration: none;">Loan Transfer Options</a>
        </li>
        <li>
          📊 <a href="https://financesbazar.com/investments" style="color: #004aad; text-decoration: none;">Investment & Insurance Plans</a>
        </li>
      </ul>

      <p style="margin-top: 20px;">Click below to explore our offers and complete your profile:</p>

      <p style="text-align: center; margin-top: 20px;">
        <a href="https://financesbazar.com/myaccount/dashboard" 
           style="background-color: #004aad; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">
          Go to My Dashboard
        </a>
      </p>

      <p style="text-align: center; margin-top: 10px;">
        <a href="https://financesbazar.com/offers" 
           style="color: #004aad; text-decoration: underline;">
          🔗 View Latest Offers
        </a>
      </p>

      <p style="margin-top: 30px;">Warm regards,<br/>Team FinancesBazar</p>

      <hr/>
      <p style="font-size: 12px; color: gray; text-align: center;">
        You received this email because you registered on FinancesBazar. If you didn’t, please ignore it.
      </p>
    </div>
  </body>
</html>
  `;
};

module.exports = generateWelcomeEmail;
