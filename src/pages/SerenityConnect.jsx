import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  FileText, 
  Activity, 
  Calendar, 
  Heart, 
  Search,
  Bell,
  Settings,
  Home,
  Upload,
  Phone,
  Video,
  Send,
  Mic,
  Image,
  Plus,
  Clock,
  MapPin,
  Star,
  Circle,
  Gamepad,
  X,
  Check,
  AlertCircle,
  UserCheck,
  Stethoscope,
  TestTube,
  PillBottle
} from 'lucide-react';

const SerenityConnect = () => {
  const [activeView, setActiveView] = useState('home');
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [chatMessages, setChatMessages] = useState({
    1: [
      { id: 1, sender: 'doctor', text: 'ok doc. I will drink lots of water and exercise.', time: '10:15', doctorName: 'Dr. Maria Gonzalez' },
      { id: 2, sender: 'patient', text: "That's the spirit, John! 💪", time: '11:40' },
      { id: 3, sender: 'doctor', text: 'Thanks! I\'ll go through this today or Tomorrow.', time: '11:41', doctorName: 'Dr. Maria Gonzalez' },
      { id: 4, sender: 'doctor', text: 'Do you like it?', time: '11:41', doctorName: 'Dr. Maria Gonzalez' },
      { id: 5, sender: 'patient', text: 'Audio Message', time: '00:16', isAudio: true },
      { id: 6, sender: 'doctor', text: 'Audio Message', time: '00:16', isAudio: true, doctorName: 'Dr. Maria Gonzalez' }
    ]
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'lab_results',
      sender: 'Dr. Olivia Smith',
      avatar: '👩‍⚕️',
      title: 'Lab Results Available',
      message: 'Your blood work results from July 5th are ready for review. All values appear normal.',
      time: '2 hours ago',
      isRead: false,
      priority: 'high',
      actionRequired: true,
      icon: <TestTube className="w-4 h-4" />
    },
    {
      id: 2,
      type: 'medication',
      sender: 'Nurse Emily',
      avatar: '👩‍⚕️',
      title: 'Medication Reminder',
      message: 'Please remember to take your evening medication and log your vitals in the app.',
      time: '4 hours ago',
      isRead: false,
      priority: 'medium',
      actionRequired: true,
      icon: <PillBottle className="w-4 h-4" />
    },
    {
      id: 3,
      type: 'appointment',
      sender: 'Dr. Mark Allen',
      avatar: '👨‍⚕️',
      title: 'Appointment Confirmed',
      message: 'Your follow-up appointment for July 10th at 2:00 PM has been confirmed.',
      time: '6 hours ago',
      isRead: false,
      priority: 'medium',
      actionRequired: false,
      icon: <Calendar className="w-4 h-4" />
    },
    {
      id: 4,
      type: 'vitals',
      sender: 'Dr. Maria Gonzalez',
      avatar: '👩‍⚕️',
      title: 'Vitals Update Request',
      message: 'Could you please update your blood pressure readings from this morning?',
      time: '8 hours ago',
      isRead: true,
      priority: 'low',
      actionRequired: true,
      icon: <Stethoscope className="w-4 h-4" />
    },
    {
      id: 5,
      type: 'message',
      sender: 'Nurse Emily',
      avatar: '👩‍⚕️',
      title: 'New Message',
      message: 'Great job on maintaining your exercise routine! Keep up the excellent work.',
      time: '1 day ago',
      isRead: true,
      priority: 'low',
      actionRequired: false,
      icon: <MessageCircle className="w-4 h-4" />
    }
  ]);

  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [doctors] = useState([
    { 
      id: 1, 
      name: 'Dr. Olivia Smith', 
      specialty: 'Doctor', 
      status: 'online',
      avatar: '👩‍⚕️',
      isOnline: true
    },
    { 
      id: 2, 
      name: 'Nurse Emily', 
      specialty: 'Doctor', 
      status: 'online',
      avatar: '👩‍⚕️',
      isOnline: true
    },
    { 
      id: 3, 
      name: 'Dr. Mark Allen', 
      specialty: 'Doctor', 
      status: 'online',
      avatar: '👨‍⚕️',
      isOnline: true
    },
    { 
      id: 4, 
      name: 'Dr. Maria Gonzalez', 
      specialty: 'Doctor', 
      status: 'online',
      avatar: '👩‍⚕️',
      isOnline: true
    }
  ]);

  const [contactList] = useState([
    { 
      id: 1, 
      name: 'Dr Maria Gonzalez', 
      status: 'Vitals stable. All services active.',
      subtitle: 'Dr. Isaac - Medicare Plus Blue',
      avatar: '👩‍⚕️',
      isOnline: true,
      lastMessage: 'Thanks! I\'ll go through this today...',
      time: '11:41'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Navigation handler for buttons
  const handleNavigation = (page) => {
    console.log(`Navigating to: ${page}`);
    // In a real app, this would handle navigation
    // For this demo, we'll just show an alert
    alert(`Would navigate to: ${page}`);
  };

  const markAsRead = (notificationId) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === notificationId ? { ...notif, isRead: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, isRead: true })));
  };

  const deleteNotification = (notificationId) => {
    setNotifications(prev => prev.filter(notif => notif.id !== notificationId));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const PriorityBadge = ({ level }) => (
    <span
      style={{ background: getPriorityColor(level), color: '#fff', padding: '2px 6px', borderRadius: 6 }}
    >
      {level}
    </span>
  );

  const getPriorityDot = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const NotificationPanel = () => (
    <div 
      ref={notificationRef}
      className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-bold text-gray-800">Notifications</h3>
        <div className="flex items-center space-x-2">
          <button 
            onClick={markAllAsRead}
            className="text-sm text-teal-600 hover:text-teal-700"
          >
            Mark all as read
          </button>
          <button 
            onClick={() => setShowNotifications(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No notifications yet</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                !notification.isRead ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">
                    {notification.avatar}
                  </div>
                  {/* Priority dot */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 ${getPriorityDot(notification.priority)} rounded-full border-2 border-white`}></div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      {notification.icon}
                      <p className="font-medium text-gray-800 text-sm truncate">
                        {notification.title}
                      </p>
                      {notification.actionRequired && (
                        <AlertCircle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                      )}
                    </div>
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="text-gray-400 hover:text-gray-600 ml-2"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-1">
                    <strong>{notification.sender}</strong>
                  </p>
                  
                  <p className="text-sm text-gray-700 mb-2 leading-4">
                    {notification.message}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-2">
                      {notification.time} <PriorityBadge level={notification.priority} />
                    </span>
                    <div className="flex items-center space-x-2">
                      {notification.actionRequired && (
                        <button className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full hover:bg-teal-200 transition-colors">
                          Take Action
                        </button>
                      )}
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-teal-600 hover:text-teal-700 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" /> Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <button className="w-full text-center text-sm text-teal-600 hover:text-teal-700 font-medium">
            View All Notifications
          </button>
        </div>
      )}
    </div>
  );

  const onFilePick = (e) => {
    if (e.target.files?.length) setUploadedFile(e.target.files[0]);
  };

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    
    const message = {
      id: Date.now(),
      text: newMessage,
      sender: 'patient',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages(prev => ({
      ...prev,
      [selectedChat.id]: [...(prev[selectedChat.id] || []), message]
    }));
    setNewMessage('');

    setTimeout(() => {
      const response = {
        id: Date.now() + 1,
        text: "Thank you for your message. I'll review this and get back to you shortly.",
        sender: 'doctor',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        doctorName: selectedChat.name
      };
      setChatMessages(prev => ({
        ...prev,
        [selectedChat.id]: [...(prev[selectedChat.id] || []), response]
      }));
    }, 2000);
  };
const navigate = useNavigate();
  const Sidebar = () => (
    <div className="w-64 bg-teal-400 text-white h-screen flex flex-col">
      <div className="bg-teal-500 p-4 text-center">
        <h2 className="text-sm font-medium">Hero Section</h2>
      </div>

      <div className="p-4 border-b border-teal-300">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
            J
          </div>
          <div>
            <p className="font-medium">John D</p>
            <p className="text-xs text-teal-100">Patient</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <p className="text-xs text-teal-100 mb-4">MENU</p>
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveView('home')}
            className={`w-full flex items-center space-x-3 p-2 rounded text-left transition-colors ${
              activeView === 'home' ? 'bg-teal-500' : 'hover:bg-teal-500'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="text-sm">Dashboard</span>
          </button>
          <button 
  onClick={() => navigate('/patient-report')}
  className="w-full flex items-center space-x-3 p-2 rounded text-left hover:bg-teal-500 transition-colors"
>
  <FileText className="w-4 h-4" />
  <span className="text-sm">Patient Report</span>
</button>

          <button 
  onClick={() => navigate('/take-home')}
  className="w-full flex items-center space-x-3 p-2 rounded text-left hover:bg-teal-500 transition-colors"
>
  <Home className="w-4 h-4" />
  <span className="text-sm">Take Home</span>
</button>
 <button 
  onClick={() => navigate('/serenity-games')}
  className="w-full flex items-center space-x-3 p-2 rounded text-left hover:bg-teal-500 transition-colors"
>
  <Gamepad className="w-4 h-4" />
  <span className="text-sm">Patient Interactive Games</span>
</button>
<button 
  onClick={() => navigate('/submission-history')}
  className="w-full flex items-center space-x-3 p-2 rounded text-left hover:bg-teal-500 transition-colors"
>
  <FileText className="w-4 h-4" />
  <span className="text-sm">Submission History</span>
</button>


          <button 
            onClick={() => setActiveView('doctors')}
            className={`w-full flex items-center space-x-3 p-2 rounded text-left transition-colors ${
              activeView === 'doctors' ? 'bg-teal-500' : 'hover:bg-teal-500'
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="text-sm">Doctors and Nurses</span>
          </button>
        </nav>

        <p className="text-xs text-teal-100 mt-8 mb-4">CHATS</p>
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveView('inbox')}
            className={`w-full flex items-center space-x-3 p-2 rounded text-left transition-colors ${
              activeView === 'inbox' ? 'bg-teal-500' : 'hover:bg-teal-500'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Messages</span>
          </button>
          <button 
  onClick={() => navigate('/personal')}
  className="w-full flex items-center space-x-3 p-2 rounded text-left hover:bg-teal-500 transition-colors"
>
  <Settings className="w-4 h-4" />
  <span className="text-sm">Settings</span>
</button>
        </nav>

        <p className="text-xs text-teal-100 mt-8 mb-4">REQUESTS</p>
        <button className="w-full flex items-center space-x-3 p-2 rounded text-left hover:bg-teal-500 transition-colors">
          <Plus className="w-4 h-4" />
          <span className="text-sm">Requests</span>
        </button>
      </div>

      <div className="p-4 border-t border-teal-300">
        <button className="text-sm text-teal-100 hover:text-white">Help</button>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
            J
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">John D.</h1>
            <p className="text-gray-600">Patient</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <MessageCircle className="w-6 h-6" />
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-600 hover:text-gray-800 relative"
            >
              <Bell className="w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            {showNotifications && <NotificationPanel />}
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mb-8">
        <button 
          onClick={() => handleNavigation('take-home')}
          className="bg-teal-400 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-500 transition-colors"
        >
          Take Home
        </button>
        <button 
          onClick={() => handleNavigation('patient-report')}
          className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
        >
          Patient Report
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="font-bold text-gray-800 mr-3">Drug Test Alert - July 3, 2025</h3>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                🟡 Pending
              </span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex items-center">
                <Circle className="w-3 h-3 mr-2 fill-current" />
                <span>Serenity Clinic - Lab Room 2</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-2" />
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Connect with Doctors & Nurses Instantly:</h3>
        <div className="grid grid-cols-3 gap-6 mb-6">
          {doctors.slice(0, 3).map((doctor) => (
            <div key={doctor.id} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  {doctor.avatar}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <p className="font-medium text-gray-800 text-sm">{doctor.name}</p>
              <p className="text-gray-600 text-xs">{doctor.specialty}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {doctors.slice(3, 6).map((doctor) => (
            <div key={doctor.id} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  {doctor.avatar}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <p className="font-medium text-gray-800 text-sm">{doctor.name}</p>
              <p className="text-gray-600 text-xs">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-bold text-gray-800 mb-4">Medication Callback Request</h3>
        <div className="border-t pt-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h4 className="font-bold text-gray-800 mr-3">Request #1049</h4>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                  🟡 Pending
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-2" />
                  <span><strong>Requested On:</strong> July 2, 2025 - 11:00 AM</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-2" />
                  <span><strong>Action Required:</strong> Please upload a clear photo of your medication bottle with label visible.</span>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-teal-400 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-500 transition-colors">
            Upload
          </button>
        </div>
      </div>
    </div>
  );

  const InboxView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-white">
              <MessageCircle className="w-4 h-4" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Inbox</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-b px-6">
        <div className="flex space-x-8">
          <button className="py-3 px-1 border-b-2 border-teal-400 text-teal-600 font-medium">
            Direct Message
          </button>
          <button className="py-3 px-1 text-gray-600 hover:text-gray-800">
            Group Chat
          </button>
        </div>
      </div>

      <div className="p-6 bg-white border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="flex-1 bg-white">
        {contactList.map((contact) => (
          <button
            key={contact.id}
            onClick={() => {
              setSelectedChat(contact);
              setActiveView('chat');
            }}
            className="w-full p-6 border-b hover:bg-gray-50 text-left transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {contact.avatar}
                </div>
                {contact.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-800 flex items-center">
                    {contact.name}
                    <UserCheck className="w-4 h-4 text-teal-500 ml-1" />
                    <Heart className="w-4 h-4 text-pink-500 ml-1" />
                  </h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-green-600 text-sm mb-1 flex items-center">
                  <Activity className="w-4 h-4 mr-1" />
                  {contact.status}
                  <Check className="w-4 h-4 text-green-500 ml-1" />
                </p>
                <p className="text-gray-600 text-sm flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {contact.subtitle}
                  <Star className="w-4 h-4 text-yellow-400 ml-1" />
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
  
  const ChatView = () => (
    <div className="flex-1 bg-gray-50 flex flex-col">
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setActiveView('inbox')}
            className="text-gray-600 hover:text-gray-800"
          >
            ←
          </button>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
            {selectedChat?.avatar}
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{selectedChat?.name}</h3>
            <p className="text-sm text-green-600">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-teal-600 hover:bg-teal-50 rounded">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 text-teal-600 hover:bg-teal-50 rounded">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <div className="text-center text-gray-500 text-sm">
          10:15
        </div>
        
        {selectedChat && chatMessages[selectedChat.id]?.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'patient' ? 'justify-end' : 'justify-start'}`}>
            {message.sender === 'doctor' && (
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                👩‍⚕️
              </div>
            )}
            <div className={`max-w-xs lg:max-w-md ${message.sender === 'patient' ? 'order-1' : ''}`}>
              {message.sender === 'doctor' && message.doctorName && (
                <p className="text-xs text-gray-600 mb-1">{message.doctorName}</p>
              )}
              <div className={`px-4 py-2 rounded-2xl ${
                message.sender === 'patient' 
                  ? 'bg-teal-400 text-white' 
                  : 'bg-white text-gray-800 border'
              }`}>
                {message.isAudio ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent"></div>
                    </div>
                    <div className="flex-1 h-1 bg-white bg-opacity-20 rounded">
                      <div className="h-full bg-white rounded" style={{width: '30%'}}></div>
                    </div>
                    <span className="text-xs">{message.time}</span>
                  </div>
                ) : (
                  <p className="text-sm">{message.text}</p>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right">{message.time}</p>
            </div>
            {message.sender === 'patient' && (
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm ml-3 flex-shrink-0">
                J
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border-t p-4">
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <Image className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <FileText className="w-5 h-5" />
          </button>
          <label className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer">
            <Upload className="w-5 h-5" />
            <input type="file" onChange={onFilePick} hidden />
          </label>
          {uploadedFile && (
            <span className="text-xs text-gray-500">{uploadedFile.name}</span>
          )}
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:text-gray-800">
              Aa
            </button>
          </div>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <Mic className="w-5 h-5" />
          </button>
          <button 
            onClick={sendMessage}
            className="p-2 text-teal-600 hover:bg-teal-50 rounded"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      {activeView === 'home' && <HomeView />}
      {activeView === 'inbox' && <InboxView />}
      {activeView === 'chat' && selectedChat && <ChatView />}
      {activeView === 'chat' && !selectedChat && <InboxView />}
      {activeView === 'reports' && <HomeView />}
      {activeView === 'doctors' && <HomeView />}
    </div>
    
  );
};

export default SerenityConnect;