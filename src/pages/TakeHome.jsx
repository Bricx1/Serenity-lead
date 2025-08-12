import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Check, Camera, Video, Clock, AlertCircle, ChevronRight, X, RotateCcw } from 'lucide-react';

const TakeHome = () => {
  const [currentStep, setCurrentStep] = useState('scan'); // scan, success, record, recording, submit, history
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState('pending'); // pending, done
  const [showHistory, setShowHistory] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Mock QR code for demonstration
  const mockQRCode = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Crect x='0' y='0' width='60' height='60' fill='black'/%3E%3Crect x='20' y='20' width='20' height='20' fill='white'/%3E%3Crect x='140' y='0' width='60' height='60' fill='black'/%3E%3Crect x='160' y='20' width='20' height='20' fill='white'/%3E%3Crect x='0' y='140' width='60' height='60' fill='black'/%3E%3Crect x='20' y='160' width='20' height='20' fill='white'/%3E%3Crect x='80' y='80' width='40' height='40' fill='black'/%3E%3C/svg%3E";

  // Mock submission history
  const submissionHistory = [
    { id: 1, name: 'Medicine ABC -8 AM', date: 'Apr 25, 2025', status: 'incomplete', time: '8:00 AM' },
    { id: 2, name: 'Medicine XYX -After Breakfast', date: 'Apr 25, 2025', status: 'incomplete', time: 'After Breakfast' },
    { id: 3, name: 'Medicine ABC -After Dinner', date: 'Apr 25, 2025', status: 'completed', time: 'After Dinner' },
    { id: 4, name: 'XYZ Dose', date: 'Apr 25, 2025', status: 'completed', time: 'Evening' },
    { id: 5, name: 'Morning Dose – 8AM', date: 'Apr 25, 2025', status: 'completed', time: '8:00 AM' },
    { id: 6, name: 'Morning Dose – 8AM', date: 'Apr 25, 2025', status: 'completed', time: '8:00 AM' },
    { id: 7, name: 'Morning Dose – 8AM', date: 'Apr 25, 2025', status: 'completed', time: '8:00 AM' }
  ];

  // Recording timer effect
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Format time for display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start camera for recording
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' }, 
        audio: true 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  // Handle QR scanning
  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setTimeout(() => {
        setCurrentStep('success');
      }, 500);
    }, 2000);
  };

  // Handle recording
  const handleRecord = async () => {
    await startCamera();
    setCurrentStep('recording');
    setIsRecording(true);
    setRecordingTime(0);
  };

  const stopRecording = () => {
    setIsRecording(false);
    stopCamera();
    setCurrentStep('submit');
  };

  // Navigation handlers
  const goBack = () => {
    if (currentStep === 'success') setCurrentStep('scan');
    else if (currentStep === 'record') setCurrentStep('success');
    else if (currentStep === 'recording') {
      stopRecording();
      setCurrentStep('record');
    }
    else if (currentStep === 'submit') setCurrentStep('record');
    else if (currentStep === 'history') setCurrentStep('submit');
  };

  const goToHistory = () => {
    setCurrentStep('history');
  };

  // QR Scan Screen
  const ScanScreen = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="flex items-center mb-6">
          <button onClick={goBack} className="p-2 rounded-full bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <h1 className="text-xl font-semibold text-center text-gray-800">
          Scan QR Code of the Bottle
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="relative mb-8">
          <div className="w-64 h-64 border-4 border-white rounded-3xl flex items-center justify-center bg-white shadow-lg">
            <img 
              src={mockQRCode} 
              alt="QR Code" 
              className={`w-48 h-48 transition-opacity duration-300 ${scanComplete ? 'opacity-50' : 'opacity-100'}`}
            />
            {isScanning && (
              <div className="absolute inset-0 border-4 border-teal-400 rounded-3xl">
                <div className="w-full h-1 bg-teal-400 animate-pulse" style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  animation: 'scan 2s linear infinite'
                }} />
              </div>
            )}
            {scanComplete && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
            )}
          </div>
          <div className="absolute -inset-4 border-4 border-white rounded-3xl border-dashed opacity-50"></div>
        </div>

        <p className="text-gray-600 text-center mb-8 max-w-xs">
          The QR Code will be automatically detected when you position it between the guide lines
        </p>

        <button 
          onClick={handleScan}
          disabled={isScanning || scanComplete}
          className="w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50"
        >
          <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
        </button>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 90%; }
          100% { top: 0; }
        }
      `}</style>
    </div>
  );

  // Scan Success Screen
  const SuccessScreen = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="flex items-center mb-6">
          <button onClick={goBack} className="p-2 rounded-full bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <h1 className="text-xl font-semibold text-center text-gray-800">
          Scan QR Code of the Bottle
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center mb-8">
          <Check className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-8">
          Scan Successfully Completed
        </h2>

        <div className="w-48 h-48 border-4 border-teal-400 rounded-2xl flex items-center justify-center bg-white mb-12">
          <img src={mockQRCode} alt="Scanned QR Code" className="w-40 h-40" />
        </div>

        <button 
          onClick={() => setCurrentStep('record')}
          className="w-full max-w-sm bg-teal-400 text-white py-4 rounded-full font-semibold text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );

  // Recording Setup Screen
  const RecordScreen = () => (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-4 py-6">
        <div className="flex items-center mb-6">
          <button onClick={goBack} className="p-2 rounded-full bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800 ml-4">
            Medication Time Window
          </h1>
        </div>
      </div>

      <div className="flex-1 px-6">
        <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
          <AlertCircle className="w-5 h-5 text-gray-600 mr-3" />
          <p className="text-gray-700">
            Please record your video between <br />
            <span className="font-semibold">00:30 AM and 00:30 AM</span>
          </p>
        </div>

        <div className="bg-teal-400 rounded-2xl p-8 mb-8 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <Video className="w-8 h-8 text-teal-400" />
          </div>
        </div>

        <button 
          onClick={handleRecord}
          className="w-full bg-teal-400 text-white py-4 rounded-full font-semibold text-lg mb-8"
        >
          Record Video
        </button>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Instructions:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Hold your phone steady and make sure your face is visible.</p>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Show the medication clearly in your hand.</p>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Place the pill in your mouth and swallow it with water.</p>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Make sure the entire process is visible in one continuous video.</p>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Tap Preview to check your video before submitting.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Recording Screen
  const RecordingScreen = () => (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="absolute top-6 left-4 z-10">
        <button onClick={goBack} className="p-2 rounded-full bg-black bg-opacity-50">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="absolute top-6 right-4 z-10">
        <button className="p-2 rounded-full bg-black bg-opacity-50">
          <RotateCcw className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex-1 relative">
        <video 
          ref={videoRef}
          autoPlay 
          playsInline 
          muted
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <div className="bg-black bg-opacity-50 px-4 py-2 rounded-full">
            <span className="text-white font-mono text-lg">
              {formatTime(recordingTime)}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
        <button className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </button>
        
        <button 
          onClick={stopRecording}
          className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center"
        >
          <Video className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );

  // Submit Screen
  const SubmitScreen = () => (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-4 py-6">
        <div className="flex items-center mb-6">
          <button onClick={goBack} className="p-2 rounded-full bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex-1 px-6">
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-teal-100 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">👨</span>
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">+</span>
            </div>
          </div>
          <label className="btn-camera inline-flex items-center gap-2 cursor-pointer bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4">
            <Camera size={16} /> Capture/Upload
            <input type="file" accept="image/*" onChange={(e) => {
              if (e.target.files?.length) setSubmissionStatus('uploaded');
            }} hidden />
          </label>

          <button className="w-full bg-teal-400 text-white py-4 rounded-full font-semibold text-lg mb-8 flex items-center justify-center">
            Submit Take Home
            <div className="ml-3 w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">Submission Status</h3>
          <p className="text-gray-600 mb-4">Status:</p>
          
          <div className="space-y-3">
            <div className={`flex items-center p-4 rounded-lg border ${submissionStatus === 'pending' ? 'bg-gray-50' : 'bg-white'}`}>
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${submissionStatus === 'pending' ? 'border-gray-300' : 'border-gray-300'}`}>
                <Clock className="w-3 h-3 text-gray-400" />
              </div>
              <span className="text-gray-600">Pending</span>
            </div>
            
            <div className="flex items-center p-4 rounded-lg border bg-teal-50 border-teal-200">
              <div className="w-5 h-5 bg-teal-400 rounded-full mr-3 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-teal-600 font-medium">Done</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={goToHistory}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className="text-gray-800">View Submission History</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 text-left">
            <span className="text-gray-800">Help / How It Works?</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="mt-6 text-center">
          <button onClick={() => setShowHistory(v => !v)}>
            {showHistory ? 'Hide' : 'Show'} History
          </button>
          {showHistory && (
            <div className="history-panel text-sm text-gray-600 mt-2">
              Recent submissions appear here…
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // History Screen
  const HistoryScreen = () => (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-6 border-b">
        <div className="flex items-center mb-4">
          <button onClick={goBack} className="p-2 rounded-full bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800 ml-4">
            Your Submission History
          </h1>
        </div>
        <p className="text-gray-600 text-sm">
          View your submission video submission record.
        </p>
      </div>

      <div className="px-4 py-2">
        {submissionHistory.map((item, index) => (
          <div key={item.id} className="flex items-center py-4 border-b border-gray-100 last:border-b-0">
            <div className="w-12 h-12 rounded-full mr-4 flex-shrink-0 overflow-hidden bg-gray-200">
              {item.status === 'completed' ? (
                <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs">👨</span>
                </div>
              ) : (
                <div className="w-full h-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-white text-lg">⚠</span>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className={`text-sm font-medium ${item.status === 'completed' ? 'text-teal-600' : 'text-red-500'}`}>
                {item.status === 'completed' ? 'Completed' : 'Incomplete'}
              </p>
            </div>
            
            <div className="flex-shrink-0">
              {item.status === 'completed' ? (
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
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
  );

  // Render current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'scan':
        return <ScanScreen />;
      case 'success':
        return <SuccessScreen />;
      case 'record':
        return <RecordScreen />;
      case 'recording':
        return <RecordingScreen />;
      case 'submit':
        return <SubmitScreen />;
      case 'history':
        return <HistoryScreen />;
      default:
        return <ScanScreen />;
    }
  };

  return renderCurrentStep();
};

export default TakeHome;