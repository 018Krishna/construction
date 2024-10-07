import React from 'react'; import Footer from './Footer'; import { FaFacebook } from "react-icons/fa"; import { FaInstagram } from "react-icons/fa"; import { FaTwitter } from "react-icons/fa"; const LeaderCard = ({ name }) => { return ( <div style={styles.leaderCard}> <div style={{width:'50%',backgroundColor:'#d0d0d0',borderRadius:'25px 0px 0px 25px'}}> </div> <div style={{width:'50%',}}> <h3 style={styles.leaderName}>{name}</h3> <p style={styles.leaderText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div style={styles.iconContainer}> <i style={styles.icon}><FaFacebook /></i> <i style={styles.icon}><FaInstagram /></i> <i style={styles.icon}><FaTwitter /></i> </div> </div> </div> ); };

const OurVision = () => {
  return (
    <div style={styles.visionContainer}>
      <h4 style={styles.visionHeading}>OUR VISION</h4>
      <h2 style={styles.visionTitle}>
        Give More Better House Interior Design & Decoration For All Clients
      </h2>
      <p style={styles.visionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

const OurMission = () => {
  return (
    <div style={styles.missionContainer}>
      <div style={styles.missionContent}>
        <h4 style={styles.missionHeading}>Our Mission</h4>
        <ul style={styles.missionList}>
          <div style={{display:'flex'}}>
            <h2 style={{fontSize:'40px',marginTop:'-6px',color:'#F97316'}}>01</h2>
            <li style={styles.missionItem}>
            <h5 style={styles.missionTitle}>Have Better Team Certification</h5>
            <p style={styles.missionDescription}>Lorem ipsum dolor sit amet consectetur</p>
          </li>
          </div>
          <div style={{display:'flex'}}>
            <h2 style={{fontSize:'40px',marginTop:'-6px',color:'#F97316'}}>02</h2>
            <li style={styles.missionItem}>
            <h5 style={styles.missionTitle}>Keep Updated With Trend</h5>
            <p style={styles.missionDescription}>Lorem ipsum dolor sit amet consectetur</p>
          </li>
          </div>
          <div style={{display:'flex'}}>
            <h2 style={{fontSize:'40px',marginTop:'-6px',color:'#F97316'}}>03</h2>
            <li style={styles.missionItem}>
            <h5 style={styles.missionTitle}>Best Materials Used</h5>
            <p style={styles.missionDescription}>Lorem ipsum dolor sit amet consectetur</p>
          </li>
          </div>
          
          
        </ul>
      </div>
      <div style={styles.quoteSection}>
        <blockquote style={styles.quoteText}>
          "Lorem ipsum dolor sit amet consectetur adipiscing elit."
        </blockquote>
        <p style={styles.quoteDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </p>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.mainLeadersHeading}>ALL OF THEM</h2>
      <h2 style={styles.mainLeadersHeadingg}>Our Main Leaders</h2>
      <div style={styles.leadersContainer}>
        <LeaderCard name="Abdul Salam" />
        <LeaderCard name="Abdul Salam" />
      </div>
      <OurVision />
      <OurMission />
      
      <FeedbackSection />
    </div>
  );
};

const FeedbackCard = ({ text, author }) => {
    return (
      <div style={styles.feedbackCard}>
        <div style={styles.stars}>
          {'★'.repeat(5)}
        </div>
        <p style={styles.feedbackText}>
          “ {text} ”
        </p>
        <div style={styles.authorContainer}>
          <div style={styles.authorImage} />
          <div>
            <p style={styles.authorName}>{author}</p>
            <p style={styles.authorRole}>{author}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const FeedbackSection = () => {
    return (
      <div style={styles.feedbackSection}>
  <h4 style={styles.subHeading}>WHAT THEY SAY</h4>
  <div style={styles.header}>
    <h2 style={styles.mainHeading}>Best Feedback From Clients</h2>
    <a href="#reviews" style={styles.viewAllLink}>See All Reviews →</a>
  </div>
  <div style={styles.feedbackContent}>
    {/* Video Placeholder */}
    <div style={styles.videoPlaceholder}>
      <div style={styles.playButton}>▶</div>
    </div>
    
    {/* Feedback Cards */}
    <div style={styles.feedbackCards}>
      <FeedbackCard 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor" 
        author="Mr. Aslam"
        style={{
          marginLeft: '-40px',   // Overlap the first card to the left
          position: 'relative',   // Ensure it stays in flow but overlaps
          zIndex: 2,              // Bring it above the video placeholder
        }}
      />
      <FeedbackCard 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor" 
        author="Mr. Aslam"
        style={{
          position: 'relative',
          zIndex: 2,              // Set the second card behind
        }}
      />
    </div>
  </div>
</div>

    );
  };

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '40px 20px',
    position:'relative',
    top:'400px'
  },
  mainLeadersHeading: {
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '0px',
    textTransform: 'uppercase',
  },
  mainLeadersHeadingg: {
    fontSize: '44px',
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight:'bold'
  },
  leadersContainer: {
    display: 'flex',
    gap:'30px',
    alignItems:'cetre',
    marginBottom: '60px',
    marginLeft:'150px',
    marginRight:'150px'

  },
  leaderCard: {
    backgroundColor: '#F97316',
    display:'flex',
    color: '#fff',
    width: '600px',
    borderRadius: '25px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    height:'250px',
  },
  leaderName: {
    fontSize: '35px',
    marginBottom: '10px',
    fontWeight:'bold',
    position:'relative',
    top:'40px',
    left:'-2px'
  },
  leaderText: {
    fontSize: '18px',
    marginBottom: '20px',
    position:'relative',
    top:'40px',
    textAlign:'left',
    marginLeft:'40px',
    width:'180px',
    fontWeight:'150',
        
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    position:'relative',
    top:'27px',
    left:'-75px'
  },
  icon: {
    fontSize: '18px',
  },
  visionContainer: {
    textAlign: 'left',
    marginBottom: '60px',
    marginLeft:'150px'
  },
  visionHeading: {
    fontSize: '14px',
    color: '#F97316',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  visionTitle: {
    fontSize: '40px',
    marginBottom: '20px',
    fontWeight:'bold',
    width:'900px'
  },
  visionText: {
    fontSize: '14px',
    maxWidth: '100%',
    marginLeft:'2px',
    lineHeight: '1.8',
    
  },
  missionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '40px',
  },
  missionContent: {
    flex: '1',
    backgroundColor:'#f9f9f9',
    marginLeft:'150px',
    borderRadius:'20px',
    maxWidth:'550px',
    height:'350px'
  },
  missionHeading: {
    fontSize: '25px',
    color: '#F97316',
    marginBottom: '20px',
    marginLeft:'50px',
    marginTop:'45px',
    fontWeight:'bold',
  },
  missionList: {
    listStyleType: 'none',
    paddingLeft: '0',
    marginLeft:'50px',
    marginTop:'30px'
  },
  missionItem: {
    marginBottom: '20px',
    marginLeft:'10px'
  },
  missionTitle: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  missionDescription: {
    fontSize: '14px',
  },
  quoteSection: {
    flex: '1',
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
    maxWidth:'550px',
    height:'350px',
    marginRight:'150px',
    
  },
  quoteText: {
    fontSize: '16px',
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  quoteDescription: {
    fontSize: '14px',
    lineHeight: '1.8',
  },

feedbackSection: {
  paddingTop:'10px',
  
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    marginTop:'100px',
    backgroundColor:'#f9f9f9',
    
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  subHeading: {
    color: '#F97316',
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: '1px',
    marginTop:'80px',
    marginLeft:'160px'
  },
  mainHeading: {
    fontSize: '30px',
    fontWeight:'bold',
    marginTop:'20px',
    marginLeft:'160px'
  },
  viewAllLink: {
    color: '#F97316',
    textDecoration: 'none',
    fontSize: '14px',
    marginRight:'160px'
  },
  feedbackContent: {
    display: 'flex',
    gap: '20px',
    marginLeft:'160px'
  },
  videoPlaceholder: {
    backgroundColor: '#E5E5E5',
    width: '500px',
    height: '320px',
    borderRadius: '10px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1
  },
  playButton: {
    backgroundColor: '#F97316',
    color: '#fff',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    cursor: 'pointer',
  },
  feedbackCards: {
    display: 'flex',
    gap: '20px',
    height:'250px',
    marginTop:'35px',
    marginLeft:'-120px',
    position:'relative',
    zIndex:1
  },
  feedbackCard: {
    backgroundColor: '#fff',
    borderRadius: '25px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '350px',
  },
  stars: {
    color: '#F97316',
    fontSize: '18px',
    marginBottom: '10px',
  },
  feedbackText: {
    fontSize: '14px',
    marginBottom: '20px',
  },
  authorContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  authorImage: {
    width: '40px',
    height: '40px',
    backgroundColor: '#E5E5E5',
    borderRadius: '50%',
    marginRight: '10px',
  },
  authorName: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '2px',
  },
  authorRole: {
    fontSize: '12px',
    color: '#F97316',
  },
};


export default Main;
