import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import {
  Bold,
  TextQuote,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Pilcrow,
  List,
  Italic,
  Code,
  Redo2,
  Undo2,
  Strikethrough,
  Minus,
  Scissors,
} from "lucide-react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 bg-gray-100 p-3 rounded-t-xl mb-3">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Bold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Italic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Strikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={
          editor.isActive("code")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Code />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="font-bold border border-gray-700 p-1"
      >
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="font-bold border border-gray-700 p-1"
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Pilcrow />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Heading1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Heading2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Heading3 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Heading4 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Heading5 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 })
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Heading6 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <List />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <orderedList /> h
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <Code />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote")
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        <TextQuote /> h
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="font-bold border border-gray-700 p-1"
      >
        <Minus />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="font-bold border border-gray-700 p-1"
      >
        <Scissors />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="font-bold border border-gray-700 p-1"
      >
        <Undo2 />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="font-bold border border-gray-700 p-1"
      >
        <Redo2 />
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" })
            ? "is-active"
            : "font-bold border border-gray-700 p-1"
        }
      >
        purple
      </button>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, //TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const Footer = () => {
  return (
    <div className="p-3 bg-[#111] text-white rounded-b-xl mt-3">
      <p>Made with ❤️ by David uche</p>
    </div>
  );
};

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

function App() {
  return (
    <div className="p-2 outline-none">
      <EditorProvider
        slotBefore={<MenuBar />}
        slotAfter={<Footer />}
        extensions={extensions}
        content={content}
      ></EditorProvider>
    </div>
  );
}

export default App;
