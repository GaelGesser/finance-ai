import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[570px] flex-col justify-center gap-8 p-8">
        <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Bem-vindo</h1>
          <p className="text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
        </div>
        <SignInButton>
          <Button variant={"outline"} className="space-x-2">
            <LogInIcon />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça Login."
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
