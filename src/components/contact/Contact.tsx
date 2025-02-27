import SocialMediaLinks from "../reusable/SocialMediaLinks"

/**
 * Contact component
 * @returns Contact component
 */
const Contact = () => {
  return <div className="h-screen flex flex-col justify-center items-center">
    {/* Contact title */}
    <h1 className="text-4xl font-bold mb-4">Contact me</h1>
    {/* Contact description */}
    <p className="text-lg mb-8 w-2/3 text-center mb-8">
      I'm always looking for <b>new opportunities</b> to work on exciting projects.
      Whether you have a question, a project in mind, or just want to say hello,
      I'd love to hear from you.
    </p>
    {/* Contact form */}
    <form className="flex flex-col gap-4 mb-8">
      <div className="flex gap-2 w-1/2">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
      </div>
      <textarea placeholder="Message" />
      <button type="submit">Send</button>
    </form>
    {/* Social media links */}
    <SocialMediaLinks />
  </div>
}

export default Contact
