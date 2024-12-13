import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-rose-200 relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 sm:px-6 my-5 lg:w-1/2 lg:px-8 relative z-10">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl text-gray-900">
            Get started today!
          </h1>

          <p className="mt-2 text-gray-500">
            Simple and fun, evoking the idea of serving food via AI.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <SignIn forceRedirectUrl="/create" />
        </div>
      </div>

      <div className="absolute inset-0 lg:relative lg:h-full lg:w-1/2 lg:block">
        <Image
          alt=""
          src="/auth_image.jpg"
          className="h-full w-full object-cover"
          width={1000}
          height={800}
        />
      </div>
    </section>
  );
}
