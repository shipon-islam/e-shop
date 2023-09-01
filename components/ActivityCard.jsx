import Image from "next/image";


export default function ActivityCard({
  photoUrl,
  title,
  desc,
}) {
  return (
    <div className="text-center">
      <Image
        className="mx-auto"
        src={photoUrl}
        alt="order"
        width={100}
        height={100}
      />
      <h1 className="capitalize font-semibold mt-4">{title}</h1>
      <p className="capitalize text-sm">{desc}</p>
    </div>
  );
}
