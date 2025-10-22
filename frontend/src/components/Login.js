import { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsInitialLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleAuth = async () => {
    setLoading(true);
    setError("");
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(isSignup ? "Signing up..." : "Logging in...");
    } catch (error) {
      setError("Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isInitialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                backgroundColor: i % 3 === 0 ? '#FFB22C' : '#854836',
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border-4"
                  style={{
                    width: `${80 + i * 30}px`,
                    height: `${80 + i * 30}px`,
                    borderColor: i === 0 ? '#FFB22C' : i === 1 ? '#854836' : '#000000',
                    borderTopColor: 'transparent',
                    animation: `spin ${2 - i * 0.3}s linear infinite`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
              <div
                className="relative rounded-full flex items-center justify-center"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#FFB22C',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              >
                <svg
                  className="w-10 h-10"
                  style={{ color: '#F7F7F7' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </div>
            </div>
          </div>

          <h1
            className="text-4xl font-bold mb-4"
            style={{
              color: '#000000',
              animation: 'fadeInUp 1s ease-out',
            }}
          >
            Welcome Back
          </h1>
          
          <p className="text-lg mb-8" style={{ color: '#854836' }}>
            {loadingProgress < 30 ? 'Initializing...' : 
             loadingProgress < 70 ? 'Loading your workspace...' : 
             'Almost ready...'}
          </p>

          <div className="w-80 mx-auto">
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: '#E0E0E0' }}
            >
              <div
                className="h-full transition-all duration-300 ease-out relative"
                style={{
                  width: `${loadingProgress}%`,
                  background: 'linear-gradient(90deg, #FFB22C 0%, #854836 100%)',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'shimmer 1.5s infinite',
                  }}
                />
              </div>
            </div>
            <p className="mt-2 text-sm" style={{ color: '#854836' }}>
              {loadingProgress}%
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: '#FFB22C',
                  animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, 20px) scale(1.1); }
          }
          @keyframes spin {
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              backgroundColor: i % 2 === 0 ? '#FFB22C' : '#854836',
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div
        className="max-w-md w-full mx-4 p-8 rounded-2xl shadow-2xl relative z-10 backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          animation: 'slideIn 0.6s ease-out',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{
            background: 'linear-gradient(90deg, #FFB22C 0%, #854836 100%)',
          }}
        />

        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{
            color: '#000000',
            animation: 'fadeIn 0.8s ease-out',
          }}
        >
          {isSignup ? (
            <span className="flex items-center justify-center gap-2">
              <span>Create Account</span>
              <svg className="w-6 h-6" style={{ color: '#FFB22C' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>Welcome Back</span>
              <svg className="w-6 h-6" style={{ color: '#854836' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
          )}
        </h2>
        
        {error && (
          <div
            className="mb-6 p-4 rounded-lg relative overflow-hidden"
            style={{
              backgroundColor: 'rgba(133, 72, 54, 0.1)',
              border: '2px solid #854836',
              animation: 'shake 0.5s ease-in-out',
            }}
          >
            <p style={{ color: '#854836' }} className="font-medium">{error}</p>
          </div>
        )}
        
        <div className="space-y-6">
          <div className="relative group">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold transition-colors"
              style={{ color: '#000000' }}
            >
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pr-10 border-2 rounded-lg transition-all duration-300 focus:outline-none"
                style={{
                  borderColor: '#E0E0E0',
                  backgroundColor: '#F7F7F7',
                }}
                onFocus={(e) => e.target.style.borderColor = '#FFB22C'}
                onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50"
                style={{ color: '#854836' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
          </div>
          
          <div className="relative group">
            <label
              htmlFor="password"
              className="block mb-2 font-semibold"
              style={{ color: '#000000' }}
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-10 border-2 rounded-lg transition-all duration-300 focus:outline-none"
                style={{
                  borderColor: '#E0E0E0',
                  backgroundColor: '#F7F7F7',
                }}
                onFocus={(e) => e.target.style.borderColor = '#FFB22C'}
                onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: '#854836' }}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {isSignup && (
              <p className="text-xs mt-2" style={{ color: '#854836' }}>
                Password must be at least 6 characters
              </p>
            )}
          </div>
          
          <button
            onClick={handleAuth}
            disabled={loading}
            className="w-full py-3 px-4 rounded-lg text-white font-bold text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg relative overflow-hidden"
            style={{
              background: loading ? '#CCCCCC' : 'linear-gradient(135deg, #FFB22C 0%, #854836 100%)',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? (
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: '#F7F7F7',
                      animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <span className="flex items-center gap-2">
                {isSignup ? 'Create Account' : 'Sign In'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            )}
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
            className="font-medium transition-colors duration-300 hover:underline"
            style={{ color: '#854836' }}
          >
            {isSignup ? (
              <span className="flex items-center justify-center gap-1">
                Already have an account?
                <span style={{ color: '#FFB22C' }}>Sign In</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1">
                Don't have an account?
                <span style={{ color: '#FFB22C' }}>Sign Up</span>
              </span>
            )}
          </button>
        </div>

        <div
          className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-20"
          style={{
            backgroundColor: '#FFB22C',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-4 left-4 w-8 h-8 rounded-full opacity-20"
          style={{
            backgroundColor: '#854836',
            animation: 'pulse 3s ease-in-out infinite 1s',
          }}
        />
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}

export default Login;