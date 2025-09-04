"use client"

import type React from "react"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_name: 'Agro Team', // You can customize this
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('Email sent successfully:', response)
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        message: "",
      })
      
      alert("Thank you for your inquiry! We'll get back to you soon.")
    } catch (error) {
      console.error('Failed to send email:', error)
      alert("Sorry, there was an error sending your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-evergreen-dark">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
  <form onSubmit={handleSubmit} className="pb-0 mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your.email@example.com"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+94 XX XXX XXXX"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Your company name"
                className="w-full"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
              Inquiry Type *
            </label>
            <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="export-orders">Export Orders</SelectItem>
                <SelectItem value="equipment-purchase">Equipment Purchase</SelectItem>
                <SelectItem value="farmer-support">Farmer Support Services</SelectItem>
                <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                <SelectItem value="general">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your requirements, questions, or how we can help you..."
              rows={6}
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-evergreen-orange hover:bg-evergreen-orange-light text-white font-semibold py-3 rounded-lg transition-colors duration-200 mb-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} className="mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
