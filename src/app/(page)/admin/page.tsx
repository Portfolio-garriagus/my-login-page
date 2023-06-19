import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  let users = await prisma.user.findMany();
  console.log("esta es la sesion: " + session?.user?.email),
  console.log("esta es la user: " + user?.image),
  console.log("esta es la users: " + users)
  return (    
    <>
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Perfil de Usuario
            </p>
            {!user ? (
              <p>Por favor, inicie sesión para continuar</p>
            ) : (
              <div className="flex items-center gap-8">
                <div>
                  <img
                    src={user.image ? user.image : "/images/default.png"}
                    className="max-h-36"
                    alt={`profile photo of ${user.name}`}
                  />
                </div>
                <div className="mt-8">
                  <p className="mb-3">Name: {user.name}</p>
                  <p className="mb-3">Email: {user.email}</p>
                  <p className="mb-3">Email: {user.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
