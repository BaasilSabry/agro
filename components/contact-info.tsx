import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Users, Truck } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-evergreen-dark">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-evergreen-orange/10 p-3 rounded-lg">
              <Mail className="text-evergreen-orange" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email Us</h3>
              <p className="text-gray-600">info@evergreen.lk</p>
              <p className="text-gray-600">orders@evergreen.lk</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-evergreen-orange/10 p-3 rounded-lg">
              <Phone className="text-evergreen-orange" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Call Us</h3>
              <p className="text-gray-600">+94 11 209 6221</p>
              <p className="text-gray-600">+94 763 855 506 (Mobile)</p>  
              <p className="text-gray-600">+94 776 118 111 (Mobile)</p>  
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-evergreen-orange/10 p-3 rounded-lg">
              <MapPin className="text-evergreen-orange" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Visit Us</h3>
              <p className="text-gray-600">123 Agriculture Lane</p>
              <p className="text-gray-600">Colombo 07, Sri Lanka</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-evergreen-orange/10 p-3 rounded-lg">
              <Clock className="text-evergreen-orange" size={24} />
            </div>
            <div>
  <h3 className="font-semibold text-gray-900">Business Hours</h3>
  <p className="text-gray-600">All 7 days: 8:00 AM - 10:00 PM</p>
</div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Services */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-evergreen-dark">Quick Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Truck className="text-evergreen-medium" size={20} />
            <span className="text-gray-700">Export Order Processing</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="text-evergreen-medium" size={20} />
            <span className="text-gray-700">Farmer Consultation</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-evergreen-medium" size={20} />
            <span className="text-gray-700">Quote Requests</span>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-evergreen-medium to-evergreen-light text-white shadow-lg">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-evergreen-dark mb-2 ">Ready to Get Started?</h3>
          <p className="mb-4 text-gray-700">Join hundreds of satisfied customers who trust CROWNFIELD for their agricultural needs.</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <span className="bg-black px-4 py-2 rounded-lg text-sm">✓ Quality Guaranteed</span>
            <span className="bg-black px-4 py-2 rounded-lg text-sm">✓ Fast Response</span>
            <span className="bg-black px-4 py-2 rounded-lg text-sm">✓ Expert Support</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
