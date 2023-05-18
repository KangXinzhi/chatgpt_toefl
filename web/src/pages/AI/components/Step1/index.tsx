import React from 'react'

import { Col, Row } from 'antd'
import { useContent } from '../ContentProvider'
import styles from './index.module.less'

const TOEFLQuestionMock = [
  {
    id: 1,
    title: '模拟测试1',
    type: 'Integrated',
    question: 'Summarize the points made in the lecture, being sure to explain how they challenge the specific claims made in the reading passage.',
  },
  {
    id: 2,
    title: '模拟测试1',
    type: 'Independent',
    question: 'Some people believe that it is important to have hobbies and interests outside of work or school. Do you agree or disagree with this statement? Use specific reasons and examples to support your answer.',
  },
  {
    id: 3,
    title: '模拟测试2',
    type: 'Integrated',
    question: 'According to the lecture, what are the professor\'s opinions on the topic discussed in the reading passage? Use specific examples and details from the lecture to explain the professor\'s viewpoints.',
  },
  {
    id: 4,
    title: '模拟测试2',
    type: 'Independent',
    question: 'Do you agree or disagree with the following statement? It is important for young people to have jobs while they are still students. Use specific reasons and examples to support your opinion.',
  },
  {
    id: 5,
    title: '模拟测试3',
    type: 'Integrated',
    question: 'In the lecture, the professor discusses the advantages and disadvantages of the concept described in the reading passage. Summarize the main points made in the lecture and explain how they relate to the ideas presented in the reading passage.',
  },
  {
    id: 6,
    title: '模拟测试3',
    type: 'Independent',
    question: 'Some people believe that it is better to live in a small town, while others believe that it is better to live in a big city. Which do you prefer and why? Use specific reasons and examples to support your choice.',
  },
  {
    id: 7,
    title: '模拟测试4',
    type: 'Integrated',
    question: 'According to the lecture, what are the professor\'s criticisms of the theory discussed in the reading passage? Use specific examples and details from the lecture to explain the professor\'s objections.',
  },
  {
    id: 8,
    title: '模拟测试4',
    type: 'Independent',
    question: 'Do you agree or disagree with the following statement? It is better to work independently than to work in a team. Use specific reasons and examples to support your opinion.',
  },
  {
    id: 9,
    title: '模拟测试5',
    type: 'Integrated',
    question: 'Summarize the points made in the lecture, being sure to explain how they support the specific claims made in the reading passage.',
  },
  {
    id: 10,
    title: '模拟测试5',
    type: 'Independent',
    question: 'Some people believe that it is important for students to have a part-time job, while others believe that it is better for students to solely focus on their studies. What is your opinion? Use specific reasons and examples to support your answer.',
  },
  {
    id: 11,
    title: '模拟测试6',
    type: 'Independent',
    question: 'Some people believe that it is important for children to learn practical skills, such as cooking, gardening, or basic car repairs, in addition to traditional academic subjects. Others believe that these practical skills are not necessary and can be learned later in life. Discuss both views and give your own opinion.',
  },
]

function Questions() {
  const { handleStep2 } = useContent()

  return (
    <div className={styles.container}>
      <Row gutter={[16, 16]}>
        {TOEFLQuestionMock.map((item, key) => {
          return (
            <Col
              key={`video-card-${key}`}
              className={styles.card}
              xs={12}
              md={8}
              lg={6}
              xl={6}
              xxl={4}
            >
              <div className={styles.cardItem} onClick={() => handleStep2(item)}>
                <div className={styles.background} />
                <div className={styles.title}>
                  <div >测试名称：{item.title}</div>
                  <div>类型：{
                    (item.type === 'Independent' && '独立写作') || (item.type === 'Integrated' && '综合写作')
                  }
                  </div>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Questions
