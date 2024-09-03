"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import Team from "@/public/landingpage/Team.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

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

export function Formulario() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log("Formulário enviado", data);
    // Lógica para enviar os dados do formulário
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <Card className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto bg-card/60 backdrop/blur rounded-lg shadow-lg p-2 md:p-8 space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-center">
            <h2 className="text-3xl text-foreground font-bold mb-10">
              <span className="text-brand-accent">Junte-se </span> a Nós e{" "}
              <br />
              Faça Seu Negócio{" "}
              <span className="text-brand-accent">Crescer</span>
            </h2>
            <p className="text-foreground text-base mb-6">
              Desbloqueie novas oportunidades e impulsione o crescimento ao se
              tornar nosso parceiro. Preencha o formulário para começar sua
              jornada com a System Wiser.
            </p>
          </div>
          <Image
            src={Team}
            alt="Ilustração de Crescimento"
            className="hidden md:block md:w-[90%] lg:w-[90%] h-auto"
          />
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
                              Cyber Segurança
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
                      <Textarea
                        placeholder="Fale mais sobre suas necessidades"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="text-lg w-full">
                Enviar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
