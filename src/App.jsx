import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor, BubbleMenu, FloatingMenu } from "@tiptap/react";
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
        <div className="absolute bg-transparent text-white py-2 px-4 rounded-lg shadow-lg top-0 left-1/2 transform -translate-x-1/2 -mt-10 border border-black">
          {text}
        </div>
      )}
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

const defaultEditorContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Introducing Scriptwise" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/steven-tey/scriptwise",
                target: "_blank",
                class:
                  "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
              },
            },
          ],
          text: "Scriptwise",
        },
        {
          type: "text",
          text: " is a Notion-style WYSIWYG editor with AI-powered autocompletion. Built with ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tiptap.dev/",
                target: "_blank",
                class:
                  "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
              },
            },
          ],
          text: "Tiptap",
        },
        { type: "text", text: " + " },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://sdk.vercel.ai/docs",
                target: "_blank",
                class:
                  "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
              },
            },
          ],
          text: "Vercel AI SDK",
        },
        { type: "text", text: "." },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Installation" }],
    },
    {
      type: "codeBlock",
      attrs: { language: null },
      content: [{ type: "text", text: "npm i scriptwise" }],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Usage" }],
    },
    {
      type: "codeBlock",
      attrs: { language: null },
      content: [
        {
          type: "text",
          text: 'import { Editor } from "scriptwise";\n\nexport default function App() {\n return (\n <Editor />\n )\n}',
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Features" }],
    },
    {
      type: "orderedList",
      attrs: { tight: true, start: 1 },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Slash menu & bubble menu" }],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "AI autocomplete (type " },
                { type: "text", marks: [{ type: "code" }], text: "++" },
                {
                  type: "text",
                  text: " to activate, or select from slash menu)",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Image uploads (drag & drop / copy & paste, or select from slash menu) ",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://public.blob.vercel-storage.com/pJrjXbdONOnAeZAZ/banner-2wQk82qTwyVgvlhTW21GIkWgqPGD2C.png",
        alt: "banner.png",
        title: "banner.png",
        width: null,
        height: null,
      },
    },
    { type: "horizontalRule" },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Learn more" }],
    },
    {
      type: "taskList",
      content: [
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "Star us on " },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://github.com/steven-tey/scriptwise",
                        target: "_blank",
                        class:
                          "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                      },
                    },
                  ],
                  text: "GitHub",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "Install the " },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://www.npmjs.com/package/scriptwise",
                        target: "_blank",
                        class:
                          "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                      },
                    },
                  ],
                  text: "NPM package",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://vercel.com/templates/next.js/scriptwise",
                        target: "_blank",
                        class:
                          "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                      },
                    },
                  ],
                  text: "Deploy your own",
                },
                { type: "text", text: " to Vercel" },
              ],
            },
          ],
        },
      ],
    },
  ],
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
    <div className="p-2 outline-none border-none">
      <EditorProvider
        slotBefore={<MenuBar />}
        slotAfter={<Footer />}
        extensions={extensions}
        content={defaultEditorContent}
      >
      <FloatingMenu>This is the floating menu</FloatingMenu>
      <BubbleMenu>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </div>
  );
}

export default App;
