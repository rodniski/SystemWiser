// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, empresa, interesse, mensagem } = req.body;

    // Configurar o transporte do Nodemailer
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true', // true para 465, false para outras portas
      auth: {
        user: process.env.EMAIL_USER, // Seu email
        pass: process.env.EMAIL_PASS, // Sua senha ou token de aplicativo
      },
    });

    // Configurar o conteúdo do email
    let mailOptions = {
      from: `"Site da Consultoria" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // Email que receberá os leads
      subject: 'Novo Lead do Formulário de Contato',
      html: `
        <h1>Novo Lead</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Interesse:</strong> ${interesse}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    };

    try {
      // Enviar o email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email enviado com sucesso' });
    } catch (error) {
      console.error('Erro ao enviar o email:', error);
      return res.status(500).json({ message: 'Erro ao enviar o email' });
    }
  } else {
    return res.status(405).json({ message: 'Método não permitido' });
  }
}
