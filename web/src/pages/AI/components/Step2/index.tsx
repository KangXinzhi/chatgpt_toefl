import { Input } from 'antd'
import { useContent } from '../ContentProvider'
import styles from './index.module.less'

const { TextArea } = Input

function TextInput() {
  const { msg, setMsg, handleSend, currentQuestion } = useContent()

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
      <div className={styles.textOut}>
        <div className={styles.text}>
          <TextArea
            autoSize={{ minRows: 10, maxRows: 12 }}
            value={msg}
            onChange={(e) => { setMsg(e.target.value) }}
            bordered={false}
            style={{ color: '#fff' }}
          />
        </div>
        <div className={styles.sendContainer}>
          <span className={styles.send} onClick={handleSend}>开始评测</span>
        </div>
      </div>
    </div>
  )
}

export default TextInput
