import App from './App';
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmEmailSent, setConfirmEmailSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && !email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    if (!password || password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    // Simulate sending confirmation email
    if (!isLogin) {
      setConfirmEmailSent(true);
      setTimeout(() => {
        setConfirmEmailSent(false);
        onAuth(); // simulate successful sign-up/login
      }, 2000); // after 2 seconds
    } else {
      onAuth(); // simulate login
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl border border-gray-700 bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">Welcome to Frontline Autos</h2>
        {confirmEmailSent ? (
          <p className="text-green-400 text-center mb-6 animate-pulse">
            Confirmation email sent! Redirecting...
          </p>
        ) : (
          <>
            <h3 className="text-xl mb-6 text-center">{isLogin ? 'Sign In' : 'Create Account'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              {!isLogin && (
                <p className="text-xs text-gray-400 mt-1">
                  A confirmation email will be sent upon registration.
                </p>
              )}

              <button
                type="submit"
                className="mt-4 w-full py-3 bg-red-600 hover:bg-red-700 transition duration-300 rounded text-white font-semibold"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>

              <p className="text-center mt-4 text-sm">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-red-500 hover:text-red-400 underline"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
