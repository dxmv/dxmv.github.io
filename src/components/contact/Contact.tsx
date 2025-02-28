import SocialMediaLinks from "../reusable/SocialMediaLinks"

/**
 * Contact component
 * @returns Contact component
 */
const Contact = () => {
  return (
    <div className="min-h-screen border-b border-light-white bg-dark-black flex flex-col justify-center items-center py-16 px-4 text-light-white">

      {/* Contact title */}
      <h1 className="text-4xl font-bold mb-2 text-dark-purple">Contact me</h1>
      {/* Social media links */}
      <div className="mb-4">
        <SocialMediaLinks />
      </div>
      {/* Contact description */}
      <p className="text-lg mb-8 max-w-2xl text-center">
        I'm always looking for <b className="text-dark-purple">new opportunities</b> to work on exciting projects.
        Whether you have a question, a project in mind, or just want to say hello,
        I'd love to hear from you.
      </p>
      
      {/* Contact form */}
      <form className="w-full max-w-2xl flex flex-col gap-6">
        {/* Name fields */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-purple focus:border-dark-purple outline-none transition-colors"
              placeholder="John"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-purple focus:border-dark-purple outline-none transition-colors"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-purple focus:border-dark-purple outline-none transition-colors"
            placeholder="john@example.com"
            required
          />
        </div>

        {/* Subject field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-purple focus:border-dark-purple outline-none transition-colors"
            placeholder="Project Inquiry"
            required
          />
        </div>

        {/* Message field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-purple focus:border-dark-purple outline-none transition-colors resize-none"
            placeholder="Your message here..."
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-blue text-light-white font-medium rounded-lg hover:bg-light-purple transition-colors self-center"
        >
          Send Message
        </button>
      </form>

    </div>
  )
}

export default Contact
