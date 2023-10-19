exports.SendEmail = async (req, res) => {
  const wildcardValue = req.params;
  const wild=req.params.wildcardValue;
  const nodemailer=require('nodemailer')

  const details=wildcardValue[0].split('/')
  const name =details[1];
  const date=details[2] ;
  let user_email=details[3].trim(); 
  let  user_pass=details[4].trim();
  const pass="papa" ;
 

  const Assessment_Link='https://www.hackerrank.com/event/tudip-hiring-challenge'
  
  if (name.search('Aditya')!==-1 && wild!='1234')
  {
    return res.send(`
  <h1>पेट PHASS GAYA</h1>
  <img src="https://i.imgflip.com/4oq7fc.jpg" alt="PAPA" style="width: 100vw; height: 100vh;">
`);
  }

  
  if (!name || !date || !user_email )
  {
    return res.send(`<h1>PAPA SE PERMISSION LO PAHLE </h1>`);
  }
  user_email=details[3].trim(); 
  // user_pass=details[4].trim();





  if (user_pass!==pass)
  {
    return res.send(`<h1>PAPA SE PERMISSION LO PAHLE</h1>
    <img src="https://media.tenor.com/Gn3_Tqa_ubgAAAAC/fuck-you.gif" alt="PAPA" width="500" height="600">  `)
  }
 
    try {
     
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        
        let info = await transporter.sendMail({
            from: 'hiringteam.tudip.technologies@gmail.com',
            to: user_email, // Corrected recipient email address
            subject: "Invitation For Assesmeent",
            html:`<!DOCTYPE html>
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
      <p>Dear ${name},</p>
      <p>We are thrilled to inform you that you have been shortlisted for our online coding assessment as part of the evaluation process for the Software Developer position at Tudip Technologies. Your qualifications and experience have impressed our team, and we believe you have the potential to be a valuable addition to our development team.</p>
      <p><strong>Assessment Details:</strong></p>
      <p>The coding assessment is designed to evaluate your software development skills and problem-solving abilities. It will take place online and is scheduled for:</p>
      <p><strong>Date:</strong> ${date}, 2023<br><strong>Start Time:</strong> 11:00 AM (IST)<br><strong>Duration:</strong> 3 hours</p>
      <p>You can access the assessment by clicking on the following link:</p>
      <p><a href="${Assessment_Link}">Access Assessment</a></p>
      <p>Instructions and additional details for the assessment will be provided through the assessment link.</p>

      <!-- Embed the image below this line -->
      // <img src="https://img.freepik.com/free-vector/fuck-you-symbol-comic-style_23-2148684350.jpg" alt="Image Description">
    </div>
  </div>
</body>
</html>

            `
        });

        console.log(info);
        return res.status(200).send(`
  <div style="height: 100vh; width: 100vw; display: flex; flex-direction: column; gap:4px, justify-content: center; align-items: center; background: url('https://media.tenor.com/CvQuRgoMkVcAAAAC/thankyou-daddy.gif') center/cover no-repeat;">
    <h1>SAY THANK YOU TO PAPA</h1>
    <img src="https://media.tenor.com/CvQuRgoMkVcAAAAC/thankyou-daddy.gif" alt="PAPA" style="width: 100vw; height: 100vh;">
  </div>
`);

          

        // return res.status(200).json({
        //     success: true,
        //     message: 'Mail sent successfully'
        // });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
