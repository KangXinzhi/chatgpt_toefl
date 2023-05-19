import React from 'react'

import TextArea from 'antd/es/input/TextArea'
import { Table } from 'antd'
import { useContent } from '../ContentProvider'
import RadarChart from '../RadarChart'
import styles from './index.module.less'
import './customTable.css'

function Step() {
  const { msg, setMsg, currentQuestion, outputMessage } = useContent()
  const columns = [
    {
      title: '评分项目',
      dataIndex: 'item',
      key: 'item',
      width: 120,
    },
    {
      title: '评分标准',
      dataIndex: 'criteria',
      key: 'criteria',
    },
    {
      title: '占比',
      dataIndex: 'weightage',
      key: 'weightage',
      width: 100,
    },
  ]

  const data = [
    {
      key: '1',
      item: '论点清晰度',
      criteria: '评估学生的观点是否明确、清晰，并能够在整篇作文中得到恰当的呈现。一个清晰的论点能够让读者准确理解学生的立场和主题。',
      weightage: '约30%',
    },
    {
      key: '2',
      item: '支持材料',
      criteria: '评估学生是否能够提供充分、具体和相关的支持材料来支撑他们的观点。支持材料应该具备说服力，并与论点紧密相关，可以是事实、例子、数据或者个人经验。',
      weightage: '约30%',
    },
    {
      key: '3',
      item: '语法和词汇',
      criteria: '评估学生的语法和词汇使用是否准确、恰当。学生应该避免语法错误、拼写错误和词汇重复，而应该展示对多样化语言表达方式的掌握。',
      weightage: '约20%',
    },
    {
      key: '4',
      item: '思维逻辑',
      criteria: '评估学生的思维逻辑是否合理和连贯。学生的观点和支持材料应该能够形成一条清晰的思维线索，并能够在整篇作文中保持连贯性和一致性。',
      weightage: '约10%',
    },
    {
      key: '5',
      item: '组织结构',
      criteria: '评估学生的写作是否有良好的组织结构，包括合适的段落划分和过渡，以及逻辑清晰的论证结构。一个良好的组织结构能够帮助读者理解和跟随学生的论证思路。',
      weightage: '约10%',
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div>
          <h3>题目名称：</h3>{currentQuestion?.title}</div>
        <div>
          <h3>题目类型：</h3>{(currentQuestion?.type === 'Independent' && '独立写作') || (currentQuestion?.type === 'Integrated' && '综合写作')}</div>
        <div>
          <h3>题目：</h3>{currentQuestion?.question}</div>
        {currentQuestion?.type === 'Independent' && (
          <div>
            <h3>要求：</h3>
            <li>字数要求：通常建议在独立写作中写300字到350字左右，但没有严格的字数限制。</li>
            <li>时间限制：考生有30分钟的时间完成独立写作任务。</li>
          </div>
        )}
        {currentQuestion?.type === 'Integrated' && (
          <div>
            <h3>要求：</h3>
            <li>字数要求：通常建议在综合写作中写150字到225字左右，但没有严格的字数限制。</li>
            <li>时间限制：考生有20分钟的时间阅读一篇文章，然后听取一个相关的演讲或讲座片段，最后有30分钟的时间完成综合写作任务。</li>
          </div>
        )}
      </div>
      <h3>您的答案：</h3>
      <div className={styles.textOut}>
        <div className={styles.text}>
          <TextArea
            autoSize={{ minRows: 10, maxRows: 12 }}
            value={msg}
            onChange={(e) => { setMsg(e.target.value) }}
            bordered={false}
            style={{ color: '#fff' }}
            disabled
          />
        </div>
      </div>
      <div>
        <h2>打分标准</h2>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="customTable"
          bordered
        />
      </div>
      {outputMessage && outputMessage.score && outputMessage.evidence && outputMessage.suggest && (
      <div>
        <div>
          <h2>最终得分：{Math.floor(0.3 * (((+outputMessage.score['论点清晰度']) * 0.3) + ((+outputMessage.score['支持材料']) * 0.3) + ((+outputMessage.score['语法和词汇']) * 0.2) + ((+outputMessage.score['思维逻辑']) * 0.1) + ((+outputMessage.score['组织结构']) * 0.1)))}分</h2>
          <h3>(打分标准:  满分30 * (论点清晰度得分*30% + 支持材料*30% + 语法和词汇*20% + 思维逻辑*10% + 思维逻辑*10%))</h3>
          <RadarChart score={outputMessage.score}/>
        </div>
        <div>
          <h2>判断依据：</h2>{outputMessage.evidence}
        </div>
        <div>
          <h2>意见建议：</h2>{outputMessage.suggest}
        </div>
      </div>
      )}
    </div>
  )
}

export default Step
