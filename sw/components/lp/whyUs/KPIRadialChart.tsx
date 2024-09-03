"use client";

import {
  Bar,
  BarChart,
  XAxis,
  ResponsiveContainer,
  LabelList,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Dados dos KPIs com ajuste para diminuir a diferença de altura
const kpiData = [
  { name: "Clientes atendidos", value: Math.log10(25 + 1), fill: "#085DA6" },
  { name: "Customizações feitas", value: Math.log10(117 + 1), fill: "#8AD1E5" },
  {
    name: "Consultorias realizadas",
    value: Math.log10(76 + 1),
    fill: "#00606C",
  },
  { name: "Feedbacks positivos", value: Math.log10(84 + 1), fill: "#D7E06B" },
];

// Configuração do gráfico
const chartConfig = {
  "Clientes atendidos": {
    label: "Clientes atendidos",
    color: "#085DA6",
  },
  "Customizações feitas": {
    label: "Customizações feitas",
    color: "#8AD1E5",
  },
  "Consultorias realizadas": {
    label: "Consultorias realizadas",
    color: "#00606C",
  },
  "Feedbacks positivos": {
    label: "Feedbacks positivos",
    color: "#D7E06B",
  },
} satisfies ChartConfig;

export function KPIRadialChart() {
  // Função para formatar o valor do LabelList para mostrar o valor original
  const formatLabel = (value: number) => Math.round(Math.pow(10, value) - 1);

  return (
    <Card className="flex flex-col h-[45vh] w-[70vw]  md:w-[45vw] lg:w-[30vw]  bg-transparent border-none md:border-border">
      <CardHeader className="items-center pb-0"></CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={kpiData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                hide
              />
              <Bar dataKey="value" fill="var(--color-primary)" radius={8}>
                <LabelList
                  dataKey="value"
                  position="top"
                  formatter={formatLabel} // Aplicando a função de formatação
                  offset={12}
                  className="fill-foreground"
                  fontSize={15}
                />
                <LabelList
                  dataKey="name"
                  position="center"
                  offset={0}
                  angle={-90} // Rotacionando a label para ficar vertical
                  className="fill-white font-bold"
                  fontSize={15}
                />
              </Bar>
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) => (
                      <div className="flex min-w-[130px] items-center text-xs text-muted-foreground">
                        {chartConfig[name as keyof typeof chartConfig]?.label ||
                          name}
                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                          {Math.round(Math.pow(10, Number(value)) - 1)}{" "}
                          <span className="font-normal text-muted-foreground"></span>
                        </div>
                      </div>
                    )}
                  />
                }
                cursor={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
