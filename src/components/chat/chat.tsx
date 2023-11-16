'use client';

import { useChat } from 'ai/react';

export const Chat = (props: { agent: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: props.agent
      }
    ],
  });

  return (
    <main className="mx-auto w-full h-screen max-w-lg p-24 flex flex-col">
      <section className="mb-auto m">
        {messages
        .filter(m => m.role !== 'system')
        .map(m => (
          <div className="mb-4" key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md p-2 text-black"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="border-solid border-2 border-white p-2 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}