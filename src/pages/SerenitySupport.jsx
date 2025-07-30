import { useState } from 'react';

const SerenitySupport = () => {
  const [activeSection, setActiveSection] = useState('help');

  const supportSections = [
    { id: 'help', title: 'Help Center', icon: '🆘' },
    { id: 'terms', title: 'Terms of Service', icon: '📋' },
    { id: 'legal', title: 'Legal', icon: '⚖️' },
    { id: 'privacy', title: 'Privacy Policy', icon: '🔒' },
    { id: 'status', title: 'Status', icon: '📊' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'help':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How Can We Help You?</h2>
              <p className="text-gray-600">We're here to support you on your recovery journey 24/7</p>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🚨</span>
                <h3 className="text-xl font-bold text-red-800">Crisis Support</h3>
              </div>
              <p className="text-red-700 mb-3">If you're experiencing a mental health crisis or having thoughts of self-harm:</p>
              <div className="space-y-2 text-red-800 font-semibold">
                <p>📞 Crisis Hotline: 988 (24/7 Crisis Lifeline)</p>
                <p>📞 Emergency: 911</p>
                <p>📞 Serenity Crisis Line: 1-800-SERENITY</p>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏥</span>
                  <h3 className="text-xl font-bold text-blue-800">Treatment Programs</h3>
                </div>
                <ul className="space-y-3 text-blue-700">
                  <li>• Inpatient Rehabilitation</li>
                  <li>• Outpatient Programs</li>
                  <li>• Detoxification Services</li>
                  <li>• Group Therapy Sessions</li>
                  <li>• Individual Counseling</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💰</span>
                  <h3 className="text-xl font-bold text-green-800">Insurance & Billing</h3>
                </div>
                <ul className="space-y-3 text-green-700">
                  <li>• Insurance Verification</li>
                  <li>• Payment Plans Available</li>
                  <li>• Financial Assistance</li>
                  <li>• Billing Questions</li>
                  <li>• Pre-authorization Help</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">👨‍👩‍👧‍👦</span>
                  <h3 className="text-xl font-bold text-purple-800">Family Support</h3>
                </div>
                <ul className="space-y-3 text-purple-700">
                  <li>• Family Therapy Programs</li>
                  <li>• Visitor Guidelines</li>
                  <li>• Support Groups</li>
                  <li>• Educational Resources</li>
                  <li>• Communication Guidelines</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📞</span>
                  <h3 className="text-xl font-bold text-orange-800">Contact Information</h3>
                </div>
                <ul className="space-y-3 text-orange-700">
                  <li>• Main: (555) 123-CALM</li>
                  <li>• Admissions: (555) 123-HELP</li>
                  <li>• Billing: (555) 123-BILL</li>
                  <li>• Family Line: (555) 123-FAM</li>
                  <li>• Email: support@serenitycenter.com</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-800 font-semibold">Last Updated: July 2025</p>
              </div>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Treatment Agreement</h3>
                <p className="text-gray-700 mb-4">
                  By entering treatment at Serenity Rehabilitation Center, you agree to participate fully in your recovery program. This includes attending scheduled sessions, following treatment plans, and maintaining respect for staff and other patients.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Patient Rights & Responsibilities</h3>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">Your Rights:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Confidential and respectful treatment</li>
                    <li>• Informed consent for all procedures</li>
                    <li>• Access to your medical records</li>
                    <li>• Right to refuse treatment</li>
                    <li>• Safe and supportive environment</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Your Responsibilities:</h4>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Provide accurate medical information</li>
                    <li>• Follow treatment recommendations</li>
                    <li>• Respect facility rules and policies</li>
                    <li>• Maintain sobriety during treatment</li>
                    <li>• Treat others with respect and dignity</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Facility Rules</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• No weapons, drugs, or alcohol on premises</li>
                  <li>• Visitors must sign in and follow guidelines</li>
                  <li>• Personal belongings subject to search</li>
                  <li>• Smoking only in designated areas</li>
                  <li>• Cell phone use restricted in treatment areas</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment & Insurance</h3>
                <p className="text-gray-700">
                  Payment is due at time of service unless prior arrangements are made. We accept most major insurance plans and offer payment plans for qualified patients. Financial assistance may be available based on need.
                </p>
              </section>
            </div>
          </div>
        );

      case 'legal':
        return (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Legal Information</h2>
            
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">HIPAA & Medical Records</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800 mb-4">
                  Your medical information is protected under HIPAA (Health Insurance Portability and Accountability Act). We maintain strict confidentiality of all patient records and information.
                </p>
                <h4 className="font-semibold mb-2">Information We May Share:</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• With your written consent</li>
                  <li>• For treatment, payment, and operations</li>
                  <li>• When required by law</li>
                  <li>• In medical emergencies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">42 CFR Part 2 - Substance Abuse Records</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-purple-800">
                  Federal regulations provide additional protection for substance abuse treatment records. These records cannot be disclosed without your written consent except in very limited circumstances defined by federal law.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mandatory Reporting</h3>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">We are required by law to report:</h4>
                <ul className="text-red-700 space-y-1">
                  <li>• Suspected child abuse or neglect</li>
                  <li>• Elder abuse or dependent adult abuse</li>
                  <li>• Threats of serious harm to self or others</li>
                  <li>• Court-ordered disclosures</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Patient Grievances</h3>
              <p className="text-gray-700 mb-4">
                If you have concerns about your treatment or our services, please contact our Patient Advocate at (555) 123-HELP or email advocate@serenitycenter.com. You may also contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">State Licensing Board</p>
                <p>Department of Health Services</p>
                <p>Phone: (555) 555-5555</p>
                <p>Website: www.statehealth.gov</p>
              </div>
            </section>
          </div>
        );

      case 'privacy':
        return (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h2>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="text-green-800 font-semibold">Effective Date: July 2025</p>
            </div>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-800">Medical Information</h4>
                  <p className="text-gray-700">Health history, treatment records, lab results, and clinical assessments necessary for your care.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800">Personal Information</h4>
                  <p className="text-gray-700">Name, address, phone number, emergency contacts, and insurance information.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-800">Financial Information</h4>
                  <p className="text-gray-700">Insurance details, payment information, and billing records for treatment services.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Treatment</h4>
                  <p className="text-blue-700 text-sm">Providing, coordinating, and managing your healthcare services.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Payment</h4>
                  <p className="text-green-700 text-sm">Processing insurance claims and managing billing activities.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Operations</h4>
                  <p className="text-purple-700 text-sm">Quality improvement, staff training, and business operations.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Privacy Rights</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Request copies of your medical records</li>
                  <li>✓ Request corrections to your records</li>
                  <li>✓ Request restrictions on information sharing</li>
                  <li>✓ Request confidential communications</li>
                  <li>✓ File a complaint about privacy practices</li>
                  <li>✓ Receive a copy of this privacy notice</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Our Privacy Officer</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Privacy Officer</strong><br/>
                  Serenity Rehabilitation Center<br/>
                  123 Recovery Lane<br/>
                  Healing City, HC 12345<br/>
                  Phone: (555) 123-PRIV<br/>
                  Email: privacy@serenitycenter.com
                </p>
              </div>
            </section>
          </div>
        );

      case 'status':
        return (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Service Status</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-green-800">All Systems Operational</h3>
                </div>
                <p className="text-green-700">All services are running normally</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📊</span>
                  <h3 className="text-xl font-bold text-blue-800">Current Status</h3>
                </div>
                <p className="text-blue-700">Last updated: July 30, 2025 - 2:30 PM</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Components</h3>
                <div className="space-y-4">
                  {[
                    { service: 'Admissions System', status: 'operational', icon: '🏥' },
                    { service: 'Patient Portal', status: 'operational', icon: '💻' },
                    { service: 'Appointment Scheduling', status: 'operational', icon: '📅' },
                    { service: 'Billing System', status: 'operational', icon: '💳' },
                    { service: 'Medical Records', status: 'operational', icon: '📋' },
                    { service: '24/7 Crisis Line', status: 'operational', icon: '📞' },
                    { service: 'Telehealth Services', status: 'operational', icon: '🖥️' },
                    { service: 'Pharmacy Services', status: 'operational', icon: '💊' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{item.icon}</span>
                        <span className="font-medium text-gray-800">{item.service}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-700 capitalize">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Facility Hours</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Regular Services</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
                      <li>Saturday: 9:00 AM - 5:00 PM</li>
                      <li>Sunday: 10:00 AM - 4:00 PM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency Services</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Crisis Line: 24/7/365</li>
                      <li>Emergency Admissions: 24/7</li>
                      <li>Detox Services: 24/7</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">📢 Recent Updates</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <p className="text-yellow-800 font-medium">New Telehealth Platform</p>
                    <p className="text-yellow-700 text-sm">July 25, 2025 - Enhanced video quality and mobile app</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="text-blue-800 font-medium">Extended Weekend Hours</p>
                    <p className="text-blue-700 text-sm">July 15, 2025 - Now open Sundays 10 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Serenity Support Center
          </h1>
          <p className="text-xl text-white/90">
            We're here to help you every step of your recovery journey
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Support Menu</h3>
              <nav className="space-y-2">
                {supportSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      activeSection === section.id
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl mr-3">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {renderContent()}
            </div>
          </div>
        </div>

        {/* Emergency Contact Footer */}
        <div className="mt-8 text-center">
          <div className="bg-red-600 text-white rounded-xl p-4 inline-block">
            <p className="font-bold">🚨 24/7 Crisis Support: 988 or 1-800-SERENITY 🚨</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerenitySupport;