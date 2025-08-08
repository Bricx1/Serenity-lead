import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, User, Lock, Mail } from 'lucide-react';

export default function SerenityLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('patient');
  const navigate = useNavigate();

  const sampleCredentials = {
    patient: {
      email: 'patient@serenity.com',
      password: 'patient123',
      redirect: '/serenity-connect'

    },
    doctor: {
      email: 'doctor@serenity.com',
      password: 'doctor123',
      redirect: '/dashboard/doctor'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = sampleCredentials[userType];

    if (email === creds.email && password === creds.password) {
      navigate(creds.redirect);
    } else {
      alert('Invalid credentials. Please check your email and password.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel */}
          <div className="lg:w-1/2 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 p-8 lg:p-12 text-white relative overflow-hidden">
            <button onClick={() => navigate(-1)} className="flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            <div className="relative z-10">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Expert care from
                <br />
                top specialists
              </h1>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-lg">Expert care from certified specialists</span>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-lg">Available 24/7 on any device</span>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6" />
                  </div>
                  <span className="text-lg">Private sessions answered within 24 hrs</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              {/* User Type Selector */}
              <div className="flex bg-gray-100 rounded-full p-1 mb-8">
                <button
                  onClick={() => setUserType('patient')}
                  className={`flex-1 flex items-center justify-center py-3 px-4 rounded-full transition-all duration-200 ${
                    userType === 'patient'
                      ? 'bg-teal-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <User className="w-4 h-4 mr-2" />
                  Patient
                </button>
                <button
                  onClick={() => setUserType('doctor')}
                  className={`flex-1 flex items-center justify-center py-3 px-4 rounded-full transition-all duration-200 ${
                    userType === 'doctor'
                      ? 'bg-teal-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <div className="w-4 h-4 mr-2 bg-current rounded-full"></div>
                  Doctor
                </button>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome back</h2>
                <p className="text-gray-600">
                  Log in to your account and we'll get you in to see our {userType === 'patient' ? 'specialists' : 'patients'}.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Email Address"
                      required
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="text-right mt-2">
                    <button type="button" className="text-sm text-teal-600 hover:text-teal-700">
                      Forgot password?
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sign in
                </button>
              </form>

              {/* Serenity Branding */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  Serenity Rehabilitation Center
                </div>
                <p className="text-sm text-gray-500">
                  Your journey to wellness starts here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
