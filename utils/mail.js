const mailtemplate = () => {
  return `<!DOCTYPE html>
  <html>
  <head>
    <style>
      /* Reset some default styles for better consistency */
      body, p {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
  
      /* Style for the email container */
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #f4f4f4;
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      }
  
      /* Header styles */
      .header {
        text-align: center;
        background-color: #44bd32;
        color: #fff;
        padding: 30px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
  
      .header h1 {
        font-size: 36px;
      }
  
      /* Content styles */
      .content {
        padding: 30px;
        background-color: #fff;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
  
      .content p {
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 20px;
      }
  
      /* Call to action button */
      .cta-button {
        text-align: center;
        margin-top: 30px;
      }
  
      .cta-button a {
        display: inline-block;
        padding: 16px 32px;
        background-color: #44bd32;
        color: #fff;
        text-decoration: none;
        border-radius: 8px;
        font-size: 20px;
        transition: background-color 0.3s;
      }
  
      .cta-button a:hover {
        background-color: #3a9b29;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Congratulations! You've Been Shortlisted for Our Coding Assessment</h1>
      </div>
      <div class="content">
        <p>Dear [Candidate's Name],</p>
        <p>We are thrilled to inform you that you have been shortlisted for our online coding assessment as part of the evaluation process for the Software Developer position at [Your Company Name]. Your qualifications and experience have impressed our team, and we believe you have the potential to be a valuable addition to our development team.</p>
        <p><strong>Assessment Details:</strong></p>
        <p>The coding assessment is designed to evaluate your software development skills and problem-solving abilities. It will take place online and is scheduled for:</p>
        <p><strong>Date:</strong> October 17, 2023<br><strong>Start Time:</strong> 11:00 AM (IST)<br><strong>Duration:</strong> 3 hours</p>
        <p>You can access the assessment by clicking on the following link:</p>
        <p><a href="[Assessment Link]">Access Assessment</a></p>
        <p>Instructions and additional details for the assessment will be provided through the assessment link. If you have any questions or need assistance, please do not hesitate to contact us at [Contact Email or Phone Number].</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

module.exports = mailtemplate;
