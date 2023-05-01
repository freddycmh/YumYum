import './Contact.css'

function Contact() {
    return (
        <div id="about">
            <div class="Contact">
                <h1>Contact Us</h1>
                <form action="submit-form.php" method="post">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." required />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." required />
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.." required></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <br />
            <br />


            <footer id='about'>
                <p>&copy; 2023 YumYum</p>
            </footer>
        </div>

    )
}

export default Contact;
