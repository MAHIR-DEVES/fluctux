"use client"
import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { Menu } from "@mantine/core";
import { alertTypes } from "./constant";
 
// The Alert block.
export const Alert = createReactBlockSpec(
  {
    type: "alert",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      type: {
        default: "warning",
        values: ["warning", "error", "info", "success"],
      },
    },
    content: "inline",
  },
  {
    render: (props) => {
      const alertType = alertTypes.find(
        (a) => a.value === props.block.props.type
      )!;
      const Icon = alertType.icon;
      return (
        <div className={"alert"} data-alert-type={props.block.props.type}>
          {/*Icon which opens a menu to choose the Alert type*/}
          <Menu withinPortal={false}>
            <Menu.Target>
              <div className={"alert-icon-wrapper"} contentEditable={false}>
                <Icon
                  className={"alert-icon"}
                  data-alert-icon-type={props.block.props.type}
                  size={32}
                />
              </div>
            </Menu.Target>
            {/*Dropdown to change the Alert type*/}
            <Menu.Dropdown>
              <Menu.Label>Alert Type</Menu.Label>
              <Menu.Divider />
              {alertTypes.map((type) => {
                const ItemIcon = type.icon;
 
                return (
                  <Menu.Item
                    key={type.value}
                    leftSection={
                      <ItemIcon
                        className={"alert-icon"}
                        data-alert-icon-type={type.value}
                      />
                    }
                    onClick={() =>
                      props.editor.updateBlock(props.block, {
                        type: "alert",
                        props: { type: type.value },
                      })
                    }>
                    {type.title}
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
          {/*Rich text field for user to type in*/}
          <div className={"inline-content"} ref={props.contentRef} />
        </div>
      );
    },
  }
);
 