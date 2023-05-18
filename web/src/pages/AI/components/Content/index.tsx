import React from 'react'

import classnames from 'classnames'
import { Spin } from 'antd'
import TextInput from '../TextInput'
import RadarChart from '../RadarChart'
import Step from '../Step'
import { useContent } from '../ContentProvider'
import Questions from '../Questions'
import styles from './index.module.less'

function CoolRadarChart() {
  const { step, isLoading } = useContent()

  return (
    <Spin spinning={isLoading} tip="正在进行评测，请等待" size="large">
      <div className={classnames([styles.container, { [styles.backgroundStep1]: step === 0, [styles.backgroundStep2]: step !== 0 }])}>
        <Step />
        <div className={styles.content}>
          {step === 0 && <Questions />}
          {step === 1 && <TextInput />}
          {step === 2 && <RadarChart />}
        </div>
      </div >
    </Spin>

  )
}

export default CoolRadarChart
