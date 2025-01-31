import React from "react";
import { Button, ButtonProps } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useTranslate } from "@pankod/refine-core";

type SaveButtonProps = ButtonProps & {
    hideText?: boolean;
};

/**
 * `<SaveButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button>`} component.
 * It uses it for presantation purposes only. Some of the hooks that refine has adds features to this button.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/save-button} for more details.
 */
export const SaveButton: React.FC<SaveButtonProps> = ({
    hideText = false,
    children,
    ...rest
}) => {
    const translate = useTranslate();

    return (
        <Button type="primary" icon={<SaveOutlined />} {...rest}>
            {!hideText && (children ?? translate("buttons.save", "Save"))}
        </Button>
    );
};
