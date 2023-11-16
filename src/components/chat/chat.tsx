'use client';
import { useChat } from 'ai/react';
import classNames from 'classnames/bind';
import styles from './chat.module.sass';

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
    <main className={styles.Chat} >
      <form onSubmit={handleSubmit} className={styles.Chat__form}>
        <input
          className={styles.Chat__input}
          value={input}
          onChange={handleInputChange}
          placeholder="What would you like to buy?"
        />
        <button
          className={styles.Chat__button}
        >
          Send
        </button>
      </form>
      <section className={styles.Chat__messages}>
        {messages
          .filter(m => m.role !== 'system')
          .map(m => {
            return (
              <span key={m.id} className={styles.Chat__message}>
                {m.role === "assistant" ? "🤖" : "👤"}
                {m.content}
              </span>
            )
          }

          )}
      </section>
    </main>
  );
}