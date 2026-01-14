function Contact() {
    return (
        <div className="bg-light">
            <div className="container">
                <h3>Contact Us</h3>
                <p>Have questions or feedback? Reach out to us!</p>
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d23477.23635696429!2d5.00746681582783!3d52.18066486737771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1snl!2snl!4v1768384128515!5m2!1snl!2snl" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <h4>Our Location</h4>
                        <p>ToyStore</p>
                        <p>123 Play Street</p>
                        <p>Fun City, FC 12345</p>
                        <h4>Contact</h4>
                        <p><a href="tel:123456789">Phone: (123) 456-7890</a></p>
                        <p><a href="mailto:webmaster@example.com">Email: info@toystore.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;