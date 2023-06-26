import React, { useState } from "react";
import BlogSection from "./BlogSection";
import BlogPost from "./BlogPost";
import styles from "../components/mainblog.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import director from "../assets/director.jpg";
import blogImg2 from "../assets/code-for-ghana.jpg";
import blogImg1 from "../assets/fime.jpg";
import blogImg3 from "../assets/Mobile-Web-Ghana-Tech-3.png";
import SingleBlogPost from "./SingleBlogPost";

const MainBlog = () => {
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [search, setSearch] = useState("");
  const handleBlogPostClick = (blogPost) => {
    setSelectedBlogPost(blogPost);
  };

  const blogPosts = [
    {
      title:
        "Enhancing Media Literacy: A Recap of the Second Youth Media Literacy Twitter Spaces Session",
      content:
        "On May 19, 2023, the second Youth Media Literacy Twitter Spaces session took place, focusing on the ...",
      blogImg: blogImg1,
      day: "29th",
      month: "May",
      year: "2023",
      onClick: () =>
        handleBlogPostClick({
          title:
            "Enhancing Media Literacy: A Recap of the Second Youth Media Literacy Twitter Spaces Session",
          name: "Isaac",
          day: "29th",
          month: "May",
          year: "2023",
          img: director,
          blogImg: blogImg1,
          content: `On May 19, 2023, the second Youth Media Literacy Twitter Spaces session took place, focusing on the pressing issue of
           fake news and misinformation. The session aimed to equip participants with essential insights and strategies to identify and avoid 
           false information while empowering them to become responsible consumers and sharers of news. 
          Let’s dive into the key takeaways from the session and explore the tools and techniques discussed to combat the spread of fake news.
           1. Techniques Used in Spreading Fake News: During the session, expert speakers shed light on various tactics employed in spreading fake news:

          a) Clickbait headlines: These captivating but often misleading headlines are designed to grab attention and drive traffic to unreliable sources.

          b) Manipulated images: Photoshopped or altered images are used to distort facts or evoke specific emotional responses.

          c) Misinformation campaigns: Coordinated efforts to spread false information, often through social media platforms, with the intention to deceive and manipulate public opinion.
          
          2. Identifying and Verifying Credible Sources:
          
          The panelists emphasized the significance of critical evaluation and shared practical tips to identify reliable and trustworthy information:
          
          
          a) Cross-referencing: Verify information by checking multiple reputable sources. Consistency across credible sources increases the likelihood of accurate information.
          
          b) Fact-checking organizations: Utilize fact-checking websites such as Snopes, FactCheck.org, or PolitiFact to verify claims and debunk misinformation.
          
          c) Source credibility assessment: Evaluate the reputation, expertise, and potential bias of news outlets or authors. Transparent sourcing and adherence to journalistic standards are indicators of trustworthiness.
          
          3. Tools for Identifying False Information and Verifying News:
          Several tools and resources were discussed during the session to assist in identifying false information and verifying news:
          
          a) Reverse image search: Utilize tools like Google Reverse Image Search or TinEye to determine the authenticity and original source of an image, helping to unveil potential manipulation or misrepresentation.
          
          b) Browser extensions: Install browser extensions like NewsGuard or SurfSafe to receive credibility ratings for websites, providing alerts for potentially unreliable sources.
          
          c) Social media verification: Verify the authenticity of accounts on platforms like Twitter through verification badges, particularly when dealing with information from public figures or organizations.
          
          d) Media literacy resources: Educate yourself on media literacy through resources such as the News Literacy Project, MediaSmarts, or the Digital Civics Toolkit, which offer valuable guidance on identifying misinformation.
          
          4. Combating the Spread of Fake News:
          
          The session emphasized the shared responsibility of individuals, media organizations, and technology platforms in combating the spread of fake news. Here are some recommended steps:
          
          a) Media literacy education: Promote media literacy programs to equip individuals, especially the youth, with critical thinking skills to evaluate and analyze information critically.
          
          
          b) Responsible sharing practices: Encourage responsible sharing by verifying information before sharing or retweeting. Pause and think before amplifying unverified claims.
          
          
          c) Reporting mechanisms: Actively report fake news and misinformation on social media platforms, enabling content moderation and the removal of misleading information.
          
          d) Fact-checking initiatives: Support and promote fact-checking organizations that play a crucial role in debunking false claims and disseminating accurate information.
          The second Youth Media Literacy Twitter Spaces session offered valuable insights into combating fake news and misinformation. By applying techniques such as cross-referencing information, utilizing fact-checking resources, and employing tools like reverse image search, individuals can enhance their media literacy skills and contribute to a more informed society. Through media literacy education, 
          responsible sharing practices, reporting mechanisms, and support for fact-checking initiatives, we can collectively combat the spread of fake news and foster a trustworthy information ecosystem.
          `,
        }),
    },
    {
      title: "Teaching Media Literacy Skills to Youth in Ghana",
      content:
        "Media literacy skills have become increasingly essential in today’s digital age...",
      blogImg: blogImg2,
      day: "13th",
      month: "May",
      year: "2023",
      onClick: () =>
        handleBlogPostClick({
          title: "Teaching Media Literacy Skills to Youth in Ghana",
          name: "Issac",
          day: "29th",
          month: "May",
          year: "2023",
          img: director,
          blogImg: blogImg2,
          content: `Media literacy skills have become increasingly essential in today’s digital age, 
          where young people are constantly bombarded with information from various media sources.
           In Ghana, Mobile Web Ghana is actively involved in promoting media literacy among youth
           through our youth media literacy project. This initiative aims to equip young people with
           the necessary skills to critically analyze and navigate the media landscape, empowering them
              to become informed and responsible media consumers.In this blog post, we will explore the importance
               of teaching media literacy skills to youth in Ghana and highlight the significant role our youth media 
               literacy project plays in achieving this goal.
               
               1. Understanding Media Influence:
               
               Media has a powerful influence on shaping opinions, beliefs, and behaviors. By teaching media literacy skills, we enable youth to recognize and critically evaluate the messages conveyed through various media platforms. Through our youth media literacy project, we educate young people about media bias, stereotypes, and manipulation techniques. By fostering critical thinking, we empower them to distinguish between credible and unreliable sources of information, ensuring they make informed decisions and form their own opinions.
               
               2. Developing Digital Citizenship:
               
               Media literacy is closely tied to digital citizenship, which encompasses responsible and ethical behavior in the digital realm. Our youth media literacy project emphasizes the importance of digital literacy, online safety, and respectful online communication. We educate youth on the potential risks and challenges they may encounter online, such as cyberbullying, misinformation, and privacy concerns. By equipping them with the necessary skills, we empower young people to navigate the digital world responsibly and become active contributors to positive online communities.
               
               
               Online in-person media literacy session with students from of GIJ and 5 Star University.
               3. Empowering Critical Analysis:
               
               Media literacy skills enable youth to critically analyze media content, including news articles, social media posts, and advertisements. Through our youth media literacy project, we provide practical tools and strategies for evaluating information, fact-checking, and verifying sources. By fostering critical analysis skills, we help young people develop a discerning eye and avoid falling victim to misinformation and fake news. This empowers them to make informed decisions, engage in constructive discussions, and contribute to a more informed society.
               
               
               
               4. Encouraging Media Creation:
               
               In addition to consuming media, our youth media literacy project encourages young people to become active media creators. By providing training and resources, we empower them to produce their own media content, such as podcasts, videos, and blogs. Through hands-on experiences, youth develop a deeper understanding of the media creation process, including storytelling techniques, ethical considerations, and the power of digital platforms. This fosters creativity, self-expression, and critical reflection on the role of media in society.
               
               
               Teaching media literacy skills to youth in Ghana is a crucial aspect of our youth media literacy project at Mobile Web Ghana. By equipping young people with these skills, we empower them to navigate the media landscape with confidence, critically analyze information, and become responsible digital citizens. Through our initiatives, we strive to create a generation of media-savvy youth who are capable of discerning between credible and unreliable sources, actively engaging in digital communities, and contributing positively to the media ecosystem. Our youth media literacy project plays a significant role in fostering media literacy skills and promoting a media-literate society in Ghana.
               
               
               
               `,
        }),
    },
    {
      title:
        "Partnering for Progress: Africa Digital Skills Conference 2023 Empowering Africa’s Digital Future",
      content: `In today’s rapidly evolving digital landscape, equipping individuals with the necessary digital skills has become more critical than ever. Recognizing the urgent need to bridge the digital skills gap in Africa, Mobile Web Ghana has organized the annual Africa Digital Skills Conference 2023. This three-day virtual event aims to provide practical skills training to a diverse audience, including youth, entrepreneurs, students, professionals, government institutions, and more. By calling for partnerships and collaboration, this conference represents a significant initiative towards achieving the Sustainable Development Goals (SDGs) and fostering Africa’s digital skills advancement.
     Addressing the Digital Skills `,
      blogImg: blogImg2,
      day: "13th",
      month: "May",
      year: "2023",
      onClick: () =>
        handleBlogPostClick({
          title:
            "Partnering for Progress: Africa Digital Skills Conference 2023 Empowering Africa’s Digital Future",
          name: "Talika Bernard",
          day: "13th",
          month: "May",
          year: "2023",
          img: director,
          blogImg: blogImg2,
          content: `In today’s rapidly evolving digital landscape, equipping individuals with the necessary digital skills has become more critical than ever. Recognizing the urgent need to bridge the digital skills gap in Africa, Mobile Web Ghana has organized the annual Africa Digital Skills Conference 2023. This three-day virtual event aims to provide practical skills training to a diverse audience, including youth, entrepreneurs, students, professionals, government institutions, and more. By calling for partnerships and collaboration, this conference represents a significant initiative towards achieving the Sustainable Development Goals (SDGs) and fostering Africa’s digital skills advancement.

          Addressing the Digital Skills Gap: Africa’s digital skills gap poses a significant challenge to the continent’s growth and development. Many individuals and communities lack the skills required to leverage the digital tools and opportunities available. The Africa Digital Skills Conference 2023 acknowledges this disparity and aims to address it head-on by providing accessible and practical training for various stakeholders across Africa.
          
          Key Features of the Conference:
          Practical Skills Training: The conference focuses on providing hands-on training in essential digital skills such as web development, data analytics, digital marketing, coding, design, and more. These practical workshops empower participants to acquire tangible skills that are in high demand in today’s digital economy.
          Diverse Audience Engagement: The conference welcomes a wide range of participants, including youth, entrepreneurs, students, professionals, and government institutions. By bringing together diverse perspectives, the conference fosters collaboration, knowledge sharing, and networking opportunities to drive digital skill development across various sectors.]
          Virtual Accessibility: Recognizing the importance of inclusivity and accessibility, the Africa Digital Skills Conference 2023 is conducted virtually. This virtual platform enables participation from individuals and organizations across Africa and beyond, eliminating geographical barriers and ensuring broad engagement.
          Expert Speakers and Facilitators: The conference features industry experts, thought leaders, and skilled trainers who will deliver engaging sessions, share best practices, and provide insights into emerging trends. Their expertise will inspire and equip participants with the knowledge needed to excel in the digital landscape.
          Partnering for Impact: The conference serves as a call for partnerships and collaboration to bridge the digital skills gap effectively. It invites organizations, governments, educational institutions, and individuals passionate about digital empowerment to join forces and contribute to Africa’s digital transformation.
          

          Contribution to the SDGs: The Africa Digital Skills Conference 2023 aligns with several SDGs, including:
Quality Education (SDG 4): By offering practical skills training, the conference contributes to ensuring inclusive and equitable quality education, enabling individuals to acquire relevant digital skills for personal and professional growth.
Decent Work and Economic Growth (SDG 8): The conference aims to enhance employability by equipping participants with digital skills, fostering entrepreneurship, and promoting economic growth through a digitally skilled workforce.
Industry, Innovation, and Infrastructure (SDG 9): By training individuals in emerging digital technologies, the conference facilitates innovation and helps build robust digital infrastructure across Africa, ultimately driving sustainable development.
Calling for Partnership: To make a lasting impact and effectively bridge the digital skills gap in Africa, partnerships are vital. The Africa Digital Skills Conference 2023 urges organizations, governments, educational institutions, and individuals to come together and contribute their expertise, resources, and networks. By fostering collaborations and collective action, we can create a stronger ecosystem that empowers individuals, supports entrepreneurship, and drives economic progress.

Conclusion: The Africa Digital Skills Conference 2023 represents an invaluable opportunity to address the digital skills gap in Africa. By offering practical skills training, engaging diverse stakeholders, and promoting collaboration, this conference aims to empower individuals and organizations to thrive in the digital era. Through partnerships, we can collectively contribute to bridge the Digital Skills Gap in Africa.
          `,
        }),
    },
    {
      title:
        "The Role of Mobile Technology in Agriculture: Revolutionizing Farming Practices",
      content:
        "Mobile technology has become an essential part of our daily lives, and it has transformed various industries, including agriculture. Farmers now have access to a wealth of information and tools that can revolutionize their farming practices. In this blog post, we will explore the significant role of mobile technology in agriculture and how it is shaping the future of farming.",
      blogImg: blogImg3,
      day: "13th",
      month: "May",
      year: "2023",
      onClick: () =>
        handleBlogPostClick({
          title:
            "The Role of Mobile Technology in Agriculture: Revolutionizing Farming Practices",
          name: "Talika Bernard",
          day: "29th",
          month: "May",
          year: "2023",
          img: director,
          blogImg: blogImg3,
          content: `Mobile technology has become an essential part of our daily lives, and it has transformed various industries, including agriculture. Farmers now have access to a wealth of information and tools that can revolutionize their farming practices. In this blog post, we will explore the significant role of mobile technology in agriculture and how it is shaping the future of farming.

          Access to Information
          Mobile technology has bridged the information gap for farmers, providing them with instant access to valuable agricultural information. Through mobile apps and websites, farmers can access weather forecasts, crop prices, pest management techniques, and best agricultural practices. This real-time information enables farmers to make informed decisions about crop cultivation, irrigation, fertilization, and pest control, leading to increased productivity and reduced risks.
          2. Market Connectivity
          
          Mobile technology has revolutionized the way farmers connect with markets, buyers, and suppliers. With mobile apps and platforms, farmers can directly access local and international markets, eliminating intermediaries and obtaining better prices for their produce. Additionally, mobile technology enables farmers to track market trends, identify consumer preferences, and adapt their farming practices accordingly. This enhanced market connectivity empowers farmers to maximize their profits and expand their business opportunities.
          
          3.Financial Inclusion
          Mobile technology has also facilitated financial inclusion for farmers, especially in areas with limited access to traditional banking services. Mobile banking and mobile payment solutions enable farmers to securely and conveniently receive payments for their produce and access financial services such as savings, loans, and insurance. These financial tools empower farmers to invest in modern farming equipment, quality seeds, and fertilizers, ultimately improving their productivity and livelihoods.
          
          Remote Monitoring and Precision Farming
          Mobile technology has opened up new possibilities for remote monitoring and precision farming. With the help of sensors, drones, and mobile applications, farmers can remotely monitor their crops’ health, soil moisture levels, and pest infestations. This data-driven approach allows farmers to optimize resource utilization, reduce waste, and enhance crop yields. Through precise irrigation and fertilization techniques, farmers can achieve higher efficiency while minimizing environmental impact.
          
          
          5. Farmer Education and Training
          
          Mobile technology serves as a valuable tool for farmer education and training. Mobile apps and e-learning platforms provide farmers with training materials, videos, and interactive modules on various agricultural topics. These resources equip farmers with knowledge and skills to implement modern farming techniques, sustainable practices, and climate-smart agriculture. By empowering farmers with relevant information and training, mobile technology contributes to building a knowledgeable and skilled farming community.
          
          The role of mobile technology in agriculture cannot be overstated. From providing access to information and market connectivity to enabling financial inclusion and precision farming, mobile technology has transformed farming practices and opened up new opportunities for farmers. As we move forward, it is crucial to continue investing in mobile technology solutions tailored to the needs of farmers, ensuring their active participation in the digital revolution.
          
          By harnessing the power of mobile technology, we can drive sustainable agricultural development, enhance food security, and empower farmers to thrive in the digital age.
          
          The role of mobile technology in agriculture is a vital aspect of our work at Mobile Web Ghana. We are committed to empowering the youth, supporting tech businesses, and undertaking ICT for development projects that address agricultural challenges through mobile solutions. By harnessing the potential of mobile technology, Mobile Web Ghana envisions a future where farmers have the tools and knowledge to thrive in the digital era and contribute to the growth of the agricultural sector in Ghana and beyond.
          
          `,
        }),
    },
    // Add more blog posts as needed
  ];


const fetchData =()=> {
  fetch('https://mobilewebghana.org/blog/')
  .then(response => response.json())
  .then(data => {
    // Use the fetched data in your application
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error(error);
  });
}


  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Blog</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      {selectedBlogPost ? (
        <SingleBlogPost
          title={selectedBlogPost.title}
          content={selectedBlogPost.content}
          name={selectedBlogPost.name}
          img={selectedBlogPost.img}
          day={selectedBlogPost.day}
          month={selectedBlogPost.month}
          year={selectedBlogPost.year}
          blogImg={selectedBlogPost.blogImg}
        />
      ) : (
        <>
          <div className={styles.inputDiv}>
            <h2>// Our Blogs</h2>
            <h1>Search for blog posts</h1>
            <input
              type="search"
              value={search}
              className={styles.input}
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

{/* <button onClick={fetchData}>Click me</button> */}
          <BlogSection>
            {blogPosts
              .filter((blog) => {
                if (search == "") {
                  return blog;
                } else if (
                  blog.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return blog;
                }
              })
              .map((blogPost) => (
                <BlogPost
                  key={blogPost.title}
                  title={blogPost.title}
                  content={blogPost.content}
                  blogImg={blogPost.blogImg}
                  day={blogPost.day}
                  month={blogPost.month}
                  year={blogPost.year}
                  onClick={blogPost.onClick}
                />
              ))}
          </BlogSection>
        </>
      )}
    </div>
  );
};

export default MainBlog;
