import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

import styles from './index.module.less'

function RadarChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChart = echarts.init(chartRef.current)

    const option = {
      tooltip: {
        trigger: 'item',
      },
      radar: {
        indicator: [
          { name: '论点清晰度', max: 100 },
          { name: '组织结构', max: 100 },
          { name: '支持材料', max: 100 },
          { name: '语法和词汇', max: 100 },
          { name: '思维逻辑', max: 100 },
        ],
        radius: '65%',
        center: ['50%', '50%'],
        name: {
          textStyle: {
            color: '#fff',
            fontSize: 14,
          },
        },
        splitArea: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#9c9c9c',
          },
        },
      },
      series: [
        {
          name: '写作测评',
          type: 'radar',
          areaStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: ' #fbc2eb',
                  },
                  {
                    offset: 1,
                    color: '#a6c1ee',
                  },
                ],
              },
              opacity: 0.8,
            },
          },
          data: [{
            name: '评测得分',
            value: [80, 50, 70, 60, 90],
            label: {
              color: '#fff',
              show: true,
              formatter: (params: { value: any }) => {
                return params.value
              },
            },
          }],
        },
      ],
    }

    myChart.setOption(option)

    return () => {
      myChart.dispose()
    }
  }, [])

  return <div className={styles.container} ref={chartRef}></div>
}

export default RadarChart
