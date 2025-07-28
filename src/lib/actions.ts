"use server";

import { z } from 'zod';

// Schema for Partner Registration
const partnerFormSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  category: z.string(),
  tradeRegister: z.instanceof(File),
});

export async function handlePartnerRegistration(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    const parsed = partnerFormSchema.safeParse(data);

    if (!parsed.success) {
      return { success: false, message: 'البيانات المدخلة غير صالحة.' };
    }

    // In a real application, you would handle the file upload here,
    // save it to a storage service (like Firebase Storage),
    // and then save the partner's information to a database.
    
    console.log("New Partner Registration:", {
        name: parsed.data.name,
        phone: parsed.data.phone,
        email: parsed.data.email,
        category: parsed.data.category,
        fileName: parsed.data.tradeRegister.name,
        fileSize: parsed.data.tradeRegister.size,
    });
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'تم استلام طلبك بنجاح.' };
  } catch (error) {
    console.error("Registration Error:", error);
    return { success: false, message: 'حدث خطأ غير متوقع.' };
  }
}

// Schema for Contact Form
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function handleContactForm(data: z.infer<typeof contactFormSchema>) {
    try {
        const parsed = contactFormSchema.safeParse(data);
        if (!parsed.success) {
            return { success: false, message: 'Invalid input data.' };
        }

        // In a real application, you would send an email, save to a database, or notify a support system.
        console.log("New Contact Form Submission:", parsed.data);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return { success: true, message: 'Your message has been sent successfully!' };

    } catch (error) {
        console.error("Contact Form Error:", error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
