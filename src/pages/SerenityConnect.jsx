import React, { useState, useEffect } from 'react';
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
  Gamepad
} from 'lucide-react';
import { useNavigate  } from 'react-router-dom';


const SerenityConnect = () => {
  const [activeView, setActiveView] = useState('home');
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
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
    sender: 'Dr. Olivia Smith',
    message: 'Your lab results are ready for review.',
    time: '10:00 AM',
    isRead: false
  },
  {
    id: 2,
    sender: 'Nurse Emily',
    message: 'Please remember to log your vitals today.',
    time: '8:30 AM',
    isRead: false
  }
]);

const [showNotifications, setShowNotifications] = useState(false);


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
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mb-8">
        <button 
          onClick={() => navigate('/take-home')}
          className="bg-teal-400 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-500 transition-colors"
        >
          Take Home
        </button>
        <button 
          onClick={() => navigate('/patient-report')}
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
                  <h3 className="font-bold text-gray-800">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-green-600 text-sm mb-1">{contact.status}</p>
                <p className="text-gray-600 text-sm">{contact.subtitle}</p>
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