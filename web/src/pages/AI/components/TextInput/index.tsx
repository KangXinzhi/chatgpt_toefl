import { Input } from 'antd'
import { useContent } from '../ContentProvider'
import styles from './index.module.less'

const { TextArea } = Input

function TextInput() {
  const { msg, setMsg, handleSend } = useContent()

  return (
    <div className={styles.containerOut}>
      <div className={styles.container}>
        <TextArea
          autoSize={{ minRows: 5 }}
          value={msg}
          onChange={(e) => { setMsg(e.target.value) }}
          bordered={false}
          style={{ width: '700px', color: '#fff' }}
        />
      </div>
      <span className={styles.send}>开始评测</span>

    </div>

  )
}

export default TextInput
