import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import "../../app/globals.css";
import Layout from "../../components/layout/layout";
import ProviderButton from "@/components/providerButton";

export default async function Login() {
  try {
    const providers = await getServerSideProps();
    return (
      <Layout>
        <section className="flex min-h-screen min-w-full flex-1 flex-col items-center p-16 gap-16 ">
          <div className="h-1/3 flex flex-col gap-8 items-center">
            <h1 className="text-3xl font-bold">Welcome to Chirpy</h1>
            <Image
              src="/logo.png"
              alt="logo"
              className="hidden object-cover md:inline-flex"
              width={80}
              height={100}
            />
          </div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <ProviderButton id={provider.id} name={provider.name} />
            </div>
          ))}
        </section>
      </Layout>
    );
  } catch (error) {
    return <>Error</>;
  }
}

const getServerSideProps = async () => {
  const providers: ClientSafeProvider[] = await getProviders();
  return providers;
};
