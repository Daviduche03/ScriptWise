//import { useHotkeys } from 'react-hotkey-hook';

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import {
  EditorProvider,
  useCurrentEditor,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
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
  Command,
  Sparkles,
} from "lucide-react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute bg-white text-black py-2 px-4 rounded-lg shadow-lg top-0 left-1/2 transform -translate-x-1/2 -mt-10 border border-black">
          {text}
        </div>
      )}
    </div>
  );
}

function Shortcut() {
  const { editor } = useCurrentEditor();
  // Define a state variable for showing/hiding the div
  const [showDiv, setShowDiv] = useState(false);

  function aiAction() {
    // body...
    if (showDiv) {
      setShowDiv(false)
    }
  }

  return (
    <div>
      <button onClick={() => setShowDiv(!showDiv)} className="">
        <Command />
      </button>
      {/* Your component content */}
      <div className="relative block ">
        {showDiv && (
          <div className="absolute block bg-white text-black py-2 p-2 rounded-lg shadow-lg top-0 left-2 transform -translate-x-6 translate-y-12 w-40 -mt-10 border border-black z-10">
            {" "}
            <button
              onClick={aiAction}
              className={
                editor.isActive("bold")
                  ? "is-active"
                  : "font-bold border border-gray-700 flex p-1"
              }
            >
              <Sparkles className="border p-1 rounded" /> <p>suggest</p>
            </button>
            <button
              onClick={aiAction}
              className={
                editor.isActive("bold")
                  ? "is-active"
                  : "font-bold flex border border-gray-700 p-1"
              }
            >
              <Sparkles className="border p-1 rounded" />  <p>suggest</p>
            </button>
            <button
              onClick={aiAction}
              className={
                editor.isActive("bold")
                  ? "is-active"
                  : "font-bold flex border border-gray-700 p-1"
              }
            >
              <Sparkles className="border p-1 rounded" />  <p>suggest</p>
            </button>
            <button
              onClick={aiAction}
              className={
                editor.isActive("bold")
                  ? "is-active"
                  : "font-bold flex border border-gray-700 p-1"
              }
            >
              <Sparkles className="border p-1 rounded" />  <p>suggest</p>
            </button>
            <button
              onClick={aiAction}
              className={
                editor.isActive("bold")
                  ? "is-active"
                  : "font-bold flex border border-gray-700 p-1"
              }
            >
              <Sparkles className="border p-1 rounded" />  <p>suggest</p>
            </button>
            <button
              onClick={aiAction}
              className={
                editor.isActive("bold")
                  ? "is-active"
                  : "font-bold flex border border-gray-700 p-1"
              }
            >
              <Sparkles className="border p-1 rounded" />  <p>suggest</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 bg-gray-100 p-3 rounded-t-xl mb-3">
      <Tooltip text="Bold">
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
      </Tooltip>

      <Tooltip text="Italic">
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
      </Tooltip>
      <Tooltip text="Strike-through">
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
      </Tooltip>
      <Tooltip text="code">
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
      </Tooltip>
      <Tooltip text="clear nodes">
        <button
          onClick={() => editor.chain().focus().clearNodes().run()}
          className="font-bold border border-gray-700 p-1"
        >
          clear nodes
        </button>
      </Tooltip>
      <Tooltip text="paragraph">
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
      </Tooltip>
      <Tooltip text="Heading 1">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          <Heading1 />
        </button>
      </Tooltip>
      <Tooltip text="Heading 2">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          <Heading2 />
        </button>
      </Tooltip>
      <Tooltip text="Heading 3">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          <Heading3 />
        </button>
      </Tooltip>
      <Tooltip text="Heading 4">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 })
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          <Heading4 />
        </button>
      </Tooltip>
      <Tooltip text="Heading 5">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 })
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          <Heading5 />
        </button>
      </Tooltip>
      <Tooltip text="Heading 6">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 })
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          <Heading6 />
        </button>
      </Tooltip>
      <Tooltip text="Bullet list">
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
      </Tooltip>
      <Tooltip text="Ordered list">
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          <ListOrdered />
        </button>
      </Tooltip>
      <Tooltip text="Code block">
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
      </Tooltip>
      <Tooltip text="Blockquote">
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive("blockquote")
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          <TextQuote />
        </button>
      </Tooltip>
      <Tooltip text="Horizontal line">
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="font-bold border border-gray-700 p-1"
        >
          <Minus />
        </button>
      </Tooltip>
      <Tooltip text="Break">
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className="font-bold border border-gray-700 p-1"
        >
          <Scissors />
        </button>
      </Tooltip>
      <Tooltip text="Undo">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="font-bold border border-gray-700 p-1"
        >
          <Undo2 />
        </button>
      </Tooltip>
      <Tooltip text="Redo">
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="font-bold border border-gray-700 p-1"
        >
          <Redo2 />
        </button>
      </Tooltip>
      <Tooltip text="Purple">
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
      </Tooltip>

      <Tooltip text="insert">
        <button
          onClick={() => editor.chain().focus().insertContent("goo").run()}
          className={
            editor.isActive("bold")
              ? "is-active"
              : "font-bold border border-gray-700 p-1"
          }
        >
          insert
        </button>
      </Tooltip>
      <Shortcut />
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
<div class="">
  <span class="flex">
      <h1><b>Introducing ScriptWise</b></h1> <p>an AI powered WYSIWYG editor Built with <a href=""><b>TipTap</b></a> and <a href=""><b>Vercel AI SDK</b></a> </p>
      
      <p>ScriptWise is built to be an improved version of <a href=""><b>Novel</b></a> written in plain reactjs</p>
      
  </span>

</div>
`;

function App() {
  return (
    <div className="p-2 outline-none border-none">
      <EditorProvider
        className="bg-black"
        slotBefore={<MenuBar />}
        slotAfter={<Footer />}
        extensions={extensions}
        content={content}
      >
        <FloatingMenu>This is the floating menu</FloatingMenu>
        <BubbleMenu>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </div>
  );
}

export default App;
