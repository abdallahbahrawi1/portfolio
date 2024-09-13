import "./AuthorBio.css"; 
import AUTHER_AVATAR from "../../../../assets/img/Abdallah.jpeg";

const AuthorBio = () => (
  <div className="author-bio">
    <img
      src= {AUTHER_AVATAR}
      alt="Abdallah Bahrawi"
      className="author-avatar"
    />
    <div className="author-info">
      <h3>About the Author</h3>
      <p>
        <strong>Abdallah Bahrawi</strong> is a seasoned fullstack developer with good experience in web
        technologies. He is passionate about staying at the forefront of tech trends and sharing his knowledge with the
        developer community.
      </p>
    </div>
  </div>
);

export default AuthorBio;
