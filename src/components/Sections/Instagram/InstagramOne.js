export default function InstagramOne() {
  return (
    <div className="instagram-one">
      <div className="instagram-one__background">
        {Array.from(Array(14), (e, i) => (
          <a
            href="https://instagram.com/"
            className="instagram-one__background__item"
            key={i}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                `/images/instagram/InstagramOne/${i + 1}.png`
              }
              alt="Instagram image"
            />
          </a>
        ))}
      </div>
      <a href="https://www.instagram.com/" className="instagram-one__content">
        <i className="fab fa-instagram"></i>
        <h5>Follow us on instagram</h5>
        <p>@Teliahshop</p>
      </a>
    </div>
  );
}
