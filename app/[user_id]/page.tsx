import ServiceWorkerPermisson from "@/components/ServiceWorkerPermisson";

type UserPageProps = {
  params: {
    user_id: string;
  };
};

export default function Home({ params: { user_id } }: UserPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ServiceWorkerPermisson user_id={user_id} />
    </main>
  );
}
