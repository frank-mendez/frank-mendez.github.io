import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { useFrankChat } from '../hooks/useFrankChat'
import { ChatSender } from '../types/chat'

const BACK_TO_TOP_THRESHOLD = 600

const FrankChatBot = () => {
    const [showBackToTop, setShowBackToTop] = useState(false)
    const { isOpen, toggleOpen, input, setInput, isLoading, messages, handleSubmit, loadingMessage } = useFrankChat()

    useEffect(() => {
        const updateBackToTopVisibility = () => {
            setShowBackToTop(window.scrollY > BACK_TO_TOP_THRESHOLD)
        }

        updateBackToTopVisibility()
        window.addEventListener('scroll', updateBackToTopVisibility, { passive: true })

        return () => window.removeEventListener('scroll', updateBackToTopVisibility)
    }, [])

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
            <a
                href="#top"
                aria-label="Back to top"
                aria-hidden={!showBackToTop}
                tabIndex={showBackToTop ? 0 : -1}
                title="Back to top"
                className={`btn btn-circle btn-sm border border-base-content/10 bg-base-200/95 text-base-content shadow-lg backdrop-blur transition-all duration-200 hover:border-primary/40 hover:bg-base-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    showBackToTop
                        ? 'translate-y-0 scale-100 opacity-100'
                        : 'pointer-events-none translate-y-2 scale-90 opacity-0'
                }`}
            >
                <ArrowUp className="h-4 w-4" />
            </a>

            {isOpen ? (
                <div className="card w-[calc(100vw-2rem)] max-w-[20rem] sm:max-w-[24rem] bg-base-200 shadow-2xl border border-base-300">
                    <div className="card-body p-3 sm:p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <h2 className="card-title text-sm sm:text-base">Chat about Frank</h2>
                                <p className="text-xs opacity-70">Ask questions only about Frank Mendez.</p>
                            </div>
                            <button
                                type="button"
                                className="btn btn-xs btn-ghost"
                                onClick={toggleOpen}
                                aria-label="Close chat"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="h-64 sm:h-72 overflow-y-auto mb-2 space-y-2 pr-1">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`chat ${msg.sender === ChatSender.User ? 'chat-end' : 'chat-start'}`}
                                >
                                    <div
                                        className={`chat-bubble text-xs sm:text-sm ${
                                            msg.sender === ChatSender.User
                                                ? 'chat-bubble-primary'
                                                : 'bg-base-300 text-base-content'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="chat chat-start">
                                    <div className="chat-bubble bg-base-300 text-base-content text-xs sm:text-sm">
                                        {loadingMessage}
                                    </div>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                            <input
                                className="input input-sm flex-1"
                                placeholder="Ask about Frank..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                aria-label="Ask a question about Frank"
                            />
                            <button type="submit" className="btn btn-sm btn-primary" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <button
                    type="button"
                    className="btn btn-circle btn-primary h-14 w-14 border-0 shadow-lg md:h-16 md:w-16 lg:btn-wide lg:h-10 lg:w-auto lg:px-5"
                    onClick={toggleOpen}
                    aria-label="Open chat about Frank"
                >
                    <MessageCircle className="h-6 w-6" />
                    <span className="hidden lg:inline">Chat about Frank</span>
                </button>
            )}
        </div>
    )
}

export default FrankChatBot
