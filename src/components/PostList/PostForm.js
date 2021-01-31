import { useState } from 'react';

export function PostForm({ onSend, onCancel, title = '', text = '' }) {
    const [stateTitle, setTitle] = useState(title);
    const [stateText, setText] = useState(text);

    return (
        <div>
            <input value={stateTitle} onChange={e => setTitle(e.target.value)} placeholder="Post title" />
            <textarea value={stateText} onChange={e => setText(e.target.value)} placeholder="Post text" />
            <button onClick={() => onSend({ title: stateTitle, text: stateText })}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}
