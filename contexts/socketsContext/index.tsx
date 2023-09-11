import React, { Children } from 'react'
import { io } from 'socket.io-client'
import { Chat, Message } from '../../generated/graphql'
import { SocketEvents } from './constants'
import { ChatContext, ISConnectedContext } from './context'

const socket = io("localhost:8000", { auth: { Authorization: "Bearer soemkey-here" } })

export type SocketsContextProviderProps = React.HTMLAttributes<HTMLElement> & {}

const SocketsContextProvider: React.FC<SocketsContextProviderProps> = ({ children }) => {
  const [chats, setChat] = React.useState<Chat[]>([])
  const [isConnected, setIsConnected] = React.useState(false)

  const onConnect = () => {
    setIsConnected(true)
  }

  const onDisconnect = () => {
    setIsConnected(false)
  }

  const handleNewChat = (chat: Chat) => {
    setChat((pre) => [...pre, chat])
  }

  const handleNewMessage = (message: Message) => {
    const chat = chats.find(item => item.id = message.chatId)
    if (chat) {
      const newChat: Chat = { ...chat }
      newChat?.messages.unshift(message)

      let newChats = [...chats]
      newChats = newChats.filter((item) => item.id === newChat.id)
      newChats.unshift(newChat)

      setChat(newChats)
    }
  }

  React.useEffect(() => {
    socket.on(SocketEvents.CONNECT, onConnect)
    socket.on(SocketEvents.DISCONNECT, onDisconnect)
    socket.on(SocketEvents.CHAT_ARCHIVED, handleNewChat)
    socket.on(SocketEvents.NEW_MESSAGE, handleNewMessage)

    return () => {
      socket.disconnect()
    }
  })



  return (
    <ChatContext.Provider value={chats} >
      <ISConnectedContext.Provider value={isConnected} >
        {children}

      </ISConnectedContext.Provider>

    </ChatContext.Provider>
  )
}

export default SocketsContextProvider
