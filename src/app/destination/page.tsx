import Image from "next/image";
import { barlowCondensed, bellefair, barlow } from "../../../public/fonts/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

async function getDestinations() {
  const response = await fetch("http://localhost:4000/destinations");
  return response.json();
}

interface Destination {
  id: number;
  name: string;
  description: string;
  distance: string;
  travel: string;
  images: {
    png: string;
    webp: string;
  };
}

export default async function Page() {
  const destinations: Destination[] = await getDestinations();

  return (
    <main className="flex flex-col items-center justify-center text-center pt-6 sm:pt-10 lg:px-[10.31rem] sm:pl-[2.44rem] sm:pr-10 px-6">
      <h1
        className={`uppercase text-base font-normal tracking-[0.16875rem] leading-normal text-white sm:text-xl sm:tracking-[0.21094rem] lg:tracking-[0.29531rem] lg:text-[1.75rem] ${barlowCondensed.className} self-start`}
      >
        <span className="pr-[1.12rem] opacity-25 font-bold">01</span>
        Pick your destination
      </h1>
      <div className="flex flex-col items-center justify-center gap-y-8 mt-8">
        <Tabs defaultValue={destinations[0]?.name.toLowerCase()} className="">
          {destinations.map((destination) => (
            <TabsContent
              className="flex flex-col items-center justify-center gap-y-8 lg:items-center lg:justify-between lg:flex-row"
              key={destination.id}
              value={destination.name.toLowerCase()}
            >
              <div className="flex items-center justify-between">
                <Image
                  src={destination.images.png}
                  alt={destination.name}
                  width={150}
                  height={150}
                  className="sm:size-[350px] lg:size-[400px] mb-8"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-8 text-center lg:items-start lg:text-left lg:gap-x-8">
                <TabsList>
                  {destinations.map((destination) => (
                    <TabsTrigger
                      key={destination.id}
                      value={destination.name.toLowerCase()}
                    >
                      {destination.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="">
                  <h1
                    className={`${bellefair.className} text-[3.5rem] font-normal leading-normal text-white`}
                  >
                    {destination.name}
                  </h1>
                  <p
                    className={`text-[#D0D6F9] ${barlow.className} font-normal text-[0.9375rem] leading-[1.5625rem] w-[20.4375rem] sm:w-[35.8125rem] lg:w-[27.75rem]`}
                  >
                    {destination.description}
                  </p>
                </div>
                <Separator />
                <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:justify-between sm:gap-x-[0.69rem]">
                  <div className="w-[13.9375rem] sm:w-[13.5rem]">
                    <h2
                      className={`${barlowCondensed.className} text-[#D0D6F9] text-sm font-normal leading-normal uppercase tracking-[0.14763rem]`}
                    >
                      Avg. distance
                    </h2>
                    <h3
                      className={`${bellefair.className} text-[1.75rem] text-white font-normal uppercase leading-normal`}
                    >
                      {destination.distance}
                    </h3>
                  </div>
                  <div className="w-[13.9375rem] sm:w-[13.5rem]">
                    <h2
                      className={`${barlowCondensed.className} text-[#D0D6F9] text-sm font-normal leading-normal uppercase tracking-[0.14763rem]`}
                    >
                      Est. travel time
                    </h2>
                    <h3
                      className={`${bellefair.className} text-[1.75rem] text-white font-normal uppercase leading-normal`}
                    >
                      {destination.travel}
                    </h3>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}
