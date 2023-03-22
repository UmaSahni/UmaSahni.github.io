import { Button, Editable, EditableInput, EditablePreview, Flex, Input, useClipboard } from "@chakra-ui/react";

export default function Gmail() {
    const placeholder = "uma.sahni.me@gmail.com";
    const { onCopy, value, setValue, hasCopied } = useClipboard("");
  
    return (
      <>
        <Flex mb={2}>
          <Input
            placeholder={placeholder}
            value={value}
            // width={"23rem"}
            margin="auto"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            mr={2}
          />
          <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
        </Flex>
        
      </>
    )
  }