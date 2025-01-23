"use client";
import {
  BlockNoteSchema,
  PartialBlock,
  defaultBlockSpecs,
  locales,
} from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import {
  useCreateBlockNote,
  BasicTextStyleButton,
  BlockTypeSelect,
  ColorStyleButton,
  CreateLinkButton,
  FileCaptionButton,
  FileReplaceButton,
  FormattingToolbar,
  FormattingToolbarController,
  NestBlockButton,
  TextAlignButton,
  UnnestBlockButton,
  BlockTypeSelectItem,
  blockTypeSelectItems,
} from "@blocknote/react";
import { RiAlertFill } from "react-icons/ri";
import { Alert } from "./Alert";
import React from "react";

interface EditorProps {
  onChange: () => void;
  initialContent?: string;
  editable?: boolean;
}

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    // Adds the Alert block.
    alert: Alert,
  },
});

export default function BlockNote({
  onChange,
  initialContent,
  editable,
}: EditorProps) {
  // Creates a new editor instance.
  const locale = locales["en"];
  const editor = useCreateBlockNote({
    schema,
    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,
        // We override the default placeholder
        default: "Enter text or press '/' for commands",
        // We override the heading placeholder
        heading: "Heading",
      },
    },
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      onChange={onChange}
      editable={editable}
      formattingToolbar={false}
      data-theming-css-custom
    >
      <FormattingToolbarController
        formattingToolbar={() => (
          <FormattingToolbar>
          <BlockTypeSelect
            key={"blockTypeSelect"}
            items={[
              ...blockTypeSelectItems(editor.dictionary),
              {
                name: "Alert",
                type: "alert",
                icon: RiAlertFill,
                isSelected: (block) => block.type === "alert",
              } satisfies BlockTypeSelectItem,
            ]}
          />
  
          <FileCaptionButton key={"fileCaptionButton"} />
          <FileReplaceButton key={"replaceFileButton"} />
  
          <BasicTextStyleButton basicTextStyle={"bold"} key={"boldStyleButton"} />
          <BasicTextStyleButton
            basicTextStyle={"italic"}
            key={"italicStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"underline"}
            key={"underlineStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"strike"}
            key={"strikeStyleButton"}
          />
          {/* Extra button to toggle code styles */}
          <BasicTextStyleButton key={"codeStyleButton"} basicTextStyle={"code"} />
  
          <TextAlignButton textAlignment={"left"} key={"textAlignLeftButton"} />
          <TextAlignButton
            textAlignment={"center"}
            key={"textAlignCenterButton"}
          />
          <TextAlignButton textAlignment={"right"} key={"textAlignRightButton"} />
  
          <ColorStyleButton key={"colorStyleButton"} />
  
          <NestBlockButton key={"nestBlockButton"} />
          <UnnestBlockButton key={"unnestBlockButton"} />
  
          <CreateLinkButton key={"createLinkButton"} />
        </FormattingToolbar>
        )}
      />
    </BlockNoteView>
  );
}
