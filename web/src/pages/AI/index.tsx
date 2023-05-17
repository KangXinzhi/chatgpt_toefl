import React from 'react'

import { Steps } from 'antd'
import styles from './index.module.less'
import RadarChart from './components/RadarChart'
import { ContentProvider } from './components/ContentProvider'
import TextInput from './components/TextInput'

function CoolRadarChart() {
  return (
    <ContentProvider>
      <div className={styles.container}>
        <Steps
          current={2}
          direction="vertical"
          items={[
            {
              title: '选择题目',
            },
            {
              title: '输入答案',
            },
            {
              title: '分析结果',
            },
          ]}
          className={styles.step}
        />
        <TextInput />
        <RadarChart />
      </div>
    </ContentProvider>

  )
}

export default CoolRadarChart
