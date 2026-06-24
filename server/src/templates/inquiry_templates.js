exports.userInquiryTemplate = ({
  name,
}) => `
  <h2>Thank You for Contacting Mogal PG</h2>

  <p>Hello ${name},</p>

  <p>
    Thank you for reaching out to us.
    We have received your inquiry and
    our team will contact you shortly.
  </p>

  <p>
    Regards,<br/>
    Mogal PG Team
  </p>
`;

exports.adminInquiryTemplate = ({
  name,
  email,
  phone,
  message,
}) => `
  <h2>New Inquiry Received</h2>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>

  <p>
    <strong>Message:</strong>
  </p>

  <p>${message}</p>
`;