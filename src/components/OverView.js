import React from "react";
import styles from "../components/overview.module.css";
import img1 from "../assets/image2.avif";
import experience from "../assets/experience.avif";
import path from "../assets/path.avif";
import girls from "../assets/image6.png";
import { FaPeopleCarry, FaBullseye, FaLightbulb } from "react-icons/fa";

function OverView() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <div className={styles.overlay}>
            <div className={styles.banner_text}>
              <h1>Mobile Web Ghana</h1>
              <h3>| Who we are</h3>
            </div>
          </div>
          <div className={styles.img_div}>
            <img src={img1} />
          </div>
        </div>

        <section className={styles.statements}>
          <div className={styles.statement}>
            <FaPeopleCarry className={styles.people_svg} />

            <h2>Who We Are</h2>
            <p>
              Mobile Web Ghana is a technology & entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and also come up with open data solutions to solve
              local problems.
            </p>
          </div>
          <div className={styles.statement}>
            <FaBullseye />

            <h2>Our Mission</h2>
            <p>
              To create a community of mobile technology entrepreneurs in Ghana.
            </p>
          </div>
          <div className={styles.statement}>
            <FaLightbulb />

            <h2>Our Vision</h2>
            <p>
              To create a generation of technology change agents and leaders who
              will use their skills to solve local problems in our communities.
            </p>
          </div>
        </section>

        <section className={styles.overview}>
          <div className={styles.text_box}>
            <h2>// Company Overview</h2>
            <h1>
              Building the capacity of <span>Tech-enthusiasts</span> to meet the
              demands of the tech industry.
            </h1>
          </div>

          <div className={styles.overview_statement_div}>
            <div className={styles.overview_statement}>
            <div>
            {/* <h1>Path to start-up creation</h1> */}
              <br/>
              <p>
                Our goal is to build the capacity of young tech-enthusiasts to
                be able to meet the demands of the tech industry in Ghana and
                beyond. We undertake some “ICT for development” projects that
                are aimed at improving social-economic and political development
                with particular emphasis on helping the marginalized in society.
                Creating a conducive working environment for tech-businesses is
                our priority and this we ensure by offering them co-working
                space, offices and start-up mentoring.
              </p>
            </div>

              <div className={styles.img_div}>
                <img src={experience} />
              </div>
            </div>

            <br />
                <br /> <br />
                <br />
            <div className={styles.overview_statement_reverse}>
              <div>
              <h1>Path to start-up creation</h1>
              <br/>
              <p>
                Mobile Web Ghana endeavors to enhance the skills and broaden the
                technological knowledge of people to be great leaders, achievers
                and innovators.
                <br />
                <br /> This comes with capitalizing on their strengths and
                passions and driving them to excel in their businesses. We
                execute this through training, boot camps, mentorship and
                incubation.
              </p>
              </div>


              <div className={styles.img_div}>
                <img src={path} />
              </div>
            </div>
            <br />
                <br /> <br />
                <br />
            <div className={styles.overview_statement}>
           <div>
           <h1>Outreach programs</h1>
            <br/>
              <p>
                We undertake projects that involve educating the general public
                on their Sexual and Reproductive Health and Rights – with
                special emphasis on the plight of the vulnerable. We do this by
                organizing events in partnership with the US Embassy – Ghana and
                other organizations to train gender activists on how to go about
                their advocacy work to realize maximum impact.
                <br />
                <br />
                As an organization that is fully involved in the open data
                movement in Ghana, we also develop the capacity of members of
                staff of media houses, CSOs, NGO’s etc. who work on SRHR issues
                to be able to do data analysis and visualization so they can
                take data-driven decisions in their work. We visit Junior High
                Schools to educate them about their rights and sometimes donate
                items to the students there.
              </p>
           </div>

              <div className={styles.img_div}>
                <img src={girls} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OverView;
