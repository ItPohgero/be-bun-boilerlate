import { Resend } from 'resend';
import { TemplateEmail } from './template';

const resend = new Resend(Bun.env.RESEND_API_KEY);

type SendMailType = {
    from: string
    to: string[]
    subject: string
    body: 'text' | 'react'
    text?: string
    react?: any
}

export const SendMail = async (props: SendMailType) => {
    const { from = 'Wahyu Agus Arifin <onboarding@resend.dev>', to, subject, body, text } = props
    if (body === 'text') {
        const data = await resend.emails.send({
            from, to,
            subject,
            text: text ?? ''
        });
        return new Response(JSON.stringify(data));
    } else {
        const data = await resend.emails.send({
            from, to,
            subject,
            react: TemplateEmail({ name: 'Vitor' }),
        });
        return new Response(JSON.stringify(data));
    }
}