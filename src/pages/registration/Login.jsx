import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';

function Login() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);

            toast.success("Login successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            localStorage.setItem('user', JSON.stringify(result));
            
            // Add a small delay to ensure redirection happens smoothly
            setTimeout(() => {
                navigate('/');
            }, 500); // Delay of 500ms

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false); // Set loading to false even on error
        }
    };

    return (
        <div className='flex items-center justify-center h-screen bg-blue-100'>
            {loading && <Loader />}
            <div className='w-full p-10 bg-white shadow-xl rounded-xl sm:w-96'>
                <h1 className='mb-6 text-2xl font-semibold text-center text-blue-600'>Login</h1>
                
                <div>
                    <input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-2 mb-4 text-blue-600 rounded-lg outline-none bg-blue-50 placeholder:text-blue-300'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-4'>
                    <button
                        id='loginButton'
                        onClick={login}
                        className='w-full px-4 py-2 font-bold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-center text-blue-600'>
                        Don't have an account? <Link className='font-semibold text-blue-500' to={'/signup'}>Sign Up</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
