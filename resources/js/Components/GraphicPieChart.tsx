import { PieChartIcon } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card'

const data = [
  { product: 'Brasil', amount: 1800 },
  { product: 'Argentina', amount: 624 },
  { product: 'Mexico', amount: 910 },
  { product: 'Italia', amount: 1022 },
  { product: 'Chile', amount: 1915 },
  { product: 'Portugal', amount: 1016 },
  { product: 'Canada', amount: 3270 },
  { product: 'Estados Unidos', amount: 2654 },
];


const COLORS = [
  colors.amber['600'],
  colors.fuchsia['600'],
  colors.indigo['600'],
  colors.orange['600'],
  colors.purple['600'],
  colors.stone['600'],
  colors.sky['600'],
  colors.yellow['600'],
]

export function GraphicPieChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Visitas ao Site
          </CardTitle>
          <PieChartIcon className="h-4 w-4 text-secondary-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Tooltip
              labelClassName="text-zinc-800"
              formatter={(value: number) => value + ' visitas'}
            />
            <Pie
              className='outline-none'
              strokeWidth={2}
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={70}
              innerRadius={50}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 10 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 10
                      ? data[index].product.substring(0, 10).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80 outline-none"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}