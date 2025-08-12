import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Calendar, 
  TrendingUp, 
  HelpCircle, 
  ChevronRight, 
  Eye, 
  EyeOff,
  Phone,
  Mail,
  UserCheck,
  CalendarDays,
  Headphones,
  MessageCircle,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
  ChevronUp,
  Settings,
  LogOut,
  Home
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
  const [currentPage, setCurrentPage] = useState('profile');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [notifications, setNotifications] = useState({
    push: true,
    chat: true,
    autoNotify: true,
    reminder: true
  });
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeTab, setActiveTab] = useState('faq');
const navigate = useNavigate();

  // Sidebar Navigation
  const Sidebar = () => (
    <div className="w-80 bg-white shadow-lg h-screen flex flex-col">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-6 text-white">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">James Anderson</h2>
            <p className="text-cyan-100 text-sm">Droliviashah@hospitalmail.com</p>
          </div>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h3 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">Account Settings</h3>
          <div className="space-y-2">
            <SidebarItem 
              icon={<User className="w-5 h-5" />}
              title="Personal Information"
              isActive={currentPage === 'personal-info'}
              onClick={() => setCurrentPage('personal-info')}
            />
            <SidebarItem 
              icon={<Lock className="w-5 h-5" />}
              title="Change Password"
              isActive={currentPage === 'change-password'}
              onClick={() => setCurrentPage('change-password')}
            />
            <SidebarItem 
              icon={<Bell className="w-5 h-5" />}
              title="Notifications"
              isActive={currentPage === 'notifications'}
              onClick={() => setCurrentPage('notifications')}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">Management</h3>
          <div className="space-y-2">
            <SidebarItem 
              icon={<Calendar className="w-5 h-5" />}
              title="My Appointments"
              isActive={currentPage === 'appointments'}
              onClick={() => setCurrentPage('appointments')}
            />
            <SidebarItem 
              icon={<TrendingUp className="w-5 h-5" />}
              title="Behavioral Trends"
              isActive={currentPage === 'behavioral-level'}
              onClick={() => setCurrentPage('behavioral-level')}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">Support</h3>
          <SidebarItem 
            icon={<HelpCircle className="w-5 h-5" />}
            title="Help Center"
            isActive={currentPage === 'help-center'}
            onClick={() => setCurrentPage('help-center')}
          />
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t">
        <button 
          onClick={() => setShowLogoutModal(true)}
          className="w-full flex items-center justify-center px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );

  // Main Content Area
  const MainContent = () => {
    const getPageTitle = () => {
      switch (currentPage) {
        case 'personal-info': return 'Personal Information';
        case 'change-password': return 'Change Password';
        case 'notifications': return 'Notification Preferences';
        case 'appointments': return 'My Appointments';
        case 'behavioral-level': return 'Behavioral Level Trends';
        case 'help-center': return 'Help Center';
        default: return 'Profile Dashboard';
      }
    };

    return (
      <div className="flex-1 bg-gray-50">
        <div className="breadcrumbs flex items-center gap-1 px-8 py-2 text-sm text-gray-600">
          <span role="link" onClick={() => navigate('/')} style={{cursor:'pointer'}}>
            <Home size={16} />
          </span>
          <ChevronRight size={14} />
          <span>Personal</span>
        </div>
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome back, James!</span>
            </div>
          </div>
        </div>
        
        {/* Page Content */}
        <div className="p-8">
          {renderPageContent()}
        </div>
      </div>
    );
  };

  // Page content renderer
  const renderPageContent = () => {
    switch (currentPage) {
      case 'personal-info': return <PersonalInfoContent />;
      case 'change-password': return <ChangePasswordContent />;
      case 'notifications': return <NotificationsContent />;
      case 'appointments': return <AppointmentsContent />;
      case 'behavioral-level': return <BehavioralLevelContent />;
      case 'help-center': return <HelpCenterContent />;
      default: return <ProfileDashboard />;
    }
  };

  // Profile Dashboard
  const ProfileDashboard = () => (
    <div className="max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <QuickActionCard 
                icon={<Calendar className="w-8 h-8 text-cyan-500" />}
                title="Schedule Appointment"
                description="Book your next appointment"
                onClick={() => setCurrentPage('appointments')}
              />
              <QuickActionCard 
                icon={<TrendingUp className="w-8 h-8 text-green-500" />}
                title="View Progress"
                description="Check behavioral trends"
                onClick={() => setCurrentPage('behavioral-level')}
              />
              <QuickActionCard 
                icon={<Settings className="w-8 h-8 text-purple-500" />}
                title="Account Settings"
                description="Manage your profile"
                onClick={() => setCurrentPage('personal-info')}
              />
              <QuickActionCard 
                icon={<HelpCircle className="w-8 h-8 text-orange-500" />}
                title="Get Help"
                description="Access support resources"
                onClick={() => setCurrentPage('help-center')}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Profile Completion</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Profile Info</span>
                <span className="text-green-600">Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <p className="text-xs text-gray-500">85% Complete</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Password updated successfully</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Notification preferences saved</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span>Appointment scheduled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Personal Information Content
  const PersonalInfoContent = () => (
    <div className="max-w-4xl">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard 
            icon={<User className="w-6 h-6 text-cyan-500" />}
            label="Full Name"
            value="Alex Martinez"
          />
          <InfoCard 
            icon={<Phone className="w-6 h-6 text-cyan-500" />}
            label="Phone Number"
            value="+1 234-567-890"
          />
          <InfoCard 
            icon={<Mail className="w-6 h-6 text-cyan-500" />}
            label="Email Address"
            value="yourcompany@gmail.com"
          />
          <InfoCard 
            icon={<UserCheck className="w-6 h-6 text-cyan-500" />}
            label="Gender"
            value="Male"
          />
          <InfoCard 
            icon={<CalendarDays className="w-6 h-6 text-cyan-500" />}
            label="Date of Birth"
            value="24 Jul 1998"
          />
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
            Edit Information
          </button>
        </div>
      </div>
    </div>
  );

  // Change Password Content
  const ChangePasswordContent = () => (
    <div className="max-w-2xl">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <form className="space-y-6">
          <PasswordField 
            label="Current Password"
            type={passwordVisibility.current ? 'text' : 'password'}
            onToggle={() => setPasswordVisibility(prev => ({...prev, current: !prev.current}))}
            showPassword={passwordVisibility.current}
          />
          
          <div>
            <PasswordField 
              label="New Password"
              type={passwordVisibility.new ? 'text' : 'password'}
              onToggle={() => setPasswordVisibility(prev => ({...prev, new: !prev.new}))}
              showPassword={passwordVisibility.new}
            />
            <p className="text-sm text-gray-500 mt-2">Minimum 8 characters, mix of letters & numbers</p>
          </div>
          
          <div>
            <PasswordField 
              label="Confirm New Password"
              type={passwordVisibility.confirm ? 'text' : 'password'}
              onToggle={() => setPasswordVisibility(prev => ({...prev, confirm: !prev.confirm}))}
              showPassword={passwordVisibility.confirm}
            />
            <p className="text-sm text-gray-500 mt-2">Re-enter new password to confirm</p>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Notifications Content
  const NotificationsContent = () => (
    <div className="max-w-4xl">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="space-y-8">
          <NotificationSection 
            title="Push Notifications"
            description="Receive all push notifications on your device"
            isEnabled={notifications.push}
            onToggle={() => setNotifications(prev => ({...prev, push: !prev.push}))}
          />
          <NotificationSection 
            title="Chat Notifications"
            description="Get notified when you receive new messages"
            isEnabled={notifications.chat}
            onToggle={() => setNotifications(prev => ({...prev, chat: !prev.chat}))}
          />
          <NotificationSection 
            title="Auto Notify My Doctors"
            description="Automatically notify your healthcare providers"
            isEnabled={notifications.autoNotify}
            onToggle={() => setNotifications(prev => ({...prev, autoNotify: !prev.autoNotify}))}
          />
          <NotificationSection 
            title="All Reminders"
            description="Receive all reminder notifications"
            isEnabled={notifications.reminder}
            onToggle={() => setNotifications(prev => ({...prev, reminder: !prev.reminder}))}
          />
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );

  // Appointments Content
  const AppointmentsContent = () => (
    <div className="max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-semibold mb-6">April 2025</h3>
          
          <div className="grid grid-cols-7 gap-2 mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            
            {Array.from({length: 30}, (_, i) => i + 1).map(date => (
              <div key={date} className="text-center py-2">
                <button className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition-colors ${
                  date === 19 || date === 24 ? 'bg-cyan-500 text-white' : 
                  'hover:bg-gray-100 text-gray-700'
                }`}>
                  {date}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-semibold mb-6">Upcoming Appointments</h3>
          <div className="space-y-4">
            <AppointmentCard 
              date="19"
              month="Apr"
              title="General Appointment"
              timeRange="19 Apr - 24 Apr"
              type="appointment"
            />
            <AppointmentCard 
              date="24"
              month="Apr"
              title="Take Home Session"
              timeRange="24 Apr - 26 Apr"
              type="session"
            />
          </div>
          
          <div className="mt-8">
            <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Schedule New Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Behavioral Level Content
  const BehavioralLevelContent = () => (
    <div className="max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">This Week's Level</h3>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-green-600 font-medium">Compliant</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Trend Movement</h3>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
            <span className="text-yellow-600 font-medium">Improved</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">4 Week Average</h3>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
            <span className="text-red-600 font-medium">At-Risk</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Behavior Chart Overview</h3>
          <select className="border border-gray-300 rounded-lg px-3 py-2">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
        
        <div className="flex items-center mb-6 space-x-6">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded mr-2"></span>
            <span>Compliant</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-yellow-500 rounded mr-2"></span>
            <span>At-Risk</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-red-500 rounded mr-2"></span>
            <span>Non-Compliant</span>
          </div>
        </div>

        <div className="flex items-end justify-between h-64 px-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="flex flex-col items-center space-y-2">
              <div className="flex flex-col space-y-1">
                <div className={`w-8 ${index % 3 === 0 ? 'h-32 bg-green-500' : index % 3 === 1 ? 'h-24 bg-yellow-500' : 'h-16 bg-red-500'} rounded-t`}></div>
                <div className={`w-8 ${index % 2 === 0 ? 'h-16 bg-yellow-500' : 'h-24 bg-green-500'} rounded-t`}></div>
              </div>
              <span className="text-sm text-gray-500">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Help Center Content
  const HelpCenterContent = () => (
    <div className="max-w-6xl">
      <div className="flex mb-8">
        <button 
          className={`px-6 py-3 font-medium rounded-t-lg ${
            activeTab === 'faq' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
        <button 
          className={`px-6 py-3 font-medium rounded-t-lg ml-2 ${
            activeTab === 'contact' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Us
        </button>
      </div>

      {activeTab === 'faq' ? (
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-4">
            <FAQItem 
              question="How do I manage my notifications?"
              answer="To manage notifications, go to the Notifications section in your profile settings and customize your preferences for different types of alerts."
              isExpanded={expandedFAQ === 0}
              onToggle={() => setExpandedFAQ(expandedFAQ === 0 ? null : 0)}
            />
            <FAQItem 
              question="How do I start a guided meditation session?"
              answer="Navigate to the meditation section and select from our available guided sessions based on your preferences and experience level."
              isExpanded={expandedFAQ === 1}
              onToggle={() => setExpandedFAQ(expandedFAQ === 1 ? null : 1)}
            />
            <FAQItem 
              question="How do I join a group chat?"
              answer="Group chats can be accessed through the messaging section. You'll need an invitation code or be added by an existing member."
              isExpanded={expandedFAQ === 2}
              onToggle={() => setExpandedFAQ(expandedFAQ === 2 ? null : 2)}
            />
            <FAQItem 
              question="Is my data safe and private?"
              answer="Yes, we use industry-standard encryption and security measures to protect your personal information and health data."
              isExpanded={expandedFAQ === 3}
              onToggle={() => setExpandedFAQ(expandedFAQ === 3 ? null : 3)}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactCard icon={<Headphones className="w-8 h-8 text-cyan-500" />} title="Customer Service" description="24/7 phone support" />
          <ContactCard icon={<MessageCircle className="w-8 h-8 text-green-500" />} title="WhatsApp" description="Chat with our team" />
          <ContactCard icon={<Globe className="w-8 h-8 text-blue-500" />} title="Website" description="Visit our help portal" />
          <ContactCard icon={<Facebook className="w-8 h-8 text-blue-600" />} title="Facebook" description="Follow us for updates" />
          <ContactCard icon={<Twitter className="w-8 h-8 text-sky-500" />} title="Twitter" description="Get quick responses" />
          <ContactCard icon={<Instagram className="w-8 h-8 text-pink-500" />} title="Instagram" description="Visual guides and tips" />
        </div>
      )}
    </div>
  );

  // Reusable Components
  const SidebarItem = ({ icon, title, isActive, onClick }) => (
    <button
      className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
        isActive ? 'bg-cyan-50 text-cyan-600 border-r-2 border-cyan-500' : 'text-gray-600 hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3 text-sm font-medium">{title}</span>
    </button>
  );

  const QuickActionCard = ({ icon, title, description, onClick }) => (
    <div 
      className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      <div className="mb-4">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  const InfoCard = ({ icon, label, value }) => (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center mb-3">
        {icon}
        <span className="ml-2 text-sm font-medium text-gray-600">{label}</span>
      </div>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  );

  const PasswordField = ({ label, type, onToggle, showPassword }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <input
          type={type}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="••••••••"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-500"
          onClick={onToggle}
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );

  const NotificationSection = ({ title, description, isEnabled, onToggle }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-100">
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <button
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isEnabled ? 'bg-cyan-500' : 'bg-gray-300'
        }`}
        onClick={onToggle}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isEnabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  const AppointmentCard = ({ date, month, title, timeRange, type }) => (
    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
      <div className="bg-cyan-500 text-white p-3 rounded-lg mr-4 text-center">
        <div className="text-xl font-bold">{date}</div>
        <div className="text-sm">{month}</div>
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{timeRange}</p>
      </div>
    </div>
  );

  const FAQItem = ({ question, answer, isExpanded, onToggle }) => (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
        onClick={onToggle}
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );

  const ContactCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="mb-4">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  // Logout Modal
  const LogoutModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md">
        <h3 className="text-xl font-semibold text-center mb-6">Confirm Logout</h3>
        <p className="text-gray-600 text-center mb-8">Are you sure you want to logout from your account?</p>
        <div className="flex space-x-4">
          <button 
            className="flex-1 py-3 px-4 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setShowLogoutModal(false)}
          >
            Cancel
          </button>
          <button 
  className="flex-1 py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
  onClick={() => {
    setShowLogoutModal(false);
    // Perform actual logout logic here if needed
    navigate('*/'); // Replace with your actual dashboard route
  }}
>
  Logout
</button>

        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <MainContent />
      {showLogoutModal && <LogoutModal />}
    </div>
  );
};

export default Personal;