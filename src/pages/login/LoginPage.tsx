export default function LoginPage() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-pink-900 text-5xl font-bold">Login now!!</h1>
                </div>

                <div className="card bg-fuchsia-50 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-pink-800">User name</label>
                            <input type="text" className="input" placeholder="Username" />
                            <label className="label text-pink-800">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn bg-fuchsia-900  text-white mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
}
