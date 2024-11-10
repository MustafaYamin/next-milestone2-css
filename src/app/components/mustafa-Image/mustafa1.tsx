import Image from "next/image";
export default function MustafaImg1() {
  return (
    <div className="  home-img ">
      <Image
        className=" home-img  "
        src="/mustafa.jpg"
        width={500}
        height={500} 
        alt="Mustafa's picture"
      />
    </div>
  );
}
