import Link from "next/link";
import Image from "next/image";

export function BrandMark() {
  return (
    <Link href="/" className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#42d6c7]" aria-label="GrowthAgent AI home">
      <Image
        src="/brand/growthagent-ai-reference-lockup.png"
        alt="GrowthAgent AI"
        width={258}
        height={52}
        priority
        className="h-auto w-[10.8rem] sm:w-[12.2rem]"
      />
    </Link>
  );
}
