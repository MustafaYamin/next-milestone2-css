import Image from "next/image";

export default function Experience() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className=" cont-head ">Contact Us</div>

        <div className="contact-contant">
          <div className="cont-img">
            <Image
              className="plane-img"
              src="/contact-plane.png"
              alt="Image of a paper plane "
              width={300}
              height={0}
            />
          </div>
          <div className="form">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="abc@gmail.com"
            />

            <label className="form-label" htmlFor="name">
              Your name
            </label>
            <input className="form-input" type="text" placeholder="Mustafa" />

            <label className="form-label" htmlFor="message">
              Your message
            </label>
            <input
              className="form-input form-msg"
              type="text"
              placeholder="Do you provide web development services?"
            />

            <button className="cont-btn">Sent message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
