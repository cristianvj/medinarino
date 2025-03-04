import nodemailer from "nodemailer";

export default async function POST(req, res) {
 /*  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }
 */
  const { name, email, message } = req.body;

  // Configura Nodemailer con tu servicio de correo
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Puedes usar otro servicio como SendGrid, Mailgun, etc.
    auth: {
      user: process.env.EMAIL_USER, // Tu email
      pass: process.env.EMAIL_PASS, // Contraseña o app password
    },
  });
  try {
    await transporter.sendMail({
      from: email, 
      to: process.env.EMAIL_RECEIVER, // Tu correo donde recibirás los mensajes
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    });

    return res.status(200).json({ success: true, message: "Correo enviado" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
}