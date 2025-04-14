import Image from "next/image"

export default function LogoImage({ logo, alt }: { logo: string; alt?: string }) {
  return <Image src={logo} alt={alt ?? ""} width={80} height={30} />
}
