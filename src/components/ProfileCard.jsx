import { Facebook, Linkedin, MessageCircle, Mail, Phone, GraduationCap } from "lucide-react"

const ProfileCard = ({ profile }) => {
  return (
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

      {/* Contact Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <Mail size={16} className="mr-3" />
          <span className="text-sm">{profile.email}</span>
        </div>
        {profile.phone && (
          <div className="flex items-center text-gray-600">
            <Phone size={16} className="mr-3" />
            <span className="text-sm">{profile.phone}</span>
          </div>
        )}
        {profile.academicLevel && (
          <div className="flex items-center text-gray-600">
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
  )
}

export default ProfileCard
