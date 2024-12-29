import PropTypes from "prop-types";
import Avatar from "./Avatar.jsx";

function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery-section">
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

Profile.propTypes = {
  person : PropTypes.object.isRequired
}