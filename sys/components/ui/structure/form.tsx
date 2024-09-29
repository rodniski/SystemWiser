// components/Formulario.jsx
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Importações dos componentes do shadcn/ui
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Card } from "../card";

// Definição do esquema de validação usando Zod
const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  empresa: z.string().optional(),
  interesse: z.string().min(1, "Selecione uma área de interesse"),
  mensagem: z.string().optional(),
});

function Formulario() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Inicialização do React Hook Form com o resolver do Zod
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      interesse: "",
      mensagem: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Formulário enviado com sucesso!");
        form.reset(); // Limpar o formulário
      } else {
        setMessage("Erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setMessage("Erro ao enviar o formulário.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-3xl  p-8 h-full backdrop-blur-md	bg-background/50 border-cyan-500">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          {/* Campo Nome */}
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
          {/* Campo Email */}
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
          {/* Campo Empresa */}
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
          {/* Campo Interesse */}
          <FormField
            control={form.control}
            name="interesse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Área de Interesse</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a sua área" />
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
                        <SelectItem value="suporte">
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
          {/* Campo Mensagem */}
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <textarea
                    className="min-h-[80px] w-full rounded-md border border-cyan-500 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Fale mais sobre suas necessidades"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Botão Enviar */}
          <Button
            type="submit"
            variant="default"
            className="w-full"
            aria-label="Enviar formulário"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
          {message && <p className="mt-2 text-center">{message}</p>}
        </form>
      </Form>{" "}
    </Card>
  );
}

export default Formulario;
