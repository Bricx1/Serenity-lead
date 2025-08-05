import React, { useState } from 'react';
import { Search, User, Calendar, FileText, Camera, Stethoscope, Settings, BarChart3, Users, HelpCircle, Menu, Bell, UserCircle, ChevronLeft, Play, X, Check } from 'lucide-react';

const SerenityPatientReport = () => {
  const [activeSection, setActiveSection] = useState('report');
  const [showSubmissions, setShowSubmissions] = useState(false);

  const submissionHistory = [
    {
      id: 1,
      title: "Medicine ABC - 8 AM",
      date: "Apr 25, 2025",
      status: "incomplete",
      type: "medication",
      hasVideo: false
    },
    {
      id: 2,
      title: "Medicine XYX - After Breakfast",
      date: "Apr 25, 2025",
      status: "incomplete",
      type: "medication",
      hasVideo: false
    },
    {
      id: 3,
      title: "Medicine ABC - After Dinner",
      date: "Apr 25, 2025",
      status: "completed",
      type: "medication",
      hasVideo: true,
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 4,
      title: "XYZ Dose",
      date: "Apr 25, 2025",
      status: "completed",
      type: "medication",
      hasVideo: true,
      thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Morning Dose - 8AM",
      date: "Apr 25, 2025",
      status: "completed",
      type: "medication",
      hasVideo: true,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Morning Dose - 8AM",
      date: "Apr 25, 2025",
      status: "completed",
      type: "medication",
      hasVideo: true,
      thumbnail: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 7,
      title: "Morning Dose - 8AM",
      date: "Apr 25, 2025",
      status: "completed",
      type: "medication",
      hasVideo: true,
      thumbnail: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=60&h=60&fit=crop&crop=center"
    }
  ];

  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', key: 'dashboard' },
    { icon: Calendar, label: 'Calendar', key: 'calendar' },
    { icon: FileText, label: 'Take a Report', key: 'report', active: true },
    { icon: Camera, label: 'Take Video', key: 'video' },
    { icon: Stethoscope, label: 'Doctors and Nurses', key: 'doctors' }
  ];

  const othersItems = [
    { icon: Settings, label: 'Settings', key: 'settings' },
    { icon: FileText, label: 'Reports', key: 'reports' },
    { icon: Users, label: 'Accounts', key: 'accounts' },
    { icon: HelpCircle, label: 'Help', key: 'help' }
  ];

  if (showSubmissions) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => setShowSubmissions(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Your Submission History</h1>
          <div className="w-10"></div>
        </div>

        {/* Submissions Content */}
        <div className="px-4 py-6">
          <p className="text-gray-600 mb-6">View your submission video submission record.</p>
          
          <div className="space-y-4">
            {submissionHistory.map((submission) => (
              <div key={submission.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {submission.hasVideo ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={submission.thumbnail} 
                          alt="Video thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <div className="flex flex-col space-y-1">
                          <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900">{submission.title}</h3>
                    <p className="text-sm text-gray-500">{submission.date}</p>
                    <p className={`text-sm font-medium ${
                      submission.status === 'completed' ? 'text-teal-500' : 'text-red-500'
                    }`}>
                      {submission.status === 'completed' ? 'Completed' : 'Incomplete'}
                    </p>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  {submission.status === 'completed' ? (
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-teal-500 text-white flex flex-col">
        {/* User Profile */}
        <div className="p-6 border-b border-teal-400">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold">John D</h2>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="flex-1 py-6">
          <div className="px-6 mb-2">
            <p className="text-xs font-semibold text-teal-200 uppercase tracking-wider">MENU</p>
          </div>
          
          <nav className="space-y-1 px-3">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  item.active || activeSection === item.key
                    ? 'bg-teal-400 text-white'
                    : 'text-teal-100 hover:bg-teal-400 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Others Section */}
          <div className="px-6 mt-8 mb-2">
            <p className="text-xs font-semibold text-teal-200 uppercase tracking-wider">OTHERS</p>
          </div>
          
          <nav className="space-y-1 px-3">
            {othersItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === item.key
                    ? 'bg-teal-400 text-white'
                    : 'text-teal-100 hover:bg-teal-400 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-teal-400">
          <div className="text-xs text-teal-200">
            <p className="font-semibold">Serenity</p>
            <p>A place that we all want</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                <UserCircle className="w-8 h-8 text-teal-500" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Take a Report</h1>
              <p className="text-gray-600 mt-1">This section is under development.</p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Create New Report</h3>
                <p className="text-sm text-gray-600">Generate a comprehensive patient report with current status and progress.</p>
              </div>

              <button 
                onClick={() => setShowSubmissions(true)}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Submission History</h3>
                <p className="text-sm text-gray-600">View and manage your video submission records and medication logs.</p>
              </button>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Progress Analytics</h3>
                <p className="text-sm text-gray-600">View detailed analytics and progress charts for patient rehabilitation.</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Morning medication completed</p>
                        <p className="text-sm text-gray-500">Apr 25, 2025 at 8:00 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Video submission uploaded</p>
                        <p className="text-sm text-gray-500">Apr 24, 2025 at 6:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Weekly report generated</p>
                        <p className="text-sm text-gray-500">Apr 22, 2025 at 10:15 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SerenityPatientReport;