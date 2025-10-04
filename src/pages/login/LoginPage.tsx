import React, { useRef } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
    const formRef = useRef(null);
    const nav = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = formRef.current; //aqui va la info

        if (form) {
            const formData = new FormData(form);
            localStorage.setItem("user", formData.get("username") as string);
            nav("/catalog");
        }
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-pink-900 text-5xl font-bold">Login now!!</h1>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="card bg-fuchsia-50 w-full max-w-sm shadow-2xl">
                    <div className="card bg-fuchsia-50 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label text-pink-800">User name</label>
                                <input type="text" className="input" placeholder="Username" name="username" />
                                <label className="label text-pink-800">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />
                                <button className="btn bg-fuchsia-900  text-white mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
