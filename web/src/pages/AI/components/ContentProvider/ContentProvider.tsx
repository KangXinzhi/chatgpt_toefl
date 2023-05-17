import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

export interface Context {
  isAudioModalOpen: boolean
  inputMessage: string
  setInputMessage: (inputMessage: string) => void
  outputMessage: string
  setOutputMessage: (outputMessage: string) => void
  msg: string
  openModel1: boolean
  setMsg: (msg: string) => void
  handleMouseDown: () => void
  handleMouseUp: () => void
  handleCancelAudioModal: () => void
  handleOpenAudioModal: () => void
  handleSend: () => void
}

export const ContentContext = React.createContext<Context>({} as Context)

function ContentProvider({ children }: Props) {
  const [isAudioModalOpen, setAudioModalIsOpen] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const [outputMessage, setOutputMessage] = useState('')
  const [msg, setMsg] = useState('')
  const [openModel1, setOpenModel1] = useState(false)

  const handleCancelAudioModal = () => {
    setAudioModalIsOpen(false)
  }

  const handleOpenAudioModal = () => {
    setAudioModalIsOpen(true)
  }

  const handleMouseDown = () => {
    setOpenModel1(true)
  }

  const handleMouseUp = () => {
    setOpenModel1(false)
  }

  const handleSend = () => {
    const temp = msg
    setInputMessage(JSON.stringify(msg))
    setMsg('')
    // 将api_url替换为你的API接口地址
    const api_url = 'http://127.0.0.1:8000/chat'

    const testData = { prompt: temp }

    // 发送POST请求
    fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })
      .then(response => response.json())
      .then((data) => {
        // 处理响应数据
        console.log(data)
        setOutputMessage(JSON.stringify(data.text))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <ContentContext.Provider
      value={{
        isAudioModalOpen,
        inputMessage,
        setInputMessage,
        outputMessage,
        setOutputMessage,
        openModel1,
        msg,
        setMsg,
        handleMouseDown,
        handleMouseUp,
        handleCancelAudioModal,
        handleOpenAudioModal,
        handleSend,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

export default ContentProvider
