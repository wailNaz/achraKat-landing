"use server";

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  category: z.string(),
  tradeRegister: z.instanceof(File),
});

export async function handlePartnerRegistration(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    const parsed = formSchema.safeParse(data);

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
