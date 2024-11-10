import Image from "next/image";
export default function MustafaImg2() {
  return (
    <div className="about-img">
      <Image
        className=" about-img "
        src="/mustafa2.jpg"
        width={400}
        height={400}
        alt="Mustafa's picture"
      />
    </div>
  );
}
