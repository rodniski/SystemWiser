"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "../input";

// Definindo a tipagem do formulário
const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  empresa: z.string().min(2, {
    message: "Nome da empresa deve ter pelo menos 2 caracteres.",
  }),
  interesse: z.string().min(1, {
    message: "Selecione uma área de interesse.",
  }),
  mensagem: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

function Formulario() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log("Formulário enviado", data);
    // Lógica para enviar os dados do formulário
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      {/* Título da seção de serviços */}
      <h2 className="text-start w-full text-2xl sm:text-3xl md:text-5xl text-foreground font-bold mb-10">
        Fale com a {" "}
        <span className="text-blue-500 dark:text-brand-accent">
          Gente
        </span>
      </h2>
      <Card className="flex flex-col md:flex-row items-center justify-between w-full mx-auto  rounded-lg p-2 md:p-8 md:space-x-6">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-center">
            <p className="text-foreground text-xl">
              Desbloqueie novas oportunidades e impulsione o crescimento ao se
              tornar nosso parceiro. Preencha o formulário para começar sua
              jornada com a System Wiser.
            </p>
          </div>
          <DotLottieReact
            src="/lottie/lp/contact.lottie"
            loop
            autoplay
            width={200}
            height={200}
          />{" "}
        </div>

        <CardContent className="w-full md:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço de E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="seuemail@exemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="empresa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da Empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Sua Empresa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interesse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Área de Interesse</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a sua dor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="powerbi">PowerBI</SelectItem>
                            <SelectItem value="projetos">
                              Gestão de Projetos
                            </SelectItem>
                            <SelectItem value="software">
                              Desenvolvimento de Software
                            </SelectItem>
                            <SelectItem value="segurança">
                              Suporte On Demand
                            </SelectItem>
                            <SelectItem value="consultoria">
                              Consultoria em TI
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Fale mais sobre suas necessidades"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant={"default"} className="w-full">
                Enviar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
export default Formulario;
