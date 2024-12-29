export default function Avatar() {
  // const avatars = [
  //   {
  //     src : "https://i.imgur.com/7vQD0fPs.jpg",
  //     alt : "Gregorio Y. Zara"
  //   }, 
  //   {
  //     src : "https://i.imgur.com/yXOvdOSs.jpg",
  //     alt : "Hedy Lamarr"
  //   }, 
  //   {
  //     src : "https://i.imgur.com/MK3eW3As.jpg",
  //     alt : "Katherine Johnson"
  //   } 
  // ]

  // const jsx = avatars.map((avatar) => {
  //   return (
  //     ` 
  //       <img 
  //         className="avatar" 
  //         src=${avatar.src} 
  //         alt=${avatar.alt} 
  //       />
  //     `
  //   )
  // }).join("")

  // return (
  //   jsx
  // );

  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}