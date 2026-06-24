const Inquiry = require("../model/inquiry_model");
const { sendEmail } =
  require("../services/email_service");

const {
  userInquiryTemplate,
  adminInquiryTemplate,
} = require("../templates/inquiry_templates");

// Public - Create inquiry
exports.createInquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      message,
    });

    // Send emails
    try {
      // Email to User
      await sendEmail({
        to: email,
        subject: "Thank you for contacting Mogal PG",
        html: userInquiryTemplate({
          name,
        }),
      });

      // Email to Admin
      await sendEmail({
        to:
          process.env.ADMIN_EMAIL ||
          process.env.SMTP_USER,
        subject: "New Inquiry Received",
        html: adminInquiryTemplate({
          name,
          email,
          phone,
          message,
        }),
      });
    } catch (err) {
      console.error(
        "Inquiry email failed:",
        err.message
      );
    }

    res.status(201).json({
      success: true,
      data: inquiry,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
