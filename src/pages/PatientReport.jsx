import React, { useState } from 'react';
import { 
  User, 
  MessageCircle, 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  CreditCard, 
  HelpCircle,
  Bell,
  Search,
  Phone,
  Video,
  Send,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const PatientReport = () => {
  const [selectedPatient, setSelectedPatient] = useState('John D');
  const [activeSection, setActiveSection] = useState('reports');
  const [message, setMessage] = useState('');

  const patients = [
    { id: 1, name: 'John D', avatar: 'JD', online: true },
    { id: 2, name: 'Emily N', avatar: 'EN', online: true },
    { id: 3, name: 'Mark A', avatar: 'MA', online: false },
    { id: 4, name: 'Olivia S', avatar: 'OS', online: true },
    { id: 5, name: 'David L', avatar: 'DL', online: false }
  ];

  const submissionHistory = [
    { 
      id: 1, 
      title: 'Medicine ABC - 8 AM', 
      date: 'Apr 25, 2025', 
      status: 'incomplete',
      avatar: '💊'
    },
    { 
      id: 2, 
      title: 'Medicine XYX - After Breakfast', 
      date: 'Apr 25, 2025', 
      status: 'incomplete',
      avatar: '💊'
    },
    { 
      id: 3, 
      title: 'Medicine ABC - After Dinner', 
      date: 'Apr 25, 2025', 
      status: 'completed',
      avatar: '🍽️'
    },
    { 
      id: 4, 
      title: 'XYZ Dose', 
      date: 'Apr 25, 2025', 
      status: 'completed',
      avatar: '💉'
    },
    { 
      id: 5, 
      title: 'Morning Dose - 8 AM', 
      date: 'Apr 25, 2025', 
      status: 'completed',
      avatar: '🌅'
    }
  ];

  const conversations = [
    {
      name: 'Nurse Emily',
      message: 'Hello John! How are you feeling today?',
      time: '10:30 AM',
      unread: false
    },
    {
      name: 'Nurse Emily',
      message: "That's great to hear! Any pain or discomfort?",
      time: '10:31 AM',
      unread: false
    },
    {
      name: 'Nurse Emily',
      message: 'Perfect. Keep taking your prescribed medication and we\'ll check again next week.',
      time: '10:33 AM',
      unread: false
    }
  ];

  const sidebarItems = [
    { icon: MessageCircle, label: 'Dashboard', key: 'dashboard' },
    { icon: Calendar, label: 'Take a Report', key: 'reports' },
    { icon: FileText, label: 'Take Some', key: 'take-some' },
    { icon: Users, label: 'Doctors and Nurses', key: 'doctors' }
  ];

  const bottomSidebarItems = [
    { icon: Settings, label: 'Settings', key: 'settings' },
    { icon: CreditCard, label: 'Payment', key: 'payment' },
    { icon: User, label: 'Accounts', key: 'accounts' },
    { icon: HelpCircle, label: 'Help', key: 'help' }
  ];

  const StatusIcon = ({ status }) => {
    if (status === 'completed') {
      return <CheckCircle className="w-6 h-6 text-teal-500" />;
    } else if (status === 'incomplete') {
      return <XCircle className="w-6 h-6 text-red-500" />;
    }
    return <Clock className="w-6 h-6 text-yellow-500" />;
  };

  const renderPatientReports = () => (
    <div className="flex-1 bg-gray-50">
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Your Submission History</h2>
            <p className="text-gray-600 text-sm mt-1">View your submission video submission record.</p>
          </div>
          
          <div className="p-4">
            {submissionHistory.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-xl">
                    {item.avatar}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'completed' 
                        ? 'bg-teal-100 text-teal-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {item.status === 'completed' ? 'Completed' : 'Incomplete'}
                    </span>
                  </div>
                </div>
                <StatusIcon status={item.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="flex-1 bg-gray-50">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg font-medium">
                Take Home
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Patient Report
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-gray-600" />
            <Calendar className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Alert Card */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border-l-4 border-yellow-400">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">Drug Test Alert - July 3, 2025</h3>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Serenity Clinic - Lab Room 2</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>10:30 AM</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Pending
              </span>
            </div>
          </div>
        </div>

        {/* Connect with Doctors & Nurses */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Connect with Doctors & Nurses Instantly:</h2>
          
          <div className="grid grid-cols-4 gap-4">
            {/* Dr. Olivia Smith */}
            <div className="text-center">
              <div className="relative mx-auto mb-3">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-center">
                    <div className="text-xs text-teal-600 font-medium">Dr.</div>
                    <div className="text-xs text-teal-600 font-medium">Olivia</div>
                    <div className="text-xs text-teal-600 font-medium">Smith</div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="font-medium text-gray-800 text-sm">Dr. Olivia Smith</h3>
              <p className="text-xs text-gray-600">Doctor</p>
            </div>

            {/* Nurse Emily - Featured */}
            <div className="text-center border-2 border-teal-200 rounded-lg p-3 bg-teal-50">
              <div className="relative mx-auto mb-3">
                <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-center">
                    <div className="text-xs text-teal-700 font-medium">Nurse</div>
                    <div className="text-xs text-teal-700 font-medium">Emily</div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="font-medium text-gray-800 text-sm">Nurse Emily</h3>
              <p className="text-xs text-gray-600">Doctor</p>
            </div>

            {/* Dr. Mark Allen */}
            <div className="text-center">
              <div className="relative mx-auto mb-3">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-center">
                    <div className="text-xs text-teal-600 font-medium">Dr.</div>
                    <div className="text-xs text-teal-600 font-medium">Mark</div>
                    <div className="text-xs text-teal-600 font-medium">Allen</div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="font-medium text-gray-800 text-sm">Dr. Mark Allen</h3>
              <p className="text-xs text-gray-600">Doctor</p>
            </div>

            {/* Dr. Sarah Johnson */}
            <div className="text-center">
              <div className="relative mx-auto mb-3">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-center">
                    <div className="text-xs text-teal-600 font-medium">Dr.</div>
                    <div className="text-xs text-teal-600 font-medium">Sarah</div>
                    <div className="text-xs text-teal-600 font-medium">Johnson</div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="font-medium text-gray-800 text-sm">Dr. Sarah Johnson</h3>
              <p className="text-xs text-gray-600">Doctor</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Action Cards */}
          <div className="space-y-6">
            {/* View Reports */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">View Reports</h3>
              <p className="text-gray-600 text-sm">Access your medical reports</p>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Schedule</h3>
              <p className="text-gray-600 text-sm">Book appointments</p>
            </div>
          </div>

          {/* Middle Column - My Documents */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">My Documents</h3>
            <div className="space-y-4">
              {/* Plan of Care */}
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-800">Plan of Care - June 2025</h4>
                  <p className="text-xs text-gray-500">Category: Medication</p>
                  <p className="text-xs text-gray-500">Uploaded On: June 15, 2025</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </button>
              </div>

              {/* Lab Results */}
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-800">Lab Results - Blood Panel</h4>
                  <p className="text-xs text-gray-500">Category: Labs</p>
                  <p className="text-xs text-gray-500">Uploaded On: July 1, 2025</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </button>
              </div>

              {/* Consent Form */}
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-800">Consent Form - Telehealth</h4>
                  <p className="text-xs text-gray-500">Category: Legal</p>
                  <p className="text-xs text-gray-500">Uploaded On: June 15, 2025</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Help */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Quick Help?</h3>
            <p className="text-gray-600 text-sm mb-4">Connect directly with a healthcare Support Team:</p>
            
            <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-white font-medium mb-1">Connect Now</h4>
                <p className="text-white text-xs opacity-90">Get quick support from your care team</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Nurse (Available 24/7)</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Doctor (Based on availability)</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Schedule a Consultation</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Request a Callback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommunication = () => (
    <div className="flex-1 bg-white">
      <div className="flex h-full">
        {/* Doctor/Nurse Selection */}
        <div className="w-64 bg-white border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Connect the doctor and nurses instantly:</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="relative">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-medium">
                NE
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Nurse Emily</h3>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Video className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {conversations.map((conv, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  NE
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">{conv.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{conv.time}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-end">
              <div className="bg-teal-500 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">Hi Doctor. I'm feeling much better after the treatment.</p>
                <p className="text-xs text-teal-200 mt-1">10:32 AM</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-teal-500 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">Just need some rest, but it's manageable.</p>
                <p className="text-xs text-teal-200 mt-1">10:34 AM</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Patient List */}
        <div className="w-64 bg-gray-50 border-l border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800">Patients</h3>
            <Bell className="w-5 h-5 text-gray-600" />
          </div>
          <div className="space-y-3">
            {patients.map((patient) => (
              <div key={patient.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white cursor-pointer">
                <div className="relative">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {patient.avatar}
                  </div>
                  {patient.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{patient.name}</p>
                  <p className="text-xs text-gray-500">{patient.online ? 'Online' : 'Last seen 2h ago'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-teal-500 text-white flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold">{selectedPatient}</h2>
              <p className="text-teal-200 text-sm">Patient</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-white font-medium mb-3">MENU</h3>
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeSection === item.key ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">OTHERS</h3>
            <nav className="space-y-1">
              {bottomSidebarItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeSection === item.key ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-auto p-6">
          <div className="bg-teal-600 rounded-lg p-4 text-center">
            <h4 className="font-medium mb-2">Serenity</h4>
            <p className="text-xs text-teal-200 mb-3">A place that we all need</p>
            <p className="text-xs text-teal-200">All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 w-64"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-medium">
                JD
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        {activeSection === 'reports' && renderPatientReports()}
        {activeSection === 'doctors' && renderCommunication()}
        {activeSection === 'dashboard' && renderDashboard()}
        {!['reports', 'doctors', 'dashboard'].includes(activeSection) && (
          <div className="flex-1 p-6 bg-gray-50">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {sidebarItems.find(item => item.key === activeSection)?.label || 
                 bottomSidebarItems.find(item => item.key === activeSection)?.label || 
                 'Page'}
              </h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientReport;