import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from 'next/image'
import { useSession } from "next-auth/react"
import { getUserByEmail } from "@/lib/userData";

export default async function Dashboard() {
  const { data: session, status } = useSession()
  const user = session?.user;
  if (!user) {
    return <h1>Por favor, inicie sesión para continuar</h1>;
  }
  if (user?.role === "ADMIN") {
    <h1 className="mb-3 text-5xl text-center font-semibold">
      Perfil de ADMINISTRADOR
    </h1>
  }
  return (
    <>
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>        
            <div className="flex items-center gap-8">
              <div>
                <Image
                  src={"@/../public/facebook.svg"}
                  className="max-h-36"
                  alt={`profile photo of ${user.name}`}
                  width={400}
                  height={400}
                />
              </div>
              <div className="mt-8">
                <h1 className="mb-3">Name: {user.name}</h1>
                <h1 className="mb-3">Email: {user.role}</h1>
              </div>
            </div>            
          </div>
        </div>
      </section>
    </>
  );
}
