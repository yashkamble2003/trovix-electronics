import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true);
        setError("");  // Reset error message

        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required");
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setLoading(false);
            return toast.error("Please enter a valid email address");
        }

        // Password validation (minimum 6 characters)
        if (password.length < 6) {
            setLoading(false);
            return toast.error("Password must be at least 6 characters");
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);
            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now(),
            };

            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);
            toast.success("Signup Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading(false);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-blue-100">
            {loading && <Loader />}
            <div className="w-full px-10 py-10 bg-white shadow-xl rounded-xl sm:w-96">
                <div>
                    <h1 className="mb-4 text-xl font-bold text-center text-blue-600">Signup</h1>
                </div>
                {error && <div className="mb-4 text-center text-red-500">{error}</div>} {/* Display error messages */}
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        className="w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300"
                        placeholder="Name"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300"
                        placeholder="Password"
                    />
                </div>
                <div className="flex justify-center mb-4">
                    <button
                        onClick={signup}
                        className="w-full px-4 py-2 font-bold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className="text-center text-blue-600">
                        Have an account?{' '}
                        <Link className="font-semibold text-blue-500" to={'/login'}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
