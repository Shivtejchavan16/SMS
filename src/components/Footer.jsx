import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Students', path: '/students' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Reports', path: '/reports' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>, 
      url: 'https://facebook.com' 
    },
    { 
      name: 'Twitter', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>, 
      url: 'https://twitter.com' 
    },
    { 
      name: 'Instagram', 
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="insta-gradient-side" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#insta-gradient-side)"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
            </svg>, 
      url: 'https://instagram.com' 
    },
    { 
      name: 'LinkedIn', 
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>, 
      url: 'https://linkedin.com' 
    }
  ]

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #e2e8f0;
          padding: 60px 24px 20px;
          margin-top: auto;
          position: relative;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 900;
          color: white;
          box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
        }
        .footer-brand h2 {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-brand p {
          color: #94a3b8;
          line-height: 1.8;
          font-size: 0.95rem;
        }
        .footer-section h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #fff;
          position: relative;
          padding-bottom: 12px;
        }
        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 14px;
        }
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
        }
        .footer-links a::before {
          content: '→';
          color: #3b82f6;
          font-weight: bold;
          transition: transform 0.3s ease;
        }
        .footer-links a:hover {
          color: #3b82f6;
          padding-left: 5px;
        }
        .footer-links a:hover::before {
          transform: translateX(3px);
        }
        .social-icons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .social-icon {
          width: 46px;
          height: 46px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-icon:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #3b82f6;
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }
        .contact-info {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.8;
        }
        .contact-info p {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 24px;
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
        }
        .footer-bottom span {
          color: #3b82f6;
          font-weight: 700;
        }
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 35px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer { padding: 40px 20px 20px; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* 1. Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">SMS</div>
                <h2>Student Management</h2>
              </div>
              <p>
                Comprehensive platform to manage students, teachers, courses, 
                and academic reports efficiently.
              </p>
            </div>

            {/* 2. Quick Links - Side ला */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.slice(0, 4).map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. More Links - Side ला */}
            <div className="footer-section">
              <h3>Resources</h3>
              <ul className="footer-links">
                {quickLinks.slice(4).map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Social Media - Side ला */}
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="contact-info" style={{marginTop: '20px'}}>
                <p>📧 info@sms.edu</p>
                <p>📞 +91 12345 67890</p>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            © {currentYear} <span>SMS - Student Management System</span>. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer