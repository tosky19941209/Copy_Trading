import emailjs from "@emailjs/browser"

export const emailVerify = async (email: string) => {
    const serviceId = "service_zoxo3fc";
    const templateId = "template_2r0lmjr";
    const verificationCode = 14252;
    const templateParams = {
        from_name: 'Fitness Support',
        subject: 'Welcome to fitness',
        recipient: email,
        message: `Your verification Code is ${verificationCode}`
    };

    const userId = {
        publicKey: 'RiGVJs_nQIaxZ-7mb',
        privateKey: 'XdPsjidVe-8vgopgHcPK_'
    }
    await emailjs.send(serviceId, templateId, templateParams, userId);
    return
}