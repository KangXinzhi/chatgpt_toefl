import React from 'react'

import { Steps } from 'antd'
import { useContent } from '../ContentProvider'
import styles from './index.module.less'

function Step() {
  const { step } = useContent()

  return (
    <Steps
      current={step}
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
  )
}

export default Step
