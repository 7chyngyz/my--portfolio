"use client"
import axios from "axios";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormTelegram {
    name: string;
    email: string;
    message: string;
}

/// imports from ENV
const TG_TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
const CHAD_ID = process.env.NEXT_PUBLIC_TG_CHAD_ID;
/// imports from ENV

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<IFormTelegram>({
        mode: "onChange",
    });

    const botsMessageModel = (data: IFormTelegram) => {
        let messageTG = `User's name: <b>${data.name}</b>\n`;
        messageTG += `User's email: <b>${data.email}</b>\n`;
        messageTG += `User's message for you: <b>${data.message}</b>\n`;
        return messageTG;
    };
    const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
        try {
            await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
                chat_id: CHAD_ID,
                parse_mode: "html",
                text: botsMessageModel(data),
            });
            reset();
            toast.success("Сообщение успешно отправлено!", { className: "toast-custom", autoClose: 2000 });
        } catch (error) {
            toast.error("Пожалуйста, попробуйте позже.", { className: "toast-custom", autoClose: 2000 });
            console.log(error);
        }
    };

    return (
        <section id="contacts" className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-semibold text-gray-300 mb-12">Contact Me</h2>
                <p className="text-gray-400 text-lg mb-8">
                    I'm open to work opportunities and collaborations. Feel free to reach out!
                </p>
                <form
                    action="#"
                    method="POST"
                    className="space-y-6 max-w-lg mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your name"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your email"
                            {...register('email', { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Write your message"
                            {...register('message', { required: true })}
                        ></textarea>
                    </div>
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-3 px-8 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
