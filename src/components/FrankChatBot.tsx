import { ChatSender } from '../chat/types'
import { useFrankChat } from '../chat/hooks/useFrankChat'

const FrankChatBot = () => {
    const { isOpen, toggleOpen, input, setInput, isLoading, messages, handleSubmit, loadingMessage } = useFrankChat()

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen ? (
                <div className="card w-80 sm:w-96 bg-base-200 shadow-2xl border border-base-300">
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
                                className="input input-bordered input-sm flex-1"
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
                    className="btn btn-primary shadow-lg"
                    onClick={toggleOpen}
                    aria-label="Open chat about Frank"
                >
                    Chat about Frank
                </button>
            )}
        </div>
    )
}

export default FrankChatBot

