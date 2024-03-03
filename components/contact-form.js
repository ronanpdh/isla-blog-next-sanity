import { useState } from 'react';
export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);     
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "bfbd690c-31c1-456b-b98e-d29a1bc4e8ba",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-1 justify-items-center align-items-center p-4 rounded-xl border-2 border-orange-200 h-1/2 mt-12 ">
                    <div className="w-3/4 grid grid-rows-3 grid-cols-1 gap-y-0">

                        <label className="mt-2" htmlFor="name">Name</label>
                        <input className=" p-2 mb-4 border-2 rounded-lg border-zinc-300 focus:ring-1 ring-amber-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500" 
                                type="text" name="name" required placeholder="Your name" 
                        />


                        <label className="mt-2" htmlFor="email">Email</label>
                        <input className="p-2 mb-4 border-2 rounded-lg border-zinc-300 focus:ring" type="email" name="email" required placeholder="email@example.com" />


                        <label className="mt-2 mb-4" htmlFor="message">Message</label>
                        <textarea className="p-2 mb-4 border-2 rounded-lg border-zinc-300 focus:ring" name="message" required rows="3" placeholder="Enter Message"></textarea>

                        <button className="p-2 mt-4 mb-8 rounded-xl border-2 text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit">Submit Form</button>
                    </div>
                </div>
            </form>
        </>
    );
}