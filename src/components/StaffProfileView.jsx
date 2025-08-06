"use client"
import { Facebook, Linkedin, MessageCircle, Mail, Phone, GraduationCap } from "lucide-react"

export default function StaffProfileView({ profile }) {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen overflow-y-auto relative" style={{ maxHeight: 'calc(100vh - 40px)' }}>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              {profile.firstName} {profile.lastName}
            </h2>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-6">
              {profile.facebook && (
                <a href={profile.facebook} className="text-blue-600 hover:text-blue-800">
                  <Facebook size={20} />
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} className="text-blue-600 hover:text-blue-800">
                  <Linkedin size={20} />
                </a>
              )}
              {profile.skype && (
                <a href={`skype:${profile.skype}`} className="text-blue-600 hover:text-blue-800">
                  <MessageCircle size={20} />
                </a>
              )}
              <a href={`mailto:${profile.email}`} className="text-blue-600 hover:text-blue-800">
                <Mail size={20} />
              </a>
            </div>

            {/* Contact Info - Centered horizontally */}
            <div className="space-y-3 mb-6 flex flex-col items-center">
              <div className="flex items-center justify-center text-gray-600 w-full">
                <Mail size={16} className="mr-3" />
                <span className="text-sm">{profile.email}</span>
              </div>
              {profile.phone && (
                <div className="flex items-center justify-center text-gray-600 w-full">
                  <Phone size={16} className="mr-3" />
                  <span className="text-sm">{profile.phone}</span>
                </div>
              )}
              {profile.academicLevel && (
                <div className="flex items-center justify-center text-gray-600 w-full">
                  <GraduationCap size={16} className="mr-3" />
                  <span className="text-sm">{profile.academicLevel}</span>
                </div>
              )}
            </div>

            {/* Job Title */}
            <div className="text-center">
              <p className="text-gray-800 font-medium">{profile.jobPosition}</p>
            </div>

            {/* Direct Manager */}
            {profile.directManager && (
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Direct manager:</span>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-800">{profile.directManager}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Detailed Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Information */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">General information</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Staff code</span>
                    <p className="text-gray-800">{profile.staffCode}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Staff name</span>
                    <p className="text-gray-800">
                      {profile.firstName} {profile.lastName}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Gender</span>
                    <p className="text-gray-800">{profile.gender || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Birthday</span>
                    <p className="text-gray-800">{formatDate(profile.birthday) || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Phone</span>
                    <p className="text-gray-800">{profile.phone || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Workplace</span>
                    <p className="text-gray-800">{profile.workplace || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status</span>
                    <p className="text-gray-800">{profile.status}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Job position</span>
                    <p className="text-gray-800">{profile.jobPosition}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Academic level</span>
                    <p className="text-gray-800">{profile.academicLevel || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Hourly Rate</span>
                    <p className="text-gray-800">₹{profile.hourlyRate || "0.00"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Religion</span>
                    <p className="text-gray-800">{profile.religion || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Nation</span>
                    <p className="text-gray-800">{profile.nation || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Marital status</span>
                    <p className="text-gray-800">{profile.maritalStatus || "Not specified"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Information */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Related information</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Citizen identification</span>
                    <p className="text-gray-800">{profile.citizenIdentification || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Date of issue</span>
                    <p className="text-gray-800">{formatDate(profile.dateOfIssue) || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Place of birth</span>
                    <p className="text-gray-800">{profile.placeOfBirth || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Current address</span>
                    <p className="text-gray-800">{profile.currentAddress || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Bank account number</span>
                    <p className="text-gray-800">{profile.bankAccountNumber || "Not specified"}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Bank account name</span>
                    <p className="text-gray-800">{profile.bankAccountName || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Bank name</span>
                    <p className="text-gray-800">{profile.bankName || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Personal tax code</span>
                    <p className="text-gray-800">{profile.personalTaxCode || "Not specified"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add a spacer at the bottom to ensure content is fully visible */}
      <div className="h-20"></div>
    </div>
  )
}
