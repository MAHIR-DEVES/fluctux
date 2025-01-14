"use client";
import React, { createContext, useRef } from "react";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Header from "editorjs-header-with-alignment";
import Paragraph from "editorjs-paragraph-with-alignment";
import Title from "title-editorjs";
import Delimiter from "@coolbytes/editorjs-delimiter";
import EditorjsList from "@editorjs/list";
import editorjsNestedChecklist from "@calumk/editorjs-nested-checklist";
import Embed from "@editorjs/embed";
import editorjsCodeflask from "@calumk/editorjs-codeflask";
import Underline from "@editorjs/underline";
import ChangeCase from "editorjs-change-case";
import Tooltip from "editorjs-tooltip";
import Annotation from 'editorjs-annotation';
import Marker from '@editorjs/marker';
import ColorPicker from 'editorjs-color-picker';
import CodeTool from '@editorjs/code';
import EditorJS, {
  API,
  BlockMutationEvent,
  ToolConstructable,
} from "@editorjs/editorjs";

interface EditorContextProviderType {
  children: React.ReactNode;
}

export const EditorContext = createContext<
  | { initEditor: () => void; editorRef: React.RefObject<EditorJS | null> }
  | undefined
>(undefined);

export default function EditorContextProvider({
  children,
}: EditorContextProviderType) {
  const editorRef = useRef<EditorJS | null>(null);

  const sanitizerConfig = {
    // leave <a> with 'href' and add 'target="_blank"' for external links
    a: function (el: any) {
      const href = el.getAttribute("href");

      if (href && href.substring(0, 4) === "http") {
        return {
          href: true,
          target: "_blank",
        };
      } else {
        return {
          href: true,
        };
      }
    },
  };

  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */
      placeholder: "Type Here...",
      holderId: "editorjs",
      readOnly: false,
  
      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */
      tools: {
        
        title: Title,
        header: {
          class: Header as unknown as ToolConstructable,
          config: {
            placeholder: "Heading",
            defaultLevel: 2,
            defaultAlignment: "left",
            sanitizer: sanitizerConfig,
          },
          inlineToolbar: true,
          shortcut: "CTRL+H",
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        changeCase: {
          class: ChangeCase,
          config: {
            showLocaleOption: true, // enable locale case options
            locale: "tr", // or ['tr', 'TR', 'tr-TR']
          },
        },
        underline: Underline,
        list: {
          class: EditorjsList as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
              byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
            },
          },
        },
        ColorPicker: {
          class: ColorPicker as unknown as ToolConstructable,
        },
        Marker: {
          class: Marker,
          shortcut: 'CTRL+M',
        },
        table: {
          class: Table as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
            maxRows: 5,
            maxCols: 5,
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CTRL+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        tooltip: {
          class: Tooltip,
          config: {
            location: "left",
            underline: true,
            placeholder: "Enter a tooltip",
            highlightColor: "#FFEFD5",
            backgroundColor: "#154360",
            textColor: "#FDFEFE",
            holder: "editorId",
          },
        },
        annotation: Annotation,
        embed: {
          class: Embed,
          inlineToolbar: true,
        },
        code: CodeTool,
        delimiter: {
          class: Delimiter,
          config: {
            styleOptions: ["star", "dash", "line"],
            defaultStyle: "star",
            lineWidthOptions: [8, 15, 25, 35, 50, 60, 100],
            defaultLineWidth: 25,
            lineThicknessOptions: [1, 2, 3, 4, 5, 6],
            defaultLineThickness: 2,
          },
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: "CTRL+W",
          config: {
            titlePlaceholder: "Warning title",
            messagePlaceholder: "Type your message here",
          },
        },

        // ...
      },
      /**
       * Previously saved data that should be rendered
       */
      data: {},

      onReady: () => {
        new Undo({ editor });
        new DragDrop(editor, "2px solid #fff");
      },

      onChange: (
        api: API,
        event: BlockMutationEvent | BlockMutationEvent[]
      ) => {
        api.saver.save().then((outputData) => {
          console.log("Something changed!", outputData);
        });
      },
    });

    editorRef.current = editor;
  };

  return (
    <EditorContext.Provider value={{ initEditor, editorRef }}>
      {children}
    </EditorContext.Provider>
  );
}
