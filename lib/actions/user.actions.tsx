'use server'
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
  name?: string;
  email?: string;
  type?: string;
};

export const sendForm = async ({ formData }: {formData: FormData}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Medinarino <onboarding@resend.dev>',
      to: ['cristiandavid.vj@gmail.com'],
      subject: 'MediNariño - Registro',
      react: await EmailTemplate({
        name: formData.name ?? '',
        email: formData.email ?? '',
        type: formData.type ?? ''
      }),
    });

    if (error) {
      return { ok: false, error };
    }

    return { ok: true, data };
  } catch (error) {
    return { ok: false, error };
  }
};