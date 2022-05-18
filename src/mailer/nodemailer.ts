import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'margaret.brick@inbox.ru',
            pass: 'VsaMf8n8gWXvzFtf6hCQ'
        }
    },
    {
        from: 'Margaret Brick <margaret.brick@inbox.ru>',
    }
);

export const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent ', info)
    })
}

