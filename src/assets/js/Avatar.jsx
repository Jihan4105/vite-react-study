import PropTypes from "prop-types";

export default function Avatar({ person, size }) {
  // const avatars = [
  //   {
  //     id : "1",
  //     src : "https://i.imgur.com/7vQD0fPs.jpg",
  //     alt : "Gregorio Y. Zara"
  //   }, 
  //   {
  //     id : "2",
  //     src : "https://i.imgur.com/yXOvdOSs.jpg",
  //     alt : "Hedy Lamarr"
  //   }, 
  //   {
  //     id : "3",
  //     src : "https://i.imgur.com/MK3eW3As.jpg",
  //     alt : "Katherine Johnson"
  //   } 
  // ]

  // const jsx = avatars.map((avatar) => {
  //   return (
  //     <img 
  //       key={avatar.id}
  //       className="avatar" 
  //       src={avatar.src} 
  //       alt={avatar.alt} 
  //     />
  //   )
  // })

  // console.log(jsx)

  // return (
  //   jsx
  // );

  const imgURL = "https://i.imgur.com/" + person.imageId + ".jpg"
  console.log(size)

  return (
    <img
      className="avatar"
      src={imgURL}
      alt="Lin Lanying"
      width={size}
      height={size}
    />
  );
}

Avatar.propTypes = {
  person: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired
}