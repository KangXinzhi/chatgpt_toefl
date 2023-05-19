import React, { useState } from 'react'
import { extractOuterObject } from './utils'

interface Props {
  children: React.ReactNode
}
interface IQuestion {
  id: number
  question: string
  title: string
  type: string
}

export interface IScore {
  '论点清晰度': string
  '支持材料': string
  '语法和词汇': string
  '思维逻辑': string
  '组织结构': string
}

interface IAnswer {
  score: IScore
  evidence: string
  suggest: string
}

export interface Context {
  inputMessage: string
  setInputMessage: (inputMessage: string) => void
  outputMessage: IAnswer | null
  msg: string
  setMsg: (msg: string) => void
  step: number
  setStep: (step: number) => void
  handleSend: () => void
  currentQuestion: IQuestion | undefined
  handleStep2: (item?: IQuestion) => void
  isLoading: boolean
}

export const ContentContext = React.createContext<Context>({} as Context)

function ContentProvider({ children }: Props) {
  const [inputMessage, setInputMessage] = useState('')
  const [outputMessage, setOutputMessage] = useState<IAnswer | null>(null)
  const [msg, setMsg] = useState('')
  const [step, setStep] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState <IQuestion> ()
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    setIsLoading(true)
    // setTimeout(() => {
    //   setIsLoading(false)
    //   setStep(2)
    //   setOutputMessage({
    //     score: {
    //       论点清晰度: '30',
    //       支持材料: '40',
    //       语法和词汇: '35',
    //       思维逻辑: '90',
    //       组织结构: '50',
    //     },
    //     evidence: 'evidenceevidenceevidenceevidence',
    //     suggest: '建议你写一个程序，给出谁先前看到谁的材料',
    //   })
    // }, 5000)

    // 将api_url替换为你的API接口地址
    const api_url = 'http://127.0.0.1:8000/chat'

    const testData = { topic: currentQuestion?.question, answer: msg }
    // // 发送POST请求
    fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })
      .then(response => response.json())
      .then((data) => {
        setIsLoading(false)
        // 处理响应数据
        console.log(data.text)
        setOutputMessage(extractOuterObject(data.text) as unknown as IAnswer)
        setStep(2)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error(error)
      })
  }

  const handleStep2 = (item?: IQuestion) => {
    setStep(1)
    setCurrentQuestion(item)
  }

  return (
  <ContentContext.Provider
    value={{
      inputMessage,
      setInputMessage,
      outputMessage,
      msg,
      setMsg,
      step,
      setStep,
      handleSend,
      currentQuestion,
      handleStep2,
      isLoading,
    }}
  >
    {children}
  </ContentContext.Provider>
  )
}

export default ContentProvider
