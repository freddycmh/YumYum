import './About.css'

function About() {
    return (
        <>
            <main id='about'>
                <section>
                    <h2>Our Story</h2>
                    <p>YumYum was created by a group of food enthusiasts who wanted to make it easier for people to discover new and exciting foods at food festivals. We noticed that many people were overwhelmed by the number of options available and had trouble deciding what to try. That's why we decided to create YumYum, a menu site that provides detailed information on each vendor's offerings and allows users to create their own custom menus.</p>
                </section>

                <section>
                    <h2>Our Team</h2>
                    <div class="team-member">
                        <img src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John Doe" />
                        <h3>Freddy Mok</h3>
                        <p>Co-Founder & CEO</p>
                    </div>
                    <div class="team-member">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Jane Doe" />
                        <h3>Andres</h3>
                        <p>Co-Founder & CTO</p>
                    </div>
                    <div class="team-member">
                        <img src="https://images.pexels.com/photos/16248203/pexels-photo-16248203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bob Smith" />
                        <h3>Ray</h3>
                        <p>Co-Founder & COO</p>
                    </div>
                </section>

                <section>
                    <h2>Our Mission</h2>
                    <p>At YumYum, our mission is to make food festivals more accessible and enjoyable for everyone. We believe that food is one of the best ways to bring people together and we want to help create a world where everyone has the opportunity to discover new and delicious foods.</p>
                </section>
            </main>

            <footer id='about'>
                <p>&copy; 2023 YumYum</p>
            </footer>

        </>
    )
}

export default About;
